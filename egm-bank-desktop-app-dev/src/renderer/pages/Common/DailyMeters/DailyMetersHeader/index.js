import React, { useState, useEffect, useRef } from 'react';
import { usePDF } from '@react-pdf/renderer';
import {
  Button,
  HStack,
  Box,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import DailyMetersPdf from '../DailyMetersPdf';
import { convertUTCToTimeStamp } from '../../../../utils';

function downloadFromURL(url, title = 'document') {
  const now = new Date();
  const formattedDate = convertUTCToTimeStamp(now).toString();
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title}_${formattedDate}.pdf`;
  a.click();
}

const DailyMetersHeader = ({
  data,
  mode = 'download',
  filename,
  heading,
  loadingMetersData,
  onResetButtonClick,
  stations
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfInstance, updatePdfInstance] = usePDF();
  const { role } = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleDownloadClick = async () => {
    setIsGenerating(true);
    updatePdfInstance(<DailyMetersPdf data={data} role={role} stations={stations} />);
  };

  useEffect(() => {
    if (pdfInstance.url) {
      downloadFromURL(pdfInstance.url, filename);
      setIsGenerating(false);
    } else if (pdfInstance.error) {
      console.error('PDF Generation error', pdfInstance.error);
      setIsGenerating(false);
    }
  }, [pdfInstance.url, pdfInstance.error, filename]);

  return (
    <HStack
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
      <Box fontSize="xl" textTransform="uppercase" fontWeight="bold">
        {heading}
      </Box>

      <HStack spacing={2}>
        <Button
          variant="outline"
          bg="none"
          borderColor="white"
          color="white"
          _hover={{
            borderColor: 'brand.300',
            color: 'brand.300',
          }}
          onClick={handleDownloadClick}
          isDisabled={loadingMetersData || isGenerating}
        >
          {loadingMetersData
            ? 'Fetching Data...'
            : isGenerating
            ? 'Generating...'
            : 'Save Meters (PDF)'}
        </Button>

        <Button
          variant="outline"
          bg="none"
          borderColor="white"
          color="white"
          _hover={{
            borderColor: 'red.500',
            color: 'red.500',
          }}
          onClick={onOpen}
        >
          Reset All To 0
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Reset All Meters
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onResetButtonClick();
                    onClose();
                  }}
                  ml={3}
                >
                  Sure
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </HStack>
    </HStack>
  );
};

export default DailyMetersHeader;
