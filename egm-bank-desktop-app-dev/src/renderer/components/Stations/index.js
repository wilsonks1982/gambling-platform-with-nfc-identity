import {
  SimpleGrid,
  Container,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Checkbox,
  HStack,
  VStack,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
  useToast,
  Image,
  Select,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import StationCard from './StationCard';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { StationsSet, StationsLoading } from '../../store/slices/stations';
import { ChevronDownIcon, AddIcon } from '@chakra-ui/icons';
import LoaderWithLogo from '../LoaderWithLogo';
import { motion } from 'framer-motion';

const Stations = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { stations } = useSelector((state) => state.stations);
  const editDisclosure = useDisclosure();
  const createDisclosure = useDisclosure();
  const editForm = useForm();
  const createForm = useForm();
  const cancelRef = React.useRef();
  const [selectedId, setSelectedId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);
  const toast = useToast();

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDialogOpen(true);
  };

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/cage/service/stations',
  };

  const fetchData = async (uri) => {
    const { scheme, host, port, path } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}`;
    const response = await fetch(transactionsUrl);
    if (!response.ok) throw new Error('Network response was not ok');

    return await response.json();
  };

  const loadData = async () => {
    dispatch(StationsLoading(true));
    setLoading(true);
    try {
      const newData = await fetchData(uri);
      const sortedData = newData.sort((a, b) => a.id - b.id);
      setData((prev) => [...sortedData]);
      dispatch(StationsSet(sortedData));
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteStation = async (id) => {
    setLoading(true);
    const uri = {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/cage/service/stations',
      method: 'delete',
    };

    const deleteData = async (uri, id) => {
      const { scheme, host, port, path, method } = uri;
      const transactionsUrl = `${scheme}://${host}:${port}${path}/${id}`;
      const response = await fetch(transactionsUrl, { method: method });
      if (!response.ok) throw new Error('Network response was not ok');
      loadData();
      setIsDialogOpen(false);
    };

    await deleteData(uri, id);
    setLoading(false);
  };

  const onEditOpen = (station) => {
    editForm.reset({
      id: station.id,
      egmId: station.egmId,
      ipAddress: station.ipAddress,
    });
    setSelectedStation(station);
    editDisclosure.onOpen();
  };

  const onEditSave = async (data) => {
    const dirtyFields = Object.keys(editForm.formState.dirtyFields || {});
    if (dirtyFields.length === 0) {
      toast({
        title: 'No Changes Made',
        description: 'Please make changes before saving.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    setLoading(true);
    try {
      const uri = {
        scheme: 'http',
        host: '192.168.1.127',
        port: '9001',
        path: '/api/v1/cage/service/stations',
        method: 'put',
      };
      const editData = async (uri, data) => {
        const { scheme, host, port, path, method } = uri;
        const transactionsUrl = `${scheme}://${host}:${port}${path}`;
        const response = await fetch(transactionsUrl, {
          method: method,
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        loadData();
      };

      const response = await editData(uri, data);
      console.log(response);
    } catch (e) {
      console.error(e);
      editForm.reset();
    } finally {
      editDisclosure.onClose();
      editForm.reset();
      setNoChangeMessage(false);
      setLoading(false);
    }
  };

  const onCreateSave = async (data) => {
    setLoading(true);
    try {
      const uri = {
        scheme: 'http',
        host: '192.168.1.127',
        port: '9001',
        path: '/api/v1/cage/service/stations',
        method: 'post',
      };
      const saveData = async (uri, data) => {
        const { scheme, host, port, path, method } = uri;
        const transactionsUrl = `${scheme}://${host}:${port}${path}`;
        const response = await fetch(transactionsUrl, {
          method: method,
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        loadData();
      };

      const response = await saveData(uri, data);
      console.log('Success', response.status);
    } catch (error) {
      console.error(error);
      createForm.reset();
    } finally {
      createDisclosure.onClose();
      createForm.reset();
      setLoading(false);
    }
  };

  return (
    <Box w={'100%'}>
      {loading && <LoaderWithLogo />}
      <AlertDialog
        isOpen={isDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDialogOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Station
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteStation(selectedId);
                  setIsDialogOpen(false);
                }}
                ml={3}
              >
                Sure
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Modal
        isOpen={editDisclosure.isOpen}
        onClose={editDisclosure.onClose}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={editForm.handleSubmit(onEditSave)}
          borderRadius="2xl"
          boxShadow="xl"
          p={6}
          bg="white"
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" textAlign="center">
            Edit Station
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap={5}>
            <FormControl>
              <FormLabel>ID</FormLabel>
              <Input
                {...editForm.register('id')}
                isReadOnly
                bg="gray.100"
                type="number"
              />
            </FormControl>

            <FormControl isInvalid={!!editForm.formState.errors?.egmId}>
              <FormLabel>Name</FormLabel>
              <Input
                {...editForm.register('egmId', {
                  required: 'Name is required',
                  validate: (value) => {
                    if (!/^WAS-\d{4}$/.test(value)) {
                      return 'Please use WAS-0000 format only';
                    }
                    const duplicateName = stations?.some(
                      (item) =>
                        item.egmId.toString().toUpperCase() ===
                          value.toString().toUpperCase() &&
                        item.egmId.toString() !==
                          selectedStation?.egmId.toString()
                    );
                    if (duplicateName) {
                      return 'A Station with this Name already exists';
                    }
                    return true;
                  },
                })}
                placeholder="Enter name"
              />
              <FormErrorMessage>
                {editForm.formState.errors?.egmId?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!editForm.formState.errors?.ipAddress}>
              <FormLabel>IP</FormLabel>
              <Input
                {...editForm.register('ipAddress', {
                  required: 'IP Address is required',
                  validate: (value) => {
                    const ipv4Regex =
                      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
                    const ipEntered = value?.toString().trim();
                    if (!ipv4Regex.test(ipEntered)) {
                      return 'Invalid IP address format';
                    }
                    const ipExists = stations?.some(
                      (station) =>
                        station.ipAddress?.toString().trim() === ipEntered &&
                        station.ipAddress.toString().trim() !==
                          selectedStation?.ipAddress.toString().trim()
                    );
                    if (ipExists) {
                      return 'This IP address already exists';
                    }
                    return true;
                  },
                })}
                placeholder="Enter IP address"
              />
              <FormErrorMessage>
                {editForm.formState.errors?.ipAddress?.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center" gap={4}>
            <Button type="submit" colorScheme="blue" px={8}>
              Save
            </Button>
            <Button onClick={editDisclosure.onClose} variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={createDisclosure.isOpen}
        onClose={createDisclosure.onClose}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={createForm.handleSubmit(onCreateSave)}
          borderRadius="2xl"
          boxShadow="xl"
          p={6}
          bg="white"
        >
          <ModalHeader fontSize="2xl" fontWeight="bold" textAlign="center">
            Create Station
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap={5}>
            <FormControl isInvalid={!!createForm.formState.errors?.id}>
              <FormLabel>ID</FormLabel>
              <Input
                {...createForm.register('id', {
                  required: 'ID is required',
                  validate: (value) => {
                    const duplicateId = stations?.find(
                      (station) => station.id.toString() === value.toString()
                    );
                    return duplicateId
                      ? 'A Station with this ID already exists'
                      : true;
                  },
                })}
                type="number"
                placeholder="Enter a new ID (Must be a Number Only)"
              />
              <FormErrorMessage>
                {createForm.formState.errors?.id?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!createForm.formState.errors?.egmId}>
              <FormLabel>Name</FormLabel>
              <Input
                {...createForm.register('egmId', {
                  required: 'Name is required',
                  validate: (value) => {
                    if (!/^WAS-\d{4}$/.test(value)) {
                      return 'Please use WAS-0000 format only';
                    }
                    const duplicateName = stations?.find(
                      (station) =>
                        station.egmId.toString().toUpperCase() ===
                        value.toString().toUpperCase()
                    );
                    if (duplicateName) {
                      return 'A Station with this Name already exists';
                    }
                    return true;
                  },
                })}
                placeholder="Enter name"
              />
              <FormErrorMessage>
                {createForm.formState.errors?.egmId?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!createForm.formState.errors?.ipAddress}>
              <FormLabel>IP</FormLabel>
              <Input
                {...createForm.register('ipAddress', {
                  required: 'IP Address is required',
                  validate: (value) => {
                    const ipv4Regex =
                      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
                    const ipEntered = value?.toString().trim();
                    if (!ipv4Regex.test(ipEntered)) {
                      return 'Invalid IP address format';
                    }
                    const ipExists = stations.some(
                      (station) =>
                        station.ipAddress?.toString().trim() === ipEntered
                    );
                    if (ipExists) {
                      return 'This IP address already exists';
                    }
                    return true;
                  },
                })}
                placeholder="Enter IP address"
              />
              <FormErrorMessage>
                {createForm.formState.errors?.ipAddress?.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center" gap={4}>
            <Button type="submit" colorScheme="blue" px={8}>
              Save
            </Button>
            <Button onClick={() => createForm.reset()} variant="outline">
              Reset Form
            </Button>
            <Button onClick={createDisclosure.onClose} variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        py={3}
        px={5}
        borderRadius="lg"
        bg="brand.900"
        color="white"
        mb={4}
        w="full"
      >
        <Text fontSize={'xl'} textTransform="uppercase" fontWeight={'bold'}>
          All Stations
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            bg="gray.300"
            _hover={{ bg: 'gray.200' }}
            _expanded={{ bg: 'gray.400' }}
            color="gray.800"
            fontWeight="medium"
            borderRadius="md"
            shadow="sm"
          >
            Actions
          </MenuButton>

          <MenuList
            bg="white"
            shadow="xl"
            minW="200px"
            borderRadius="0px"
            p="0px"
          >
            <MenuItem
              onClick={createDisclosure.onOpen}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontWeight="medium"
              textAlign="center"
              _hover={{ bg: 'gray.200' }}
              color="gray.900"
              px={2}
              py={1}
              minH={'50px'}
            >
              <HStack spacing={3}>
                <Text>Add Station</Text>
                <AddIcon boxSize={4} />
              </HStack>
            </MenuItem>
            <MenuItem
              onClick={() => loadData()}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              fontWeight="medium"
              textAlign="center"
              _hover={{ bg: 'gray.200' }}
              color="gray.900"
              px={2}
              py={1}
              minH={'50px'}
            >
              Refresh
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={6}
        position="relative"
      >
        {stations?.map((station, index) => (
          <motion.div
            key={station.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <StationCard
              station={station}
              onDelete={() => handleDelete(station.id)}
              onEdit={() => onEditOpen(station)}
            />
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Stations;
