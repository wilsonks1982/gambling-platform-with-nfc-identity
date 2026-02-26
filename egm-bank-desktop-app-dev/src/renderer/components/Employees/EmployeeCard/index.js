import React from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  Stack,
  Flex,
  Tooltip,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const labelColor = useColorModeValue('gray.600', 'gray.400');
  const fadedTextColor = useColorModeValue('gray.100', 'whiteAlpha.100');

  const isAdmin = employee?.role === 'Admin';

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{ maxWidth: 360, width: '100%', position: 'relative' }}
    >
      <Box
        border="1px solid"
        borderColor={border}
        borderRadius="lg"
        bg={bg}
        px={5}
        py={6}
        overflow="hidden"
        position="relative"
        minW="400px"
        zIndex={1}
      >
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={2}>
            <Badge
              colorScheme={isAdmin ? 'purple' : employee?.role === 'Manager' ? "green" : "blue"}
              fontSize="0.7em"
              px={2}
              py={0.5}
              borderRadius="full"
              variant="subtle"
            >
              {employee?.role || 'Unknown Role'}
            </Badge>
          </Flex>

          <Flex gap={1}>
            <Tooltip label="Edit Employee">
              <Button
                leftIcon={<EditIcon />}
                size="sm"
                variant="ghost"
                onClick={onEdit}
                disabled={isAdmin}
              >
                Edit
              </Button>
            </Tooltip>
            <Tooltip label="Delete Employee">
              <Button
                leftIcon={<DeleteIcon />}
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={onDelete}
                disabled={isAdmin}
              >
                Delete
              </Button>
            </Tooltip>
          </Flex>
        </Flex>

        <Heading size="md" color={headingColor} mb={2} noOfLines={1}>
          {employee?.account || 'Unknown Account'}
        </Heading>

        <Box fontSize="sm" color={labelColor} lineHeight="1.6">
          <Text>
            <strong>PIN:</strong>{' '}
            {'*'.repeat(employee?.pin?.toString().length || 0)}
          </Text>
        </Box>
      </Box>
    </MotionDiv>
  );
};

export default EmployeeCard;
