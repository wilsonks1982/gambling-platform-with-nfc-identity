import React, { useState } from 'react';
import {
  Box,
  Text,
  Badge,
  Grid,
  Flex,
  useColorModeValue,
  VStack,
  HStack,
  Button,
  Input,
  position,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { formatToIndianCurrency } from '../../../utils';

const JackpotCard = ({ data, onReload }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const labelColor = useColorModeValue('gray.600', 'gray.400');
  const valueColor = useColorModeValue('gray.900', 'white');
  const [isBaseAmountFormOpen, setIsBaseAmountFormOpen] = useState(false);
  const [baseAmount, setBaseAmount] = useState(null);
  const [isIcrementFormOpen, setIsIncrementFormOpen] = useState(false);
  const [increment, setIncrement] = useState(null);

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/jackpot/service/jackpots',
    method: 'PUT',
  };

  const editData = async (uri, id, data) => {
    const { scheme, host, port, path, method } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}/${id}`;
    const response = await fetch(transactionsUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      onReload();
      setBaseAmount(null);
      setIsBaseAmountFormOpen(false);
      setIsIncrementFormOpen(false);
    }
    return await response.json();
  };

  return (
    <Box
      width="100%"
      borderRadius="xl"
      borderWidth={3}
      borderColor="brand.900"
      bg="white"
      mt={2}
      position="relative"
    >
      {isBaseAmountFormOpen && (
        <VStack
          spacing={2}
          zIndex={999}
          w={'550px'}
          height="auto"
          bg="white"
          position="absolute"
          top="20px"
          left="30%"
          borderRadius="xl"
          borderWidth={3}
          borderColor="brand.900"
          py={4}
          px={3}
          color="black"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Base Amount
          </Text>
          <Input
            type="number"
            value={baseAmount}
            onChange={(e) => setBaseAmount(e.target.value)}
            placeholder="Enter new amount"
          />
          <HStack>
            <Button
              as={'button'}
              onClick={() =>
                editData(uri, data.id, {
                  id: data.id,
                  baseAmount: parseInt(baseAmount),
                })
              }
            >
              Save
            </Button>
            <Button onClick={() => setIsBaseAmountFormOpen(false)}>
              Cancel
            </Button>
          </HStack>
        </VStack>
      )}
      {isIcrementFormOpen && (
        <VStack
          spacing={2}
          zIndex={999}
          w={'550px'}
          height="auto"
          bg="white"
          position="absolute"
          top="20px"
          left="30%"
          borderRadius="xl"
          borderWidth={3}
          borderColor="brand.900"
          py={4}
          px={3}
          color="black"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Jackpot Rate Increment
          </Text>
          <Input
            type="number"
            value={increment}
            onChange={(e) => setIncrement(e.target.value)}
            placeholder="Enter new increment rate value"
          />
          <HStack>
            <Button
              as={'button'}
              onClick={() =>
                editData(uri, data.id, {
                  id: data.id,
                  incrementRate: parseFloat(increment),
                })
              }
            >
              Save
            </Button>
            <Button onClick={() => setIsIncrementFormOpen(false)}>
              Cancel
            </Button>
          </HStack>
        </VStack>
      )}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderTopRadius="lg"
        borderBottomRadius="0"
        px={6}
        py={4}
        boxShadow="md"
        bg="brand.900"
        color="white"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="3xl"
          gap={3}
        >
          {data?.isActive && <CheckCircleIcon color="green.400" boxSize={7} />}
          {!data?.isActive && <WarningIcon color="orange.300" boxSize={7} />}
          <Text fontWeight="semibold">Jackpot {data?.name}</Text>
        </Box>
        <Badge
          colorScheme={data?.isActive ? 'green' : 'red'}
          px={6}
          py={2}
          h="fit-content"
          fontSize="0.75rem"
          borderRadius="full"
          fontWeight="bold"
        >
          {data?.isActive ? 'Active' : 'Inactive'}
        </Badge>
      </Flex>

      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={3}
        py={3}
        px={6}
      >
        {Object.entries(data || {}).map(([key, value]) => {
          if (key === 'isActive') return null;

          return (
            <Box
              key={key}
              p={5}
              borderRadius="xl"
              transition="all 0.2s ease-in-out"
              boxShadow="0 0 2px rgba(0, 0, 0, 0.67)"
              _hover={{
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.91)',
              }}
            >
              <Box
                fontSize="xs"
                fontWeight="bold"
                color="gray.800"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={1}
                display="flex"
                alignItems="center"
              >
                {key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())}
                {key === 'baseAmount' ? (
                  <Text
                    onClick={() => setIsBaseAmountFormOpen(true)}
                    px={4}
                    py={0.2}
                    cursor="pointer"
                    borderRadius="lg"
                    bg="brand.900"
                    color="white"
                    ml={3}
                  >
                    Edit
                  </Text>
                ) : null}
                {key === 'incrementRate' ? (
                  <Text
                    onClick={() => setIsIncrementFormOpen(true)}
                    px={4}
                    py={0.2}
                    cursor="pointer"
                    borderRadius="lg"
                    bg="brand.900"
                    color="white"
                    ml={3}
                  >
                    Edit
                  </Text>
                ) : null}
              </Box>

              <Text
                fontSize="lg"
                fontWeight="semibold"
                color="gray.800"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                display="flex"
                alignItems="center"
              >
                {key === 'currentAmount' && formatToIndianCurrency(value)}
                {key === 'baseAmount' && formatToIndianCurrency(value)}
                {key === 'wonAmount' && formatToIndianCurrency(value)}
                {key !== 'currentAmount' &&
                  key !== 'baseAmount' &&
                  key !== 'wonAmount' &&
                  String(value)}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default JackpotCard;
