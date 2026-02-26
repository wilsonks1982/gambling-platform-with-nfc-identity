import React from 'react';
import { HStack, Box, IconButton, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const PaginationCustom = ({ currentPage, totalPages, onPageChange }) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 2) {
        pages.push(0);
        if (currentPage > 3) pages.push('ellipsis');
      }

      const start = Math.max(currentPage - 2, 0);
      const end = Math.min(currentPage + 2, totalPages - 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) {
        if (currentPage < totalPages - 4) pages.push('ellipsis');
        pages.push(totalPages - 1);
      }
    }

    return pages;
  };

  return (
    <HStack spacing={6} w="100%" justify="center" py={6}>
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon boxSize={5} />}
        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
        isDisabled={currentPage === 0}
        variant="ghost"
        size="sm"
      />

      <HStack spacing={1}>
        {generatePages().map((page, index) =>
          page === 'ellipsis' ? (
            <Text key={`ellipsis-${index}`} color="gray.500">
              …
            </Text>
          ) : (
            <Box
              key={page}
              minW="32px"
              w="auto"
              h="32px"
              px={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              rounded="full"
              bg={page === currentPage ? 'blue.500' : 'gray.200'}
              color={page === currentPage ? 'white' : 'gray.700'}
              cursor="pointer"
              fontWeight="medium"
              onClick={() => onPageChange(page)}
              transition="all 0.2s"
              _hover={{
                bg: page === currentPage ? 'blue.600' : 'gray.300',
              }}
            >
              {page + 1}
            </Box>
          )
        )}
      </HStack>

      <IconButton
        aria-label="Next page"
        icon={<ChevronRightIcon boxSize={5} />}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}
        isDisabled={currentPage === totalPages - 1}
        variant="ghost"
        size="sm"
      />

      <Text fontSize="sm" color="gray.600" ml={4}>
        Page {currentPage + 1} of {totalPages}
      </Text>
    </HStack>
  );
};

export default PaginationCustom;
