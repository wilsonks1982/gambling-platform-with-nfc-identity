import React, { useState, useEffect } from 'react';
const R = require('ramda');

import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
  Tooltip,
  VStack,
  Flex,
} from '@chakra-ui/react';

import {
  LuChevronDown,
  LuFileSearch,
  LuInfo,
  LuSearch,
  LuUser,
} from 'react-icons/lu';

import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import attendantSlice from '../../../store/slices/attendant';
import PlayerCard from './PlayerCard';
import CardForm from './CardForm';
import CardNickNameForm from './Forms/CardNickNameForm';
import CardPinNumberForm from './Forms/CardPinNumberForm';
import { actions } from '../../../store';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import wildaceLogo from '../../../assets/WildAceLogo.png';
import PaginationCustom from '../../../components/PaginationCustom';

const fetchData = async (uri) => {
  const { scheme, host, port, path } = uri;
  const playersUrl = `${scheme}://${host}:${port}${path}`;
  const response = await fetch(playersUrl);
  if (!response.ok) throw new Error('Network response was not ok');

  return await response.json();
};

const PAGE_SIZE = 10; // Number of items per page

function CustomerAccounts() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.card);
  const { role } = useSelector((state) => state.user);
  const { players } = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playersTotalCount, setPlayersTotalCount] = useState(0);
  const [playersPlayingCount, setPlayersPlayingCount] = useState(0);
  const { playerCardsUid } = useSelector((state) => state.filters);

  const [filter, setFilter] = useState('None');
  const [sortBy, setSortBy] = useState('ID');
  const [showOnHoldPlayers, setShowOnHoldPlayers] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  // const [uidSearchQuery, setUidSearchQuery] = useState('');
  const [nameSearchQuery, setNameSearchQuery] = useState('');

  // Filtered data based on search queries
  const filteredData = players.filter(
    (item) =>
      item.uid.toLowerCase().includes(playerCardsUid.toLowerCase()) &&
      item.nickname.includes(nameSearchQuery) &&
      !item.onHold &&
      item.role !== 'Admin'
  );

  const onHoldPlayers = players.filter((item) => item.onHold);

  var finalData = filteredData;
  switch (sortBy) {
    case 'Name':
      finalData = filteredData.sort((a, b) =>
        a.nickname.localeCompare(b.nickname)
      );
      break;
    case 'Wallet':
      finalData = filteredData.sort((a, b) => {
        return a.wallet - b.wallet;
      });
      break;
    case 'Status':
      finalData = filteredData.sort((a, b) => {
        return a.isPlaying - b.isPlaying;
      });
      break;
    case 'ID':
      finalData = filteredData.sort((a, b) => {
        return b.id - a.id;
      });
      break;
    case 'None':
      finalData = filteredData.sort((a, b) => {
        return b.id - a.id;
      });
      break;
    default:
      break;
  }

  //Filter switch
  switch (filter) {
    case 'None':
      break;
    case 'Wallet':
      finalData = filteredData.filter((player) => player.wallet > 0);
      break;
    default:
      break;
  }

  const displayedData = showOnHoldPlayers ? onHoldPlayers : finalData;
  const totalPages = Math.ceil(displayedData.length / PAGE_SIZE);
  const paginatedData = [...displayedData]
    .reverse()
    .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  // Switch page to 0 if a player is searched
  useEffect(() => {
    setCurrentPage(0);
  }, [nameSearchQuery, playerCardsUid]);

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/GetTestUsersReq',
  };
  const loadData = async () => {
    setLoading(true);
    console.error('loading');
    try {
      dispatch(
        actions.players.PlayersRefresh({
          playersUri: uri,
        })
      );
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPlayersTotalCount(players.length);
    setPlayersPlayingCount(
      players.filter((player) => player.isPlaying == true).length
    );
  }, [players]);

  useEffect(() => {
    dispatch(
      actions.players.PlayersRefresh({
        playersUri: uri,
      })
    );

    const intervalId = setInterval(() => {
      loadData(); // Load data every 5 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  switch (role) {
    case 'Attendant':
    case 'Manager':
    case 'Admin':
      return (
        <Grid templateColumns="repeat(10, 1fr)" gap="2">
          <GridItem colSpan={7} h="780px">
            <VStack spacing={6} align="start">
              <Flex
                w="100%"
                bg="brand.900"
                rounded="md"
                px={6}
                py={3}
                justify="space-between"
                align="center"
              >
                <Heading size="md" color="brand.50" textTransform="uppercase">
                  Customer Accounts
                </Heading>
                <Text fontSize="xl" color="brand.200">
                  {playersPlayingCount > 0
                    ? playersPlayingCount.toString().padStart(2, '0')
                    : '00'}
                  /{playersTotalCount}
                </Text>
              </Flex>
              <Flex
                w="100%"
                justify="space-between"
                align="center"
                wrap="wrap"
                gap={4}
                mb={4}
                direction={{ base: 'column', md: 'row' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ flex: 1 }}
                >
                  <HStack spacing={4} w="full">
                    <InputGroup maxW="280px">
                      <InputLeftElement pointerEvents="none">
                        <LuSearch />
                      </InputLeftElement>
                      <Input
                        placeholder="Search by Name"
                        value={nameSearchQuery}
                        onChange={(e) => setNameSearchQuery(e.target.value)}
                        variant="filled"
                        bg="gray.50"
                        _hover={{ bg: 'gray.100' }}
                        _focus={{ bg: 'white' }}
                        rounded="none"
                      />
                    </InputGroup>

                    <InputGroup maxW="280px">
                      <InputLeftElement pointerEvents="none">
                        <LuSearch />
                      </InputLeftElement>
                      <Input
                        placeholder="Search by UID"
                        value={playerCardsUid}
                        onChange={(e) =>
                          dispatch(
                            actions.filters.playerCardsUidSet(e.target.value)
                          )
                        }
                        variant="filled"
                        bg="gray.50"
                        _hover={{ bg: 'gray.100' }}
                        _focus={{ bg: 'white' }}
                        rounded="none"
                      />
                    </InputGroup>
                  </HStack>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ flexShrink: 0 }}
                >
                  <HStack spacing={3}>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<LuChevronDown />}
                        variant="outline"
                        border="1px solid"
                        borderColor="gray.300"
                        bg="white"
                        rounded="none"
                      >
                        Sort By
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => setSortBy('ID')}>
                          None
                        </MenuItem>
                        <MenuItem onClick={() => setSortBy('Name')}>
                          Name
                        </MenuItem>
                        <MenuItem onClick={() => setSortBy('Wallet')}>
                          Wallet
                        </MenuItem>
                        <MenuItem onClick={() => setSortBy('Status')}>
                          Status
                        </MenuItem>
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<LuChevronDown />}
                        variant="outline"
                        border="1px solid"
                        borderColor="gray.300"
                        bg="white"
                        rounded="none"
                      >
                        Filter By
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => setFilter('None')}>
                          None
                        </MenuItem>
                        <MenuItem onClick={() => setFilter('Wallet')}>
                          Wallets with amount
                        </MenuItem>
                      </MenuList>
                    </Menu>

                    <Button
                      bg="brand.900"
                      color="white"
                      rounded="none"
                      _hover={{ bg: 'brand.800' }}
                      onClick={() => setShowOnHoldPlayers(!showOnHoldPlayers)}
                    >
                      {showOnHoldPlayers
                        ? 'Hide Cards on Hold'
                        : 'Show Cards on Hold'}
                    </Button>
                  </HStack>
                </motion.div>
              </Flex>

              <SimpleGrid
                as={motion.div}
                initial="hidden"
                animate="visible"
                columns={5}
                spacing={4}
                w="100%"
                p={0}
              >
                {paginatedData.map((player, index) => (
                  <motion.div
                    key={player.uid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.03,
                      ease: 'easeInOut',
                    }}
                  >
                    <PlayerCard player={player} />
                  </motion.div>
                ))}
              </SimpleGrid>

              <PaginationCustom
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </VStack>
          </GridItem>

          <GridItem colStart={8} colEnd={11} h="780px" bg="whiteAlpha.900">
            <AnimatePresence mode="wait">
              {uid !== '' ? (
                <motion.div
                  key="card-form"
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  exit={{ x: 1000 }}
                  transition={{ duration: 0.15, ease: 'easeInOut' }}
                >
                  <CardForm />
                </motion.div>
              ) : (
                <motion.div
                  key="card-placeholder"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15, ease: 'easeInOut' }}
                >
                  <Box
                    rounded="none"
                    p={10}
                    textAlign="center"
                    height="63.5vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Flex justifyContent="center" alignItems="center">
                      <Image src={wildaceLogo} opacity={0.4} width="40%" />
                    </Flex>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </GridItem>
        </Grid>
      );

    default:
      return null;
  }
}

export default CustomerAccounts;
