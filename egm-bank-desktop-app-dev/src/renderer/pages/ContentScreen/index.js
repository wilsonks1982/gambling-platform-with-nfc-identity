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
import { useDispatch, useSelector } from 'react-redux';
import CustomHeading from '../../components/CustomHeading';
import AttendantScreen from '../AttendantScreen';
import ManagerScreen from '../ManagerScreen';
import AdminScreen from '../AdminScreen';

function ContentScreen() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user);

  switch (role) {
    case 'Attendant':
      return <AttendantScreen />;
    case 'Manager':
      return <ManagerScreen />;
    case 'Admin':
      return <AdminScreen />;
    default:
      return <AttendantScreen />;
  }
}

export default ContentScreen;
