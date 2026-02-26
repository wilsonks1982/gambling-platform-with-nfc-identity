import React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  IconButton,
  Tooltip,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const StationCard = ({ station, onEdit, onDelete }) => {
  const isActive = station?.isActive;
  const statusColor = isActive ? 'green' : 'orange';
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const labelColor = useColorModeValue('gray.600', 'gray.400');
  const fadedTextColor = useColorModeValue('gray.100', 'whiteAlpha.100');

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
      <Text
        position="absolute"
        top="46%"
        left="86%"
        fontSize="65px"
        fontWeight="extrabold"
        color={fadedTextColor}
        zIndex={9}
        pointerEvents="none"
        userSelect="none"
      >
        #{station?.id ?? '—'}
      </Text>

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
        {/* Header Row */}
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={2}>
            <Badge
              colorScheme={statusColor}
              fontSize="0.7em"
              px={2}
              py={0.5}
              borderRadius="full"
              variant="subtle"
            >
              {isActive ? 'Active' : 'Inactive'}
            </Badge>
            <Text fontSize="sm" color={labelColor}>
              #{station?.id ?? '—'}
            </Text>
          </Flex>

          <Flex gap={1}>
            <Tooltip label="Edit Station">
              <IconButton
                icon={<EditIcon />}
                size="sm"
                variant="ghost"
                aria-label="Edit"
                onClick={onEdit}
              />
            </Tooltip>
            <Tooltip label="Delete Station">
              <IconButton
                icon={<DeleteIcon />}
                size="sm"
                variant="ghost"
                colorScheme="red"
                aria-label="Delete"
                disabled
                onClick={onDelete}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Heading size="md" color={headingColor} mb={2}>
          {station?.egmId || 'Unknown EGM'}
        </Heading>

        <Box fontSize="sm" color={labelColor} lineHeight="1.6">
          <Text>
            <strong>IP:</strong> {station?.ipAddress ?? 'N/A'}
          </Text>
          <Text>
            <strong>Last Updated:</strong> {station?.updatedAt ?? '—'}
          </Text>
        </Box>
      </Box>
    </MotionDiv>
  );
};

export default StationCard;
