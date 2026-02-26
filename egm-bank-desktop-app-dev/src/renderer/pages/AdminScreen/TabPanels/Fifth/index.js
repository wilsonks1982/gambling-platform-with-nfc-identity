import React, { useState, useEffect } from 'react';
import Stations from '../../../../components/Stations';
import { Box } from '@chakra-ui/react';

const StationManagement = () => {
  return (
    <Box w={'100%'}>
      <Stations />
    </Box>
  );
};

export default StationManagement;
