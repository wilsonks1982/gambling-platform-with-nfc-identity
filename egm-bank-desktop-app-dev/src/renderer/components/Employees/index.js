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
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeesSet } from '../../store/slices/employees';
import {
  ChevronDownIcon,
  AddIcon,
  ViewOffIcon,
  ViewIcon,
} from '@chakra-ui/icons';
import LoaderWithLogo from '../LoaderWithLogo';

const Employees = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);
  const editDisclosure = useDisclosure();
  const createDisclosure = useDisclosure();
  const editForm = useForm();
  const createForm = useForm({
    defaultValues: {
      role: '',
    },
  });
  const cancelRef = React.useRef();
  const [selectedId, setSelectedId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [adminExists, setAdminExists] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);

  const toast = useToast();

  useEffect(() => {
    createForm.register('role', {
      required: 'Role is required',
    });
  }, [createForm.register]);

  const handleDelete = (uid) => {
    setSelectedId(uid);
    setIsDialogOpen(true);
  };

  const uri = {
    scheme: 'http',
    host: '192.168.1.127',
    port: '9001',
    path: '/api/v1/employees',
  };

  const fetchData = async (uri) => {
    const { scheme, host, port, path } = uri;
    const transactionsUrl = `${scheme}://${host}:${port}${path}`;
    const response = await fetch(transactionsUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchData(uri);
      const newData = data.sort((a, b) => a.account - b.account);
      setData((prev) => [...newData]);
      dispatch(EmployeesSet(newData));
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateFormClose = () => {
    createForm.reset();
    createDisclosure.onClose();
  };

  const deleteEmployee = async (uid) => {
    const uri = {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/employees',
      method: 'delete',
    };

    const deleteData = async (uri, uid) => {
      const { scheme, host, port, path, method } = uri;
      const transactionsUrl = `${scheme}://${host}:${port}${path}/${uid}`;
      const response = await fetch(transactionsUrl, { method: method });
      if (!response.ok) throw new Error('Network response was not ok');
      loadData();
      setIsDialogOpen(false);
    };

    await deleteData(uri, uid);
    setSelectedId(null);
  };

  const onEditOpen = (employee) => {
    editForm.reset({
      account: employee.account,
      role: employee.role,
      pin: employee.pin,
    });
    setSelectedId(employee.uid);
    setSelectedEmployee(employee);
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
        position: 'bottom',
      });
      return;
    }

    try {
      const uri = {
        scheme: 'http',
        host: '192.168.1.127',
        port: '9001',
        path: '/api/v1/employees',
        method: 'put',
      };
      const editData = async (uri, data) => {
        const { scheme, host, port, path, method } = uri;
        const transactionsUrl = `${scheme}://${host}:${port}${path}/${selectedId}`;
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
      setSelectedId(null);
      setSelectedEmployee(null);
    }
  };

  const onCreateSave = async (data) => {
    if (data.role === 'Admin' && adminExists) {
      toast({
        title: 'Admin already exists',
        description: 'Cannot add employee because one admin already exists',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    try {
      const uri = {
        scheme: 'http',
        host: '192.168.1.127',
        port: '9001',
        path: '/api/v1/employees',
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
    }
  };

  //Check if an account with the role "Admin" already exists
  useEffect(() => {
    setAdminExists(employees.some((employee) => employee.role === 'Admin'));
  }, [employees]);

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
              Delete Employee
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
                  deleteEmployee(selectedId);
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
            Edit Employee
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap={5}>
            <FormControl isInvalid={!!editForm.formState.errors?.account}>
              <FormLabel>Account ID</FormLabel>
              <Input
                {...editForm.register('account', {
                  required: 'Account ID is required',
                  validate: (value) => {
                    const duplicateId = employees?.some(
                      (item) =>
                        item.account.toString().toUpperCase() ===
                          value.toString().toUpperCase() &&
                        item.account.toString() !==
                          selectedEmployee?.account.toString()
                    );
                    if (duplicateId) {
                      return 'An Employee with this account already exists';
                    }
                    return true;
                  },
                })}
                placeholder="Enter name"
              />
              <FormErrorMessage>
                {editForm.formState.errors?.account?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!editForm.formState.errors?.pin}>
              <FormLabel>Pin</FormLabel>
              <HStack>
                <Input
                  type={viewPassword ? 'text' : 'password'}
                  maxLength={4}
                  minLength={4}
                  {...editForm.register('pin', {
                    required: 'Pin is required',
                  })}
                  placeholder="Enter A New Pin"
                />
                {viewPassword ? (
                  <Box
                    fontSize="2xl"
                    px={4}
                    rounded="2xl"
                    cursor="pointer"
                    onClick={() => setViewPassword(false)}
                  >
                    <ViewOffIcon />
                  </Box>
                ) : (
                  <Box
                    fontSize="2xl"
                    px={4}
                    rounded="2xl"
                    cursor="pointer"
                    onClick={() => setViewPassword(true)}
                  >
                    <ViewIcon />
                  </Box>
                )}
              </HStack>
              <FormErrorMessage>
                {editForm.formState.errors?.pin?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!editForm.formState.errors?.role}>
              <FormLabel>Role</FormLabel>
              <RadioGroup
                onChange={(val) =>
                  editForm.setValue('role', val, { shouldDirty: true })
                }
                value={editForm.watch('role')}
              >
                <HStack spacing={4}>
                  <Radio value="Manager">Manager</Radio>
                  <Radio value="Attendant">Attendant</Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {editForm.formState.errors?.role?.message}
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
        onClose={handleCreateFormClose}
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
            Create Employee
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap={5}>
            <FormControl isInvalid={!!createForm.formState.errors?.uid}>
              <FormLabel>UID</FormLabel>
              <Input
                {...createForm.register('uid', {
                  required: 'UID is required',
                  validate: (value) => {
                    const duplicateId = employees?.find(
                      (employee) => employee.uid.toString() === value.toString()
                    );
                    return duplicateId
                      ? 'An Employee with this UID already exists'
                      : true;
                  },
                })}
                placeholder="Enter a new UID"
              />
              <FormErrorMessage>
                {createForm.formState.errors?.uid?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!createForm.formState.errors?.account}>
              <FormLabel>Account ID</FormLabel>
              <Input
                {...createForm.register('account', {
                  required: 'Account is required',
                  validate: (value) => {
                    const duplicateId = employees?.find(
                      (employee) =>
                        employee.account.toString() === value.toString()
                    );
                    return duplicateId
                      ? 'An Employee with this account already exists'
                      : true;
                  },
                })}
                placeholder="Enter a new Account ID"
              />
              <FormErrorMessage>
                {createForm.formState.errors?.account?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!createForm.formState.errors?.pin}>
              <FormLabel>Pin</FormLabel>
              <HStack>
                <Input
                  type={viewPassword ? 'text' : 'password'}
                  maxLength={4}
                  minLength={4}
                  {...createForm.register('pin', {
                    required: 'Pin is required',
                  })}
                  placeholder="Enter A New Pin"
                />
                {viewPassword ? (
                  <Box
                    fontSize="2xl"
                    px={4}
                    rounded="2xl"
                    cursor="pointer"
                    onClick={() => setViewPassword(false)}
                  >
                    <ViewOffIcon />
                  </Box>
                ) : (
                  <Box
                    fontSize="2xl"
                    px={4}
                    rounded="2xl"
                    cursor="pointer"
                    onClick={() => setViewPassword(true)}
                  >
                    <ViewIcon />
                  </Box>
                )}
              </HStack>
              <FormErrorMessage>
                {createForm.formState.errors?.pin?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!createForm.formState.errors?.role}>
              <FormLabel>Role</FormLabel>
              <RadioGroup
                onChange={(val) =>
                  createForm.setValue('role', val, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                value={createForm.watch('role')}
              >
                <HStack spacing={4}>
                  <Radio value="Manager">Manager</Radio>
                  <Radio value="Attendant">Attendant</Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {createForm.formState.errors?.role?.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center" gap={4}>
            <Button type="submit" colorScheme="blue" px={8}>
              Save
            </Button>
            <Button onClick={() => handleCreateFormClose()} variant="outline">
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
          All Employees
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
                <Text>Add Employee</Text>
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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        {employees?.map((employee) => (
          <EmployeeCard
            key={employee.uid}
            employee={employee}
            onDelete={() => handleDelete(employee.uid)}
            onEdit={() => onEditOpen(employee)}
          />
        ))}
      </SimpleGrid>
      {loading && (
        <Spinner
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="xl"
          color="blue.500"
        />
      )}
    </Box>
  );
};

export default Employees;
