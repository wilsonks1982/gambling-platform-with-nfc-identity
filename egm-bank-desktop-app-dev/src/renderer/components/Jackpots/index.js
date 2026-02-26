import React, { useState, useEffect } from 'react';
import JackpotCard from './JackpotCard';
import {
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  Box,
} from '@chakra-ui/react';
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Jackpots = () => {
  const [data, setData] = useState([]);

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/jackpot/service/jackpots',
  };

  const fetchData = async (uri) => {
    const { scheme, host, port, path } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}`;
    const response = await fetch(transactionsUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  };

  const loadData = async () => {
    try {
      const newData = await fetchData(uri);
      setData(newData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box w="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        py={3}
        px={5}
        borderRadius='lg'
        bg="brand.900"
        color="white"
      >
        <Text fontSize={'xl'} textTransform='uppercase' fontWeight={'bold'}>
          All Jackpots
        </Text>
        <Menu>
          <MenuButton
            bg="gray.300"
            px={4}
            py={2}
            _hover={{ bg: 'gray.200' }}
            _expanded={{ bg: 'gray.400' }}
            color="gray.800"
            fontWeight="medium"
            borderRadius="md"
            shadow="sm"
          >
            Actions
          </MenuButton>

          <MenuList
            bg="white"
            shadow="xl"
            minW="200px"
            borderRadius="0px"
            p="0px"
          >
            <MenuItem
              onClick={() => loadData()}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontWeight="medium"
              textAlign="center"
              _hover={{ bg: 'gray.200' }}
              color="gray.900"
              px={2}
              py={1}
              minH={'50px'}
            >
              Refresh
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {data.map((item, index) => (
        <JackpotCard key={index} data={item} onReload={() => loadData()} />
      ))}
    </Box>
  );
};

export default Jackpots;
