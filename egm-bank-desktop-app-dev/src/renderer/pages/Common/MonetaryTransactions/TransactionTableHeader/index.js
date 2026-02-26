import React, { useState, useCallback } from 'react';
import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  usePDF,
  pdf,
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Header from './Table/Header';
import Content from './Table/Content';
import {
  Button,
  Heading,
  HStack,
  Spacer,
  Tooltip,
  Text as ChakraText,
  Box,
} from '@chakra-ui/react';
import wildAceLogoImage from '../../../../assets/WildAceLogo.png';
import clientLogo from '../../../../assets/CadillacLogoFiller.png';
import { store, actions } from '../../../../store';
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
  },
});
import { useSelector } from 'react-redux';

// Define the PDF document (you can also import it)

const MyPdfDocument = ({ data, lastReset, role }) => {
  const tableHeaders = [
    'Player',
    'Type',
    'By',
    'Age In Hours',
    'Cash-In',
    'Cash-Out',
    'prevCredit',
    'thenCredit',
    'Timeline',
  ]; // Define the column headers
  const documentTitle = 'Player Transactions';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          title={documentTitle}
          logoSrc={wildAceLogoImage}
          clientLogo={clientLogo}
          role={role}
        />
        <Content data={data} headers={tableHeaders} lastReset={lastReset} />
        {/* Add your main content here */}
      </Page>
    </Document>
  );
};

/**
 * Triggers a download for a given URL by creating a hidden anchor element.
 * @param url - The URL of the file to be downloaded.
 * @param title - The title to be used for the downloaded file (default is 'document').
 */
function downloadFromURL(url, title = 'document') {
  const a = document.createElement('a');
  a.href = url;
  a.download = title + '.pdf';
  a.click();
}

// Consolidated Component
const PdfHandlerButton = ({
  data,
  mode = 'download',
  filename = 'MonetaryEvents',
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfInstance, updatePdfInstance] = usePDF();
  const { role } = useSelector((state) => state.user);

  const handleDownloadClick = async () => {
    setIsGenerating(true);
    updatePdfInstance(<MyPdfDocument data={data} role={role} />);
  };

  React.useEffect(() => {
    if (pdfInstance.url) {
      downloadFromURL(pdfInstance.url, filename);
      setIsGenerating(false);
    }
    if (pdfInstance.error) {
      console.error('PDF Generation error', pdfInstance.error);
      setIsGenerating(false);
    }
  }, [pdfInstance.url, pdfInstance.error, filename]);

  const handlePreviewClick = useCallback(async () => {
    setIsGenerating(true);
    try {
      const pdfBlob = await pdf(<MyPdfDocument data={data} />).toBlob();
      const pdfBlobUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfBlobUrl, '_blank');
      URL.revokeObjectURL(pdfBlobUrl);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [data]);

  if (mode === 'both') {
    return (
      <>
        <button
          onClick={handleDownloadClick}
          disabled={isGenerating}
          aria-disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Download PDF'}
        </button>
        <button
          onClick={handlePreviewClick}
          disabled={isGenerating}
          aria-disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Preview PDF'}
        </button>
      </>
    );
  }

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
      <ChakraText fontSize={'xl'} textTransform="uppercase" fontWeight={'bold'}>
        Monetary Events History
      </ChakraText>
      <Spacer />
      <Button
        color={'white'}
        border="1px"
        borderColor="white"
        bg="none"
        _hover={{ borderColor: 'brand.300', color: 'brand.300' }}
        onClick={handleDownloadClick}
        aria-disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Save Monetary Events (PDF)'}
      </Button>
    </HStack>
  );
};

export default PdfHandlerButton;
