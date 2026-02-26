import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import {
  AspectRatio,
  Box,
  Button,
  ChakraProvider,
  Heading,
  HStack,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from './pages/LoginScreen';
import ContentScreen from './pages/ContentScreen';
import CustomHeading from './components/CustomHeading';
import customTheme from './theme';

function App() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user);

  return (
    <ChakraProvider cssVarsRoot="#root" theme={customTheme}>
      <HashRouter>
        <Box minH="100vh" bg="white">
          <CustomHeading />
          {uid === '' ? <LoginScreen /> : <ContentScreen />}
        </Box>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
