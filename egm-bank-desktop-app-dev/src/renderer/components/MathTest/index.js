import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const MathTest = () => {
  const [resultText, setResultText] = useState('');
  const [loading, setLoading] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const [chartLoading, setChartLoading] = useState(false);
  const chartDataRef = useRef([]);

  useEffect(() => {
    const fetchTextResults = async () => {
      try {
        const txtResponse = await fetch(
          'http://192.168.1.127:9001/results/test_results.txt'
        );
        if (!txtResponse.ok) {
          throw new Error('Could not fetch text file');
        }
        const txtData = await txtResponse.text();
        setResultText(txtData);
      } catch (err) {
        console.error('Failed to load result text:', err);
        setResultText('⚠️ Error loading result text');
      } finally {
        setLoading(false);
      }
    };

    fetchTextResults();
  }, []);

  const fetchChartData = async () => {
    setChartLoading(true);
    try {
      const chartResponse = await fetch(
        'http://192.168.1.127:9001/results/chart_data.json'
      );
      if (!chartResponse.ok) {
        throw new Error('Could not fetch chart data');
      }
      const chartJson = await chartResponse.json();
      chartDataRef.current = chartJson;
      setShowChart(true);
    } catch (err) {
      console.error('Failed to load chart data:', err);
      chartDataRef.current = [];
      setShowChart(true);
    } finally {
      setChartLoading(false);
    }
  };

  const renderResultText = () => {
    return resultText
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line, index) => (
        <Text key={index} fontSize="sm" fontFamily="mono" whiteSpace="pre-wrap">
          {line}
        </Text>
      ));
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="300px">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      w="100%"
      align="center"
      bg="white"
      minH="70vh"
    >
      <Box
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
          Test Results
        </Text>
      </Box>

      <Box
        bg="white"
        w="full"
        maxW="700px"
        p={6}
        borderRadius="xl"
        boxShadow="md"
        mb={4}
      >
        <VStack align="start" spacing={2}>
          {renderResultText()}
        </VStack>
      </Box>

      {!showChart && !chartLoading && (
        <Button colorScheme="blue" size="lg" onClick={fetchChartData}>
          Show Chart Data
        </Button>
      )}

      {chartLoading && (
        <Flex justify="center" align="center" minH="100px">
          <Spinner size="lg" color="green.500" />
          <Text ml={3}>Loading chart data...</Text>
        </Flex>
      )}

      {showChart && (
        <Box
          w="full"
          maxW="1000px"
          h="400px"
          bg="white"
          p={4}
          rounded="lg"
          boxShadow="md"
          mt={4}
        >
          {chartDataRef.current.length === 0 ? (
            <Text color="red.500">⚠️ No chart data available</Text>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartDataRef.current}
                margin={{ top: 40, right: 20, bottom: 40, left: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="spin"
                  label={{
                    value: 'Number of Spins',
                    position: 'insideBottom',
                    offset: -25,
                  }}
                />
                <YAxis
                  label={{
                    value: 'Percentage (%)',
                    angle: -90,
                    position: 'insideLeft',
                    dy: 40,
                  }}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line
                  type="monotone"
                  dataKey="hitRate"
                  stroke="#3182ce"
                  name="Hit % by Spins"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="profitRate"
                  stroke="#38a169"
                  name="Payout %"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default MathTest;
