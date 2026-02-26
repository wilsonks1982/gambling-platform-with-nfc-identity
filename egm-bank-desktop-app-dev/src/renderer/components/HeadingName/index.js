import React, { useState, useEffect, useCallback } from 'react';
import {
  AspectRatio,
  HStack,
  Box,
  Heading,
  StackDivider,
  Button,
  Text
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';

export function HeadingName() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user);

  // Casino Cage Management: This system monitors monetary transactions within a gaming venue, including cash, chips, and credit.
  // It manages financial transactions, classifies them by account (tables, slots), and audits these transactions.

  switch (role) {
    case 'Attendant':
      return (
        <Text color={'brand.50'}>
          Casino Cage Management
        </Text>
      );
    default:
      return (
        <Text color={'brand.50'}>
          Slot Management System
        </Text>
      );
  }
}

export default HeadingName;
