import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  PinInput,
  FormErrorMessage,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react';

import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { cardSet } from '../../store/slices/card';
import attendantSlice from '../../store/slices/attendant';
import { EmployeesSet } from '../../store/slices/employees';
import { actions, store } from '../../store';

const validationSchema = yup.object().shape({
  account: yup
    .string()
    .min(8, 'Invalid Account Number')
    .required('Account Number is required'),
  pin: yup
    .string()
    .min(4, 'Invalid Pin Number')
    .required('Pin Number is required'),
});

function AttendantLogin({ heading = 'Cage Operations Login' }) {
  const dispatch = useDispatch();
  // const { account, pin } = useSelector((state) => state.attendant);
  const [loginenv, setLoginenv] = useState('development');
  const [loading, setLoading] = useState(false);
  const { employees } = useSelector((state) => state.employees);

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
      const newData = await fetchData(uri);
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

  const handleStoreState = (typeOfEmployee, employeeArray) => {
    store.dispatch(
      actions.config.configUpdate({ [typeOfEmployee]: employeeArray })
    );
  };

  //Update the config state for all three types of employees
  useEffect(() => {
    handleStoreState(
      'admins',
      employees.filter((employee) => employee.role.toString() === 'Admin')
    );
    handleStoreState(
      'managers',
      employees.filter((employee) => employee.role.toString() === 'Manager')
    );
    handleStoreState(
      'attendants',
      employees.filter((employee) => employee.role.toString() === 'Attendant')
    );
  }, [employees]);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      account: '',
      pin: '',
    },
  });

  // Set default values when component mounts
  // useEffect(() => {
  //   setValue('account', account);
  //   setValue('pin', pin);
  // }, [account, pin, setValue]);

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    // Dispatch action to update Redux store if needed
    dispatch(attendantSlice.actions.AttendantLoginRequest(data));
  };

  const handlePrefill = (role) => {
    const formAuto = document.getElementById('login-form');
    switch (role) {
      case 'attendant':
        setValue('account', 'CDA1000001');
        setValue('pin', '2222');
        formAuto.requestSubmit();
        break;
      case 'manager':
        setValue('account', 'CDMA100001');
        setValue('pin', '1234');
        formAuto.requestSubmit();
        break;
      case 'admin':
        setValue('account', 'CDAD100001');
        setValue('pin', '1234');
        formAuto.requestSubmit();
        break;
      default:
        break;
    }
  };

  return (
    <Box
      bg="white"
      p={12}
      style={{ boxShadow: '0px 0px 10px 1px gray' }}
      color="brand.900"
      borderRadius= '3xl'
      width={'500px'}
      height="auto"
    >
      <Text
        mb={16}
        px={4}
        py={2}
        bg="brand.900"
        rounded='full'
        color="white"
        fontSize="xl"
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        whiteSpace="wrap"
      >
        {heading}
      </Text>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.account}>
          <FormLabel htmlFor="account" fontSize="sm" textTransform="uppercase">
            Account Number
          </FormLabel>
          <Controller
            name="account"
            control={control}
            render={({ field }) => (
              <Input
                border="none"
                borderBottom="1px"
                borderBottomColor="gray.400"
                px={0}
                pb={1}
                _focus={{ boxShadow: 'none' }}
                _invalid={{ boxShadow: 'none' }}
                rounded="none"
                id="account"
                placeholder="Enter your account"
                {...field}
              />
            )}
          />
          <FormErrorMessage _focus={{ boxShadow: 'none' }}>
            {errors.account?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.pin} mt={6} mb={4}>
          <FormLabel htmlFor="pin" fontSize="sm" textTransform="uppercase">
            Password
          </FormLabel>
          <Controller
            name="pin"
            control={control}
            render={({ field }) => (
              <Input
                border="none"
                borderBottom="1px"
                borderBottomColor="gray.400"
                px={0}
                pb={1}
                _focus={{ boxShadow: 'none' }}
                _invalid={{ boxShadow: 'none' }}
                rounded="none"
                id="pin"
                type="password"
                placeholder="Enter your pin"
                {...field}
              />
            )}
          />
          <FormErrorMessage>{errors.pin?.message}</FormErrorMessage>
        </FormControl>
        <HStack mt={12}>
          <Button color="brand.900" width="50%">
            Clear
          </Button>
          <Button
            bg="brand.900"
            color="white"
            border="1px solid transparent"
            _hover={{
              color: 'brand.900',
              bg: 'transparent',
              borderWidth: '2',
              borderColor: 'brand.900',
            }}
            type="submit"
            width="50%"
          >
            Login
          </Button>
        </HStack>
        {loginenv === 'development' && (
          <HStack mt={6}>
            <Button
              onClick={() => handlePrefill('attendant')}
              colorScheme="brand"
              width="50%"
            >
              Attendant
            </Button>
            <Button
              onClick={() => handlePrefill('manager')}
              colorScheme="brand"
              width="50%"
            >
              Manager
            </Button>
            <Button
              onClick={() => handlePrefill('admin')}
              colorScheme="brand"
              width="50%"
            >
              Admin
            </Button>
          </HStack>
        )}
      </form>
    </Box>
  );
}

export default AttendantLogin;
