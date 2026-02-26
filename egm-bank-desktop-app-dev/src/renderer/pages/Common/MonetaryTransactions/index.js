import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import TransactionTable from './TransactionTable';

const fetchData = async (uri, offset = 0, limit = 0) => {
  const { scheme, host, port, path } = uri;
  const transactionsUrl = `${scheme}://${host}:${port}${path}?offset=${offset}&limit=${limit}`;
  const response = await fetch(transactionsUrl);
  if (!response.ok) throw new Error('Network response was not ok');

  return await response.json();
};

const PAGE_SIZE = 10; // Number of items per page

const MonetaryTransactions = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/transaction',
  };
  const loadData = async () => {
    setLoading(true);
    try {
      const newData = await fetchData(uri, data.length, PAGE_SIZE); // Fetch data based on current length
      setData((prev) => [...newData]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Define colors for the theme
  const headerBgColor = useColorModeValue('blue.300', 'blue.600');
  const rowBgColor = useColorModeValue('blue.50', 'blue.700');

  useEffect(() => {
    loadData(); // Initial data load

    const intervalId = setInterval(() => {
      loadData(); // Load data every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <TransactionTable
      data={data}
      headerBgColor={headerBgColor}
      rowBgColor={rowBgColor}
      loading={loading}
    />
  );
};

export default MonetaryTransactions;
