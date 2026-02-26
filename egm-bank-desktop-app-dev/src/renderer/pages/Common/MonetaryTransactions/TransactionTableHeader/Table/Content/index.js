import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from './styles'; // Assuming the styles are in a separate file
import {
  formatToIndianCurrency,
  getEpochMinutesFromTimestamp,
} from '../../../../../../utils';

const Content = ({ data, headers, lastReset }) => {
  const getItemAge = (transStartTime, transEndTime, lastReset) => {
    return transStartTime
      ? (getEpochMinutesFromTimestamp(transStartTime) -
          getEpochMinutesFromTimestamp(lastReset)) /
          60
      : (getEpochMinutesFromTimestamp(transEndTime) -
          getEpochMinutesFromTimestamp(lastReset)) /
          60;
  };

  return (
    <View style={styles.table}>
      {/* Header Row */}
      <View style={[styles.row, styles.headerRow]}>
        {headers.map((header, index) => (
          <Text
            style={[{ flex: 1 / headers.length }, styles.headerCell]}
            key={index}
          >
            {header}
          </Text>
        ))}
      </View>

      {/* Data Rows */}
      {data.map((item, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {item.uid}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {item.transType}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {item.transBy}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {getItemAge(
              item.transStartTime,
              item.transEndTime,
              lastReset
            ).toFixed(2)}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {formatToIndianCurrency(item.depositAmount)}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {formatToIndianCurrency(item.withdrawAmount)}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {formatToIndianCurrency(item.prevCredit)}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {formatToIndianCurrency(item.thenCredit)}
          </Text>
          <Text style={[{ flex: 1 / headers.length }, styles.cell]}>
            {item.transStartTime ? item.transStartTime : item.transEndTime}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Content;
