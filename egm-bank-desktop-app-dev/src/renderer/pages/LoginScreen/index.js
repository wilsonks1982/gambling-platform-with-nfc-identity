import React, { useState, useEffect } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import AttendantLogin from '../AttendantLogin';

function LoginScreen() {
  const colors = useColorModeValue(
    ['brand.50', 'teal.50', 'blue.50'],
    ['brand.900', 'teal.900', 'blue.900']
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <VStack
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AttendantLogin />
    </VStack>
  );
}

export default LoginScreen;
