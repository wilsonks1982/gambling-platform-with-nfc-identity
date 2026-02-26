import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tfoot,
} from '@chakra-ui/react';
import DailyMetersHeader from './DailyMetersHeader';
import { formatToIndianCurrency } from '../../../utils';
import LoaderWithLogo from '../../../components/LoaderWithLogo';
import { useDispatch, useSelector } from 'react-redux';
import {
  StationsSet,
  StationsLoading,
} from '../../../../renderer/store/slices/stations';
import { motion } from 'framer-motion';
import { tableStyles } from '../../../components/Styles/table_styles';

const MotionTr = motion.tr;

const DailyMeters = ({
  data,
  headerBgColor,
  rowBgColor,
  loadingMetersData,
  filename = 'Daily Meters',
  heading = 'Daily Meters',
  onResetButtonClick,
}) => {
  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/cage/service/stations',
  };

  const fetchData = async (uri) => {
    const { scheme, host, port, path } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}`;
    const response = await fetch(transactionsUrl);
    if (!response.ok) throw new Error('Network response was not ok');

    return await response.json();
  };

  const loadData = async () => {
    dispatch(StationsLoading(true));
    try {
      const newData = await fetchData(uri);
      const sortedData = newData.sort((a, b) => a.id - b.id);
      dispatch(StationsSet(sortedData));
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const { stations, loading } = useSelector((state) => state.stations);
  const dispatch = useDispatch();

  const tableHeaders = [
    'Meter Name',
    'SUM',
    ...stations?.map((station) => `Station ${station.id}`),
  ];

  const initializeRow = (label) => {
    const length = stations.length + 2;
    const row = new Array(length).fill('0');
    row[0] = label;
    return row;
  };

  const coinInRow = initializeRow('Total coin in (AD)');
  const coinOutRow = initializeRow('Total coin out (AD)');
  const creditsBetRow = initializeRow('Credits bet (AD)');
  const creditsWonRow = initializeRow('Credits won (AD)');
  const profitRow = initializeRow('Profit (AD)');
  const gamesPlayedRow = initializeRow('Games Played');
  const gamesWonRow = initializeRow('Games Won');

  coinInRow[1] = formatToIndianCurrency(
    data.reduce((acc, item) => acc + item.coinIn, 0)
  );
  coinOutRow[1] = formatToIndianCurrency(
    data.reduce((acc, item) => acc + item.coinOut, 0)
  );
  creditsBetRow[1] = formatToIndianCurrency(
    data.reduce((acc, item) => acc + item.creditsBet, 0)
  );
  creditsWonRow[1] = formatToIndianCurrency(
    data.reduce((acc, item) => acc + item.creditsWon, 0)
  );
  profitRow[1] = formatToIndianCurrency(
    data.reduce((acc, item) => acc + (item.coinIn - item.coinOut), 0)
  );
  gamesPlayedRow[1] = data.reduce((acc, item) => acc + item.gamesPlayed, 0);
  gamesWonRow[1] = data.reduce((acc, item) => acc + item.gamesWon, 0);

  stations.forEach((station, index) => {
    const stationData = data.find((item) => item.id === station.id);

    if (stationData) {
      coinInRow[index + 2] = formatToIndianCurrency(stationData.coinIn);
      coinOutRow[index + 2] = formatToIndianCurrency(stationData.coinOut);
      creditsBetRow[index + 2] = formatToIndianCurrency(stationData.creditsBet);
      creditsWonRow[index + 2] = formatToIndianCurrency(stationData.creditsWon);
      profitRow[index + 2] = formatToIndianCurrency(
        stationData.coinIn - stationData.coinOut
      );
      gamesPlayedRow[index + 2] = stationData.gamesPlayed;
      gamesWonRow[index + 2] = stationData.gamesWon;
    } else {
      coinInRow[index + 2] = '-';
      coinOutRow[index + 2] = '-';
      creditsBetRow[index + 2] = '-';
      creditsWonRow[index + 2] = '-';
      profitRow[index + 2] = '-';
      gamesPlayedRow[index + 2] = '-';
      gamesWonRow[index + 2] = '-';
    }
  });

  const rows = [
    coinInRow,
    coinOutRow,
    creditsBetRow,
    creditsWonRow,
    profitRow,
    gamesPlayedRow,
    gamesWonRow,
  ];

  return (
    <Box>
      {loading && <LoaderWithLogo />}
      <DailyMetersHeader
        data={rows}
        filename={filename}
        heading={heading}
        loadingMetersData={loadingMetersData}
        onResetButtonClick={onResetButtonClick}
        stations={stations}
      />

      <div style={tableStyles.container}>
        <table style={tableStyles.table}>
          <thead style={tableStyles.thead}>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} style={tableStyles.thtd}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((item, i) => (
              <MotionTr
                key={i}
                initial={{ opacity: 0, rotateY: 0 }}
                animate={{
                  opacity: 1,
                  rotateY: 1,
                  transition: { delay: i * 0.03 },
                }}
                exit={{ opacity: 0, rotateY: 0 }}
                whileHover={{
                  background: 'rgb(255, 211, 161)',
                  transition: { delay: 0, duration: 0.1 },
                }}
                style={{
                  ...(i % 2 === 0 ? tableStyles.trEven : {}),
                }}
              >
                {item.map((cell, i) => (
                  <td key={i} style={tableStyles.thtd}>
                    {cell}
                  </td>
                ))}
              </MotionTr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default DailyMeters;
