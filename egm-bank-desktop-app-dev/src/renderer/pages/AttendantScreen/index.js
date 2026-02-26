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

import CustomerAccounts from '../Common/CustomerAccounts';
import MonetaryTransactions from '../Common/MonetaryTransactions';
import ShiftMetersTable from './TabPanels/Third';

function AttendantScreen() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user);

  const colors = useColorModeValue(
    ['brand.50', 'brand.50', 'brand.50', 'brand.50'],
    ['brand.900', 'brand.900', 'brand.900', 'brand.900']
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
          Attendant Meters
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
          <ShiftMetersTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default AttendantScreen;
