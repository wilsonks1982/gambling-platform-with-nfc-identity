import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Image,
  Text as PDFText,
} from '@react-pdf/renderer';
import Header from '../DailyMetersHeader/Table/Header';
import Content from '../DailyMetersHeader/Table/Content';
import wildAceLogoImage from '../../../../assets/WildAceLogo.png';
import cadillacLogoImage from '../../../../assets/CadillacLogoFiller.png';
import { convertUTCToTimeStamp } from '../../../../utils';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: 'grey',
  },
  watermark: {
    position: 'absolute',
    top: '31%',
    left: '37.5%',
    width: '25%',
    opacity: 0.1,
    zIndex: 0,
  },
});

const DailyMetersPdf = ({ data, role, stations }) => {
  const now = new Date();
  const formattedDate = convertUTCToTimeStamp(now);
  const chunkSize = 6;
  const stationChunks = [];

  for (let i = 0; i < stations.length; i += chunkSize) {
    stationChunks.push(stations.slice(i, i + chunkSize));
  }

  return (
    <Document>
      {stationChunks.map((chunk, pageIndex) => {
        const isFirstPage = pageIndex === 0;

        const headers = [
          'Meter Name',
          ...(isFirstPage ? ['SUM'] : []),
          ...chunk.map((station) => `Station ${station.id}`),
        ];

        const slicedData = data.map((row) => {
          const base = [row[0]];
          if (isFirstPage) base.push(row[1]);
          const offset = pageIndex * chunkSize;
          const slice = row.slice(2 + offset, 2 + offset + chunkSize);
          return [...base, ...slice];
        });

        return (
          <Page
            key={pageIndex}
            size="A4"
            orientation="landscape"
            style={styles.page}
          >
            <Header
              title="Daily Meters Report"
              logoSrc={wildAceLogoImage}
              clientLogo={cadillacLogoImage}
              role={role}
              formattedDate={formattedDate}
            />
            <Content
              logoSrc={wildAceLogoImage}
              data={slicedData}
              headers={headers}
            />
            <PDFText
              style={styles.footer}
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} of ${totalPages}`
              }
              fixed
            />
            <Image src={wildAceLogoImage} style={styles.watermark} />
          </Page>
        );
      })}
    </Document>
  );
};

export default DailyMetersPdf;
