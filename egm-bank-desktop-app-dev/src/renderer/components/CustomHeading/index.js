import React, { useState, useEffect, useCallback } from 'react';
import {
  AspectRatio,
  HStack,
  Box,
  Heading,
  StackDivider,
  Button,
  useColorModeValue,
  Spacer,
  CheckboxIcon,
  Text,
} from '@chakra-ui/react';
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';
import HeadingName from '../HeadingName';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';

export function CustomHeading() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const dispatch = useDispatch();
  const { uid, account, role } = useSelector((state) => state.user);

  //In this case, handleLogoutBtnClick is memoized using useCallback,
  //ensuring that its reference remains stable across renders unless
  //the dispatch function changes (which it typically does not).
  const handleLogoutBtnClick = useCallback(() => {
    onClose();
    dispatch(actions.user.UserLoggedOut(uid));
  }, [dispatch, uid]);

  return (
    <HStack
      bg="brand.900"
      height="45px"
      px={4}
      spacing={4}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="brand.800"
      position="relative"
    >
      <Box width="150px" />

      {uid && (
        <HStack
          spacing={4}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          zIndex={999}
        >
          <Text
            fontSize="sm"
            px={3}
            py={1}
            bg={'brand.800'}
            rounded={'lg'}
            color="white"
            noOfLines={1}
          >
            {role}
          </Text>
          <Menu isOpen={isOpen}>
            <MenuButton
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              cursor="pointer"
            >
              <HStack
                spacing={1}
                px={3}
                py={1}
                borderRadius="md"
                _hover={{ bg: 'brand.800', color: 'brand.100' }}
                color="brand.100"
              >
                <Text fontSize="sm" fontWeight="medium">
                  {account}
                </Text>
                {isOpen ? <LuChevronUp /> : <LuChevronDown />}
              </HStack>
            </MenuButton>
            <MenuList
              bg="brand.900"
              borderColor="brand.700"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <MenuItem
                onClick={handleLogoutBtnClick}
                fontSize="sm"
                bg="brand.600"
                color="brand.100"
                _hover={{ bg: 'brand.700', color: 'white' }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      )}

      <Box fontSize="2xl" fontWeight="hairline" textTransform="uppercase">
        <HeadingName />
      </Box>
    </HStack>
  );
}

export default CustomHeading;
