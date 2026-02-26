import { Box, Text } from '@chakra-ui/react';

const AdminCardDisplay = () => {
  return (
    <Box
      bg="blue.50"
      border="1px solid"
      borderColor="blue.300"
      borderRadius="md"
      p={4}
      shadow="sm"
    >
      <Text fontWeight="bold" color="blue.700" mb={2}>
        Admin Access Detected
      </Text>
      <Text>This is an admin card.</Text>
      <Text>Transactions are not allowed on admin cards.</Text>
    </Box>
  );
};

export default AdminCardDisplay;
