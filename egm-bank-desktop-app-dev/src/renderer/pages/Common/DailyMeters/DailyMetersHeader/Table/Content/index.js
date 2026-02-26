import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import styles from './styles';

const Content = ({ data, headers }) => {
  return (
    <View style={{ position: 'relative' }}>
      <View style={[styles.table, { zIndex: 1 }]}>
        <View style={[styles.row, styles.headerRow]}>
          {headers.map((header, index) => (
            <Text key={index} style={[styles.headerCell, { flex: 1 }]}>
              {header}
            </Text>
          ))}
        </View>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <Text key={cellIndex} style={[styles.cell, { flex: 1 }]}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Content;
