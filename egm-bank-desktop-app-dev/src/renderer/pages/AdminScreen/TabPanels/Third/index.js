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
import DailyMeters from '../../../Common/DailyMeters';
import { useSelector } from 'react-redux';

const handleResetButtonClick = async () => {
  try {
    const uri = {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/cage/service/admin/reset',
    };
    const { scheme, host, port, path } = uri;

    const resetUrl = `${scheme}://${host}:${port}${path}`;

    const data = {};
    const response = await fetch(resetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
  } catch (error) {
    console.error('Error resetting meters: ', error);
  }
};

const fetchData = async (uri) => {
  const { scheme, host, port, path } = uri;
  const transactionsUrl = `${scheme}://${host}:${port}${path}`;
  const response = await fetch(transactionsUrl);
  if (!response.ok) throw new Error('Network response was not ok');

  return await response.json();
};

const PAGE_SIZE = 10;

const DailyMetersTable = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/cage/service/meter/monthly',
  };
  const loadData = async () => {
    setLoading(true);
    try {
      const newData = await fetchData(uri);
      setData((prev) => [...newData]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const headerBgColor = useColorModeValue('brand.300', 'brand.600');
  const rowBgColor = useColorModeValue('brand.200', 'brand.700');

  useEffect(() => {
    loadData();

    const intervalId = setInterval(() => {
      loadData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DailyMeters
      data={data}
      headerBgColor={headerBgColor}
      rowBgColor={rowBgColor}
      loadingMetersData={loading}
      filename="Monthly Meters"
      heading="Monthly Meters"
      onResetButtonClick={handleResetButtonClick}
    />
  );
};

export default DailyMetersTable;
