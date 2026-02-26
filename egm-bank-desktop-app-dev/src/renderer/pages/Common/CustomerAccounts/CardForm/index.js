import React, { useState, useEffect, useCallback } from 'react';
const R = require('ramda');

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  VStack,
  SimpleGrid,
  Box,
  HStack,
  Center,
  CardFooter,
  Spacer,
  useToast,
  Text,
} from '@chakra-ui/react';

import { RxDoubleArrowRight, RxDoubleArrowUp } from 'react-icons/rx';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store';
import CardNickNameForm from '../Forms/CardNickNameForm';
import CardPinNumberForm from '../Forms/CardPinNumberForm';
import { handleBuyInBalanceBtnClick } from './BuyIn';
import { handleBuyOutBalanceBtnClick } from './BuyOut';
import { formatToIndianCurrency } from '../../../../utils';
import { AnimatePresence, motion } from 'framer-motion';
import LoaderWithLogo from '../../../../components/LoaderWithLogo';
import AdminCardDisplay from '../AdminCardDisplay';

function CardForm(props) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const {
    uid,
    lastName,
    firstName,
    nickname,
    id,
    wallet,
    onHold,
    pin,
    isPlaying,
    createdAt,
    updatedAt,
    role: cardRole,
  } = useSelector((state) => state.card);
  const { role, name } = useSelector((state) => state.user);
  const { uri = {} } = useSelector((state) => state.config);
  const { players } = useSelector((state) => state);
  const [player, setPlayer] = useState();

  useEffect(() => {
    if (R.isNotNil(uid)) {
      if (players?.findIndex((card) => card.uid == uid) != -1) {
        const findIndex = players?.findIndex((card) => card.uid == uid);
        const player = players[findIndex];
        dispatch(actions.card.cardSet({ ...player }));
      }
    } else {
    }
  }, [players, uid]);

  //In this case, handleSelectBtnClick is memoized using useCallback,
  //ensuring that its reference remains stable across renders unless
  //the dispatch function changes (which it typically does not).
  const handleChangeNickNameBtnClick = useCallback(
    () => dispatch(actions.flags.cardNickNameFormOn()),
    [dispatch, uid]
  );
  const handleChangePinNumberBtnClick = useCallback(
    () => dispatch(actions.flags.cardPinNumberChangeFormOn()),
    [dispatch, uid]
  );
  const handleCloseBtnClick = useCallback(() => {
    dispatch(actions.card.cardReset());
    dispatch(actions.filters.playerCardsUidReset());
  }, [dispatch]);

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const replacer = (key, value) => {
    // Return value as is, including 0
    return value === undefined ? null : value;
  };
  const handlePlayerSessionCloseBtnClick = async () => {
    const { scheme, host, port, path } = uri.PlayerSessionClose;

    const uriPlayers = {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/GetTestUsersReq',
    };

    const response = await fetch(
      `${uriPlayers.scheme}://${uriPlayers.host}:${uriPlayers.port}${uriPlayers.path}`
    );
    const allUsers = await response.json();
    const user = await allUsers.find((user) => user.uid === uid);

    // Sending POST request
    fetch(`${scheme}://${host}:${port}${path}`, {
      method: 'POST',
      body: JSON.stringify({
        uid: uid,
        isPlaying: false,
        credits: user.wallet,
        transBy: 'Attendant',
        transType: 'Wallet',
        transField: 'isPlaying',
        oldValue: 'true',
        newValue: 'false',
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`json data: ${data}`);
        dispatch(
          actions.players.PlayersRefresh({
            playersUri: uri.playersUri,
          })
        );

        dispatch(actions.card.cardReset());
      })
      .catch((error) => console.error('Error:', error));
    handleCloseBtnClick();
  };

  const uriOnHold = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/putonhold',
  };

  const handleOnHold = async (value) => {
    setLoading(true);
    const { scheme, host, port, path } = uriOnHold;

    // Sending PUT request
    try {
      const result = await fetch(`${scheme}://${host}:${port}${path}`, {
        method: 'PUT',
        body: JSON.stringify({
          uid: uid,
          onHold: value,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      if (result.ok) {
        dispatch(
          actions.players.PlayersRefresh({
            playersUri: uri.playersUri,
          })
        );
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      handleCloseBtnClick();
    }
  };

  return cardRole?.toLowerCase() === 'admin' ? (
    <AdminCardDisplay />
  ) : (
    <VStack alignItems="stretch" spacing={4}>
      {loading && <LoaderWithLogo />}

      <Card
        rounded="none"
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        boxShadow="sm"
      >
        <CardHeader bg="brand.900" py={3} px={4} roundedTop="none">
          <Stat>
            <StatNumber color="white" fontSize="lg">
              Card Balance: {formatToIndianCurrency(wallet || 0)}
            </StatNumber>
          </Stat>
        </CardHeader>

        <CardHeader bg="gray.100" py={3} px={4}>
          <Stat>
            <StatNumber fontSize="2xl" color="gray.800">
              {formatToIndianCurrency(amount)}
            </StatNumber>
          </Stat>
        </CardHeader>

        <CardBody px={4} pt={2} pb={4}>
          <SimpleGrid columns={4} spacingX={3} spacingY={2}>
            {[50, 100, 500, 2000, 5000, 10000, 25000, 50000].map((amt, i) => (
              <Box
                key={amt}
                as="button"
                bg="gray.200"
                color="black"
                height="42px"
                fontSize="sm"
                fontWeight="medium"
                onClick={() => setAmount((prev) => prev + amt)}
                _hover={{ bg: 'gray.300' }}
              >
                <Center>+{amt >= 1000 ? `${amt / 1000}K` : amt}</Center>
              </Box>
            ))}

            <Box as="button" height="42px" bg="transparent" />
            <Box as="button" height="42px" bg="transparent" />

            <Box
              as="button"
              height="42px"
              bg="gray.300"
              fontWeight="semibold"
              fontSize="sm"
              onClick={() => setAmount(wallet)}
              disabled={onHold}
              _hover={!onHold && { bg: 'gray.400' }}
            >
              <Center>BALANCE</Center>
            </Box>

            <Box
              as="button"
              height="42px"
              bg="gray.300"
              fontWeight="semibold"
              fontSize="sm"
              onClick={() => setAmount(0)}
              disabled={onHold}
              _hover={!onHold && { bg: 'gray.400' }}
            >
              <Center>RESET</Center>
            </Box>
          </SimpleGrid>
        </CardBody>

        <CardFooter px={4} pb={4} pt={0}>
          <Button
            disabled={isPlaying || onHold}
            onClick={() => {
              handleBuyOutBalanceBtnClick(
                wallet,
                amount,
                uid,
                name,
                uri,
                toast,
                dispatch
              );
              setAmount(0);
            }}
            size="md"
            bg="red.600"
            color="white"
            w="45%"
            rounded="none"
            fontWeight="medium"
            _hover={{ bg: 'red.700' }}
          >
            Buy-Out
          </Button>

          <Spacer />

          <Button
            disabled={isPlaying || onHold}
            onClick={() => {
              handleBuyInBalanceBtnClick(
                wallet,
                amount,
                uid,
                name,
                uri,
                toast,
                dispatch
              );
              setAmount(0);
            }}
            size="md"
            bg="green.600"
            color="white"
            w="45%"
            rounded="none"
            fontWeight="medium"
            _hover={{ bg: 'green.700' }}
          >
            Buy-In
          </Button>
        </CardFooter>
      </Card>

      <Card rounded="none" bg="white" border="1px solid" borderColor="gray.300">
        <CardHeader
          bg="brand.900"
          color="white"
          py={3}
          px={4}
          fontSize="lg"
          fontWeight="bold"
        >
          Player Profile
        </CardHeader>

        <CardBody px={4} py={4}>
          <SimpleGrid columns={2} spacing={4} alignItems="start">
            <VStack align="start" spacing={4}>
              <Box>
                <Text fontSize="sm" color="gray.500">
                  Name
                </Text>
                <Text fontSize="md" fontWeight="medium">
                  {nickname}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.500">
                  PIN
                </Text>
                <Text fontSize="md" fontWeight="medium">
                  {pin}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.500">
                  Created
                </Text>
                <Text fontSize="md" color="gray.800">
                  {createdAt}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="gray.500">
                  Updated
                </Text>
                <Text fontSize="md" color="gray.800">
                  {updatedAt}
                </Text>
              </Box>
            </VStack>

            {/* Actions Column */}
            <VStack align="stretch" spacing={4}>
              <Button
                size="md"
                isDisabled={isPlaying || onHold}
                onClick={handleChangeNickNameBtnClick}
                bg="brand.900"
                color="white"
                rounded="none"
                w="full"
                _hover={{ bg: 'brand.800' }}
              >
                Change Nickname
              </Button>

              <Button
                size="md"
                isDisabled={isPlaying || onHold}
                onClick={handleChangePinNumberBtnClick}
                bg="brand.900"
                color="white"
                rounded="none"
                w="full"
                _hover={{ bg: 'brand.800' }}
              >
                Change PIN
              </Button>

              <Button
                size="md"
                bg="brand.900"
                color="white"
                onClick={() => handleOnHold(!onHold)}
                rounded="none"
                w="full"
                _hover={{ bg: 'brand.800' }}
              >
                {onHold ? 'Remove Hold' : 'Put Card on Hold'}
              </Button>

              {isPlaying ? (
                <Button
                  size="md"
                  onClick={handlePlayerSessionCloseBtnClick}
                  bg="red.600"
                  color="white"
                  rounded="none"
                  w="full"
                  _hover={{ bg: 'red.700' }}
                >
                  Close Session
                </Button>
              ) : (
                <Button
                  size="md"
                  disabled
                  color="black"
                  rounded="none"
                  w="full"
                >
                  Session Not Active
                </Button>
              )}
            </VStack>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Button
        onClick={handleCloseBtnClick}
        color="brand.900"
        border="1px"
        borderColor="brand.900"
        height="60px"
        borderRadius="none"
        _hover={{ bg: 'brand.200' }}
        leftIcon={<RxDoubleArrowRight />}
      >
        Close
      </Button>

      <CardNickNameForm />
      <CardPinNumberForm />
    </VStack>
  );
}

export default CardForm;
