import React, { useCallback } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import {
  MdOutlineArrowForwardIos,
  MdAccountBalanceWallet,
} from 'react-icons/md';
import { FaUser, FaIdCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../store';
import { formatToIndianCurrency } from '../../../../utils';
import { motion } from 'framer-motion';

function PlayerCard({ player }) {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user);

  const {
    uid,
    nickname,
    wallet,
    isPlaying,
    onHold,
    createdAt = '',
    updatedAt = '',
  } = player;

  const handleSelectBtnClick = useCallback(() => {
    dispatch(actions.card.cardSet({ ...player }));
    dispatch(actions.filters.playerCardsUidSet(uid.slice(3)));
  }, [dispatch, uid]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <Card
        maxH="260px"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        transition="all 0.2s ease"
        _hover={{ shadow: 'xl' }}
        onClick={handleSelectBtnClick}
        cursor="pointer"
      >
        <CardHeader
          bg={isPlaying ? 'red.100' : 'gray.100'}
          px={4}
          py={3}
          borderBottomWidth="1px"
        >
          <VStack align="start" spacing={1} w="full">
            <HStack spacing={2}>
              <Badge
                px={2}
                py={0.5}
                rounded="xl"
                variant="solid"
                fontSize="10px"
                w="auto"
                bg={isPlaying ? 'red.300' : 'green.300'}
                textAlign="center"
              >
                {isPlaying ? 'Playing Now' : 'Offline'}
              </Badge>
              {onHold && (
                <Badge
                  px={2}
                  py={0.5}
                  rounded="xl"
                  variant="solid"
                  fontSize="10px"
                  w="auto"
                  bg="black"
                  color="white"
                  textAlign="center"
                >
                  ON HOLD
                </Badge>
              )}
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaUser} color="gray.600" boxSize={4} />
              <Text fontWeight="bold" fontSize="lg">
                {nickname}
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaIdCard} color="gray.500" boxSize={3} />
              <Text fontSize="sm" color="gray.600">
                {'***' + uid.slice(3)}
              </Text>
            </HStack>
            <Text fontSize="xs" color="gray.500">
              {createdAt.slice(2, -12)} to {updatedAt.slice(2, -12)}
            </Text>
          </VStack>
        </CardHeader>

        <CardBody px={4} py={3}>
          <HStack spacing={3} align="center">
            <Icon as={MdAccountBalanceWallet} color="green.500" boxSize={5} />
            <VStack spacing={0} align="start">
              <Text fontSize="xs" color="gray.500">
                Card Balance
              </Text>
              <Text fontSize="md" fontWeight="medium">
                {formatToIndianCurrency(wallet)}
              </Text>
            </VStack>
          </HStack>
        </CardBody>

        <CardFooter p={0}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            style={{ width: '100%' }}
          >
            <Button
              onClick={handleSelectBtnClick}
              rightIcon={<MdOutlineArrowForwardIos />}
              colorScheme="teal"
              size="sm"
              w="100%"
              borderRadius={0}
              _hover={{ bg: 'teal.600' }}
            >
              View Details
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default PlayerCard;
