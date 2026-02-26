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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import GameHistoryTableReels from './GameHistoryTableReels';
import GameHistoryTableHeader from '../GameHistory/GameHistoryTableHeader';
import GameHistoryTableRoulette from './GameHistoryTableRoulette';
import GameHistoryAll from './GameHistoryAll';

const GameHistory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <GameHistoryTableHeader />
      <Tabs
        style={{ alignItems: 'stretch' }}
        w="100%"
        onChange={(index) => setTabIndex(index)}
        bg={'white'}
        size="md"
        flexDirection="column"
        justifyContent="flex-start"
        color="brand.900"
        variant="solid-rounded"
      >
        <TabList
          size="md"
          pt={0}
          pb={4}
          alignItems="flex-start"
          overflowX="scroll"
          whiteSpace="nowrap"
          flexWrap="nowrap"
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Tab size="sm" whiteSpace="nowrap">
            All
          </Tab>
          <Tab size="sm" whiteSpace="nowrap">
            Reels
          </Tab>
          <Tab size="sm" whiteSpace="nowrap">
            Roulette
          </Tab>
        </TabList>
        <TabPanels height="100%">
          <TabPanel p={0}>
            <GameHistoryAll />
          </TabPanel>
          <TabPanel p={0}>
            <GameHistoryTableReels />
          </TabPanel>
          <TabPanel p={0}>
            <GameHistoryTableRoulette />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default GameHistory;
