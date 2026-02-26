import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  HStack,
  TableContainer,
  Tfoot,
  Spinner,
  Input,
  Spacer,
  useColorModeValue,
  Flex,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { actions } from '../../../../store';
import {
  formatToIndianCurrency,
  getEpochMinutesFromTimestamp,
} from '../../../../utils';
import PaginationCustom from '../../../../components/PaginationCustom';
import LoaderWithLogo from '../../../../../renderer/components/LoaderWithLogo';
import { motion } from 'framer-motion';
import { tableStyles } from '../../../../components/Styles/table_styles';
import { RepeatIcon } from '@chakra-ui/icons';
import { LuSearch } from 'react-icons/lu';

const MotionTr = motion.tr;
const MotionDiv = motion.div;

const getItemAge = (transStartTime, transEndTime, lastReset) => {
  return transStartTime
    ? (getEpochMinutesFromTimestamp(transStartTime) -
        getEpochMinutesFromTimestamp(lastReset)) /
        60
    : (getEpochMinutesFromTimestamp(transEndTime) -
        getEpochMinutesFromTimestamp(lastReset)) /
        60;
};

const GameHistoryTableReels = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [timeSearchQuery, setTimeSearchQuery] = useState('');
  const [egmIdSearchQuery, setEgmIdSearchQuery] = useState('');
  const [userIdSearchQuery, setUserIdSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const { lastReset } = useSelector((state) => state.attendant);

  const fetchData = async (uri) => {
    const { scheme, host, port, path } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}`;
    const response = await fetch(transactionsUrl);
    if (!response.ok) throw new Error('Network response was not ok');

    return await response.json();
  };

  const PAGE_SIZE = 11; // Number of items per page

  const normalize = (data) => {
    return data.map((item) => {
      // Reels has totalWin but Roulette has winAmount, so conditionally normalize
      if ('gameId' in item && 'totalWin' in item) {
        return {
          id: item._id,
          gameId: item.gameId,
          egmId: item.egmId,
          uid: item.uid,
          oldCredit: item.oldCredit,
          betAmount: item.betAmount,
          winAmount: item.totalWin,
          newCredit: item.newCredit,
          spinStart: item.spinStart,
          source: 'Reels',
        };
      }

      return {
        id: item.id,
        gameId: item.id,
        egmId: item.egmId,
        uid: item.uid,
        oldCredit: item.oldCredit,
        betAmount: item.betAmount,
        winAmount: item.winAmount,
        newCredit: item.newCredit,
        spinStart: item.spinStart,
        source: 'Roulette',
      };
    });
  };

  const uriReels = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/history',
  };
  const uriRoulette = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9090',
    path: '/api/v2/roulette/results',
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const newDataReels = await fetchData(uriReels);
      const newDataRoulette = await fetchData(uriRoulette);

      const normalizedDataReels = normalize(newDataReels.data);
      const normalizedDataRoulette = normalize(newDataRoulette);

      const allCommonData = [
        ...normalizedDataReels,
        ...normalizedDataRoulette,
      ].sort((a, b) => new Date(b.spinStart) - new Date(a.spinStart));

      setData(allCommonData);
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
    loadData();
  }, []);

  // Filtered data based on search queries
  const filteredData = data?.filter(
    (item) =>
      item.egmId.toLowerCase().includes(egmIdSearchQuery.toLowerCase()) &&
      item.uid.includes(userIdSearchQuery) &&
      item.spinStart.includes(timeSearchQuery) &&
      getItemAge(item.spinStart, item.spinEnd, lastReset) >= 0
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

  // Get the current page data
  const paginatedData = filteredData.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const tableHeaders = [
    'Game Name',
    'Game ID',
    'EGM ID',
    'User ID',
    'Old Credit',
    'Bet Amount',
    'Win Amount',
    'New Credit',
    'Time',
  ];

  return (
    <Box>
      {loading && <LoaderWithLogo />}
      <MotionDiv
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ flex: 1 }}
      >
        <HStack
          mb={4}
          spacing={4}
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex gap={2}>
            <InputGroup maxW="280px">
              <InputLeftElement pointerEvents="none">
                <LuSearch />
              </InputLeftElement>
              <Input
                placeholder="Search by User ID"
                value={userIdSearchQuery}
                onChange={(e) => setUserIdSearchQuery(e.target.value)}
                variant="filled"
                bg="gray.50"
                _hover={{ bg: 'gray.100' }}
                _focus={{ bg: 'white' }}
                rounded="none"
              />
            </InputGroup>

            <InputGroup maxW="280px">
              <InputLeftElement pointerEvents="none">
                <LuSearch />
              </InputLeftElement>
              <Input
                placeholder="Search by Egm ID"
                value={egmIdSearchQuery}
                onChange={(e) => setEgmIdSearchQuery(e.target.value)}
                variant="filled"
                bg="gray.50"
                _hover={{ bg: 'gray.100' }}
                _focus={{ bg: 'white' }}
                rounded="none"
              />
            </InputGroup>

            <InputGroup minW="280px">
              <InputLeftElement pointerEvents="none">
                <LuSearch />
              </InputLeftElement>
              <Input
                placeholder="Search by Transaction Time"
                value={timeSearchQuery}
                onChange={(e) => setTimeSearchQuery(e.target.value)}
                variant="filled"
                bg="gray.50"
                _hover={{ bg: 'gray.100' }}
                _focus={{ bg: 'white' }}
                rounded="none"
              />
            </InputGroup>
          </Flex>

          <Button
            variant="solid"
            w="auto"
            px={5}
            py={2}
            borderRadius="0"
            _hover={{ bg: 'brand.800' }}
            color="white"
            bg="brand.900"
            rounded="md"
            leftIcon={<RepeatIcon />}
            onClick={() => loadData()}
          >
            Refresh
          </Button>
        </HStack>
      </MotionDiv>

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
          <tbody
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {paginatedData.map((item, i) => (
              <MotionTr
                key={item.id}
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
                <td style={tableStyles.thtd}>{item.source}</td>
                <td style={tableStyles.thtd}>{item.gameId}</td>
                <td style={tableStyles.thtd}>{item.egmId}</td>
                <td style={tableStyles.thtd}>{'***' + item.uid.slice(3)}</td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.oldCredit)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.betAmount)}
                </td>
                <td
                  style={{
                    ...tableStyles.thtd,
                    ...(item.winAmount > 0 && {
                      color: 'rgb(69, 189, 0)',
                    }),
                  }}
                >
                  {formatToIndianCurrency(item.winAmount)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.newCredit)}
                </td>
                <td style={tableStyles.thtd}>{item.spinStart}</td>
              </MotionTr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationCustom
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Box>
  );
};

export default GameHistoryTableReels;
