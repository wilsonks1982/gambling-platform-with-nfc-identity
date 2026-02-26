import { Button, Heading, Flex, Tooltip, Text as ChakraText } from '@chakra-ui/react';

const GameHistoryTableHeader = () => {
  return (
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
      <ChakraText fontSize={'xl'} textTransform="uppercase" fontWeight={'bold'}>
        Game History
      </ChakraText>
    </Flex>
  );
};

export default GameHistoryTableHeader;
