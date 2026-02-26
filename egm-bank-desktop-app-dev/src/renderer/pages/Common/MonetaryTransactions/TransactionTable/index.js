import React, { useState } from 'react';
import {
  Box,
  Input,
  HStack,
  Spacer,
  Spinner,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import TransactionTableHeader from '../TransactionTableHeader';
import PaginationCustom from '../../../../components/PaginationCustom';
import {
  formatToIndianCurrency,
  getEpochMinutesFromTimestamp,
} from '../../../../utils';
import { motion } from 'framer-motion';
import { tableStyles } from '../../../../components/Styles/table_styles';
import LoaderWithLogo from '../../../../components/LoaderWithLogo';
import { LuSearch } from 'react-icons/lu';

const MotionDiv = motion.div;
const MotionTr = motion.tr;

const PAGE_SIZE = 12;

const getItemAge = (start, end, reset) => {
  const startTime = getEpochMinutesFromTimestamp(start);
  const endTime = getEpochMinutesFromTimestamp(end);
  const resetTime = getEpochMinutesFromTimestamp(reset);
  return ((start ? startTime : endTime) - resetTime) / 60;
};

const TransactionTable = ({ data, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [uidSearchQuery, setUidSearchQuery] = useState('');
  const [timeSearchQuery, setTimeSearchQuery] = useState('');
  const { lastReset } = useSelector((state) => state.attendant);

  const filteredData = data.filter(
    (item) =>
      item.uid.toLowerCase().includes(uidSearchQuery.toLowerCase()) &&
      item.transStartTime.includes(timeSearchQuery) &&
      getItemAge(item.transStartTime, item.transEndTime, lastReset) >= 0
  );

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

  const paginatedData = filteredData
    .slice()
    .reverse()
    .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  return (
    <Box maxH="780px" minH="780px">
      {loading && <LoaderWithLogo />}

      <TransactionTableHeader data={filteredData} lastReset={lastReset} />

      <MotionDiv
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ flex: 1 }}
      >
        <HStack mb={4} spacing={4} w="full">
          <InputGroup maxW="280px">
            <InputLeftElement pointerEvents="none">
              <LuSearch />
            </InputLeftElement>
            <Input
              placeholder="Search by Player UID"
              value={uidSearchQuery}
              onChange={(e) => {
                setUidSearchQuery(e.target.value);
              }}
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
        </HStack>
      </MotionDiv>

      <div style={tableStyles.container}>
        <table style={tableStyles.table}>
          <thead style={tableStyles.thead}>
            <tr>
              {[
                'Player',
                'Type',
                'By',
                'Age In Hours',
                'Cash-In',
                'Cash-Out',
                'Prev Credit',
                'Then Credit',
                'Timeline',
              ].map((header) => (
                <th key={header} style={tableStyles.thtd}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, i) => (
              <MotionTr
                key={item._id}
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
                <td style={tableStyles.thtd}>{'***' + item.uid.slice(3)}</td>
                <td style={tableStyles.thtd}>{item.transType}</td>
                <td style={tableStyles.thtd}>{item.transBy}</td>
                <td style={tableStyles.thtd}>
                  {getItemAge(
                    item.transStartTime,
                    item.transEndTime,
                    lastReset
                  ).toFixed(2)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.depositAmount)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.withdrawAmount)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.prevCredit)}
                </td>
                <td style={tableStyles.thtd}>
                  {formatToIndianCurrency(item.thenCredit)}
                </td>
                <td style={tableStyles.thtd}>
                  {item.transStartTime || item.transEndTime}
                </td>
              </MotionTr>
            ))}
          </tbody>
        </table>
      </div>

      <Box mt={4}>
        <PaginationCustom
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
    </Box>
  );
};

export default TransactionTable;
