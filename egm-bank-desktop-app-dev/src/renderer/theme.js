// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#F2F9FF',
      100: '#E0F0FF',
      200: '#B3E1FF',
      300: '#80C8FF',
      400: '#33AAFF',
      500: '#0088FF',
      600: '#0078E2',
      700: '#006FB1',
      800: '#005588',
      900: '#004466',
    },
    brand2: {
      50: '#f5faff',
      100: '#e0f0ff',
      200: '#b3e1ff',
      300: '#80c8ff',
      400: '#33aaff',
      500: '#0088ff',
      600: '#0077cc',
      700: '#0066aa',
      800: '#005588',
      900: '#004466',
    },
    brandred: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    brandgreen: {
      50: '#f0fff4',
      100: '#c6f6d5',
      200: '#9ae6b4',
      300: '#68d391',
      400: '#48bb78',
      500: '#38a169',
      600: '#2f855a',
      700: '#276749',
      800: '#22543d',
      900: '#1c4532',
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
    // table: "'Roboto', sans-serif",
  },
});

export default customTheme;
