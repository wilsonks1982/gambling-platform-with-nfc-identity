import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import DailyMetersTable from './TabPanels/Third';
import CustomerAccounts from '../Common/CustomerAccounts';
import MonetaryTransactions from '../Common/MonetaryTransactions';
import GameHistory from '../Common/GameHistory';

function ManagerScreen() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user);

  const colors = useColorModeValue(
    ['brand.50', 'brand.50', 'brand.50', 'brand.50', 'brand.50', 'brand.50'],
    [
      'brand.900',
      'brand.900',
      'brand.900',
      'brand.900',
      'brand.900',
      'brand.900',
    ]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs
      style={{ alignItems: 'stretch' }}
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
        px={4}
        pt={'6px'}
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
          Customer Accounts
        </Tab>
        <Tab size="sm" whiteSpace="nowrap">
          Customer Monetary Events
        </Tab>
        <Tab size="sm" whiteSpace="nowrap">
          Daily Meters
        </Tab>
        <Tab size="sm" whiteSpace="nowrap">
          Game History
        </Tab>
      </TabList>
      <TabPanels height="100%">
        <TabPanel>
          <CustomerAccounts />
        </TabPanel>
        <TabPanel>
          <MonetaryTransactions />
        </TabPanel>
        <TabPanel>
          <DailyMetersTable />
        </TabPanel>
        <TabPanel>
          <GameHistory />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ManagerScreen;
