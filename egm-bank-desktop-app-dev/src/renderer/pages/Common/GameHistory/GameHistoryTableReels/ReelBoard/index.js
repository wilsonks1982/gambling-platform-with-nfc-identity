import React from 'react';
import roulette_board_main from '../.././../../../assets/roulette/roulette_classic_bet_panel.png';
import { Box, Text, Image } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import UC_T1 from '../../../../../assets/reels/udupi_cafe/UC_T1.png';
import UC_T2 from '../../../../../assets/reels/udupi_cafe/UC_T2.png';
import UC_T3 from '../../../../../assets/reels/udupi_cafe/UC_T3.png';
import UC_T4 from '../../../../../assets/reels/udupi_cafe/UC_T4.png';
import UC_T5 from '../../../../../assets/reels/udupi_cafe/UC_T5.png';
import UC_T6 from '../../../../../assets/reels/udupi_cafe/UC_T6.png';
import UC_1B from '../../../../../assets/reels/udupi_cafe/UC_1B.png';
import UC_2B from '../../../../../assets/reels/udupi_cafe/UC_2B.png';
import UC_3B from '../../../../../assets/reels/udupi_cafe/UC_3B.png';
import UC_CH from '../../../../../assets/reels/udupi_cafe/UC_CH.png';
import UC_WI from '../../../../../assets/reels/udupi_cafe/UC_WI.png';
import UC_WH from '../../../../../assets/reels/udupi_cafe/UC_WH.png';
import UC_SS from '../../../../../assets/reels/udupi_cafe/UC_SS.png';
import UC_SB from '../../../../../assets/reels/udupi_cafe/UC_SB.png';
import UC_SR from '../../../../../assets/reels/udupi_cafe/UC_SR.png';
import UC_GC from '../../../../../assets/reels/udupi_cafe/UC_GC.png';
import UC_2X from '../../../../../assets/reels/udupi_cafe/UC_2X.png';
import UC_BE from '../../../../../assets/reels/udupi_cafe/UC_BE.png';
import UC_JD from '../../../../../assets/reels/udupi_cafe/UC_JD.png';
import UC_MA from '../../../../../assets/reels/udupi_cafe/UC_MA.png';
import UC_RU from '../../../../../assets/reels/udupi_cafe/UC_RU.png';

import GM_T1 from '../../../../../assets/reels/gabbar_mania/GM_T1.png';
import GM_T2 from '../../../../../assets/reels/gabbar_mania/GM_T2.png';
import GM_T3 from '../../../../../assets/reels/gabbar_mania/GM_T3.png';
import GM_T4 from '../../../../../assets/reels/gabbar_mania/GM_T4.png';
import GM_T5 from '../../../../../assets/reels/gabbar_mania/GM_T5.png';
import GM_T6 from '../../../../../assets/reels/gabbar_mania/GM_T6.png';
import GM_1B from '../../../../../assets/reels/gabbar_mania/GM_1B.png';
import GM_2B from '../../../../../assets/reels/gabbar_mania/GM_2B.png';
import GM_3B from '../../../../../assets/reels/gabbar_mania/GM_3B.png';
import GM_CH from '../../../../../assets/reels/gabbar_mania/GM_CH.png';
import GM_WI from '../../../../../assets/reels/gabbar_mania/GM_WI.png';
import GM_WH from '../../../../../assets/reels/gabbar_mania/GM_WH.png';
import GM_SS from '../../../../../assets/reels/gabbar_mania/GM_SS.png';
import GM_SB from '../../../../../assets/reels/gabbar_mania/GM_SB.png';
import GM_SR from '../../../../../assets/reels/gabbar_mania/GM_SR.png';
import GM_GC from '../../../../../assets/reels/gabbar_mania/GM_GC.png';
import GM_2X from '../../../../../assets/reels/gabbar_mania/GM_2X.png';
import GM_BE from '../../../../../assets/reels/gabbar_mania/GM_BE.png';
import GM_JD from '../../../../../assets/reels/gabbar_mania/GM_JD.png';
import GM_MA from '../../../../../assets/reels/gabbar_mania/GM_MA.png';
import GM_RU from '../../../../../assets/reels/gabbar_mania/GM_RU.png';

import UC_BG_IMG from '../../../../../assets/reels/udupi_cafe/UC_BG_IMG.png';
import GM_BG_IMG from '../../../../../assets/reels/gabbar_mania/GM_BG_IMG.png';
import UC_BG_IMG_MINUS_DISABLE from '../../../../../assets/reels/udupi_cafe/UC_BG_IMG_MINUS_DISABLE.png';
import UC_BG_IMG_PLUS_MAXBET_DISABLE from '../../../../../assets/reels/udupi_cafe/UC_BG_IMG_PLUS_MAXBET_DISABLE.png';
import GM_BG_IMG_MINUS_DISABLE from '../../../../../assets/reels/gabbar_mania/GM_BG_IMG_MINUS_DISABLE.png';
import GM_BG_IMG_PLUS_MAXBET_DISABLE from '../../../../../assets/reels/gabbar_mania/GM_BG_IMG_PLUS_MAXBET_DISABLE.png';

import numeral from 'numeral';
import { formatToIndianCurrency } from '../../../../../../renderer/utils';

const ReelBoard = ({ betData, setClose }) => {
  const getGameBG = (id, bet) => {
    switch (id) {
      case 'WAS-01':
        if (bet === 1) {
          return UC_BG_IMG_MINUS_DISABLE;
        } else if (bet === 5) {
          return UC_BG_IMG_PLUS_MAXBET_DISABLE;
        }
        return UC_BG_IMG;

      case 'WAS-02':
        if (bet === 1) {
          return GM_BG_IMG_MINUS_DISABLE;
        } else if (bet === 5) {
          return GM_BG_IMG_PLUS_MAXBET_DISABLE;
        }
        return GM_BG_IMG;

      default:
        if (bet === 1) {
          return UC_BG_IMG_MINUS_DISABLE;
        } else if (bet === 5) {
          return UC_BG_IMG_PLUS_MAXBET_DISABLE;
        }
        return GM_BG_IMG;
    }
  };

  const getGameName = (id) => {
    switch (id) {
      case 'WAS-01':
        return 'Udupi Cafe';
      case 'WAS-02':
        return 'Gabbar Mania';
      default:
        return 'Reel Game';
    }
  };

  const getPos = (i, id) => {
    const positions = {
      'WAS-01': [
        { x: '31.6%', y: '60%' },
        { x: '49.2%', y: '60%' },
        { x: '66.8%', y: '60%' },
      ],
      'WAS-02': [
        { x: '32.25%', y: '54.15%' },
        { x: '49.85%', y: '54.15%' },
        { x: '67.45%', y: '54.15%' },
      ],
      default: [
        { x: '31.6%', y: '60%' },
        { x: '49.2%', y: '60%' },
        { x: '66.8%', y: '60%' },
      ],
    };

    const set = positions[id] || positions['default'];
    return set[i] || set[0];
  };

  const gameSymbolMap = {
    'WAS-01': {
      T1: UC_T1,
      T2: UC_T2,
      T3: UC_T3,
      T4: UC_T4,
      T5: UC_T5,
      T6: UC_T6,
      '1B': UC_1B,
      '2B': UC_2B,
      '3B': UC_3B,
      CH: UC_CH,
      WI: UC_WI,
      WH: UC_WH,
      SS: UC_SS,
      BS: UC_SB,
      RS: UC_SR,
      GC: UC_GC,
      '2X': UC_2X,
      BE: UC_BE,
      JD: UC_JD,
      MA: UC_MA,
      RU: UC_RU,
    },
    'WAS-02': {
      T1: GM_T1,
      T2: GM_T2,
      T3: GM_T3,
      T4: GM_T4,
      T5: GM_T5,
      T6: GM_T6,
      '1B': GM_1B,
      '2B': GM_2B,
      '3B': GM_3B,
      CH: GM_CH,
      WI: GM_WI,
      WH: GM_WH,
      SS: GM_SS,
      BS: GM_SB,
      RS: GM_SR,
      GC: GM_GC,
      '2X': GM_2X,
      BE: GM_BE,
      JD: GM_JD,
      MA: GM_MA,
      RU: GM_RU,
    },
  };

  const getReelSrcFromName = (sym_str) => {
    //Return Game Specific Symbol
    const gameId = betData?.GameId;
    if (gameSymbolMap[gameId] && gameSymbolMap[gameId][sym_str]) {
      return gameSymbolMap[gameId][sym_str];
    }
    return null;
  };

  return (
    <Box
      mb={4}
      p={8}
      w="70%"
      position="absolute"
      top="50%"
      left="50%"
      zIndex={9999999}
      // style={{boxShadow: '0px 0px 300px 100px gray'}}
      backdropFilter="blur(15px)"
      rounded="xl"
      overflow="hidden"
      transform="translate(-50%,-50%)"
    >
      <Box
        position="relative"
        width="100%"
        rounded="full"
        height={10}
        mb={2}
        zIndex={999999}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize="md"
        fontWeight="semibold"
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          <Box bg="brand.900" color="white" px={4} py="4.2px" rounded="sm">
            {getGameName(betData?.GameId)}
          </Box>
          {betData?.isJackpot1Win && (
            <Box bg="yellow.400" color="white" px={4} py="4.2px" rounded="sm">
              JACPOT 1 HIT
            </Box>
          )}
          {betData?.isJackpot2Win && (
            <Box bg="yellow.400" color="white" px={4} py="4.2px" rounded="sm">
              JACPOT 2 HIT
            </Box>
          )}
          {betData?.isJackpot3Win && (
            <Box bg="yellow.400" color="white" px={4} py="4.2px" rounded="sm">
              JACPOT 3 HIT
            </Box>
          )}
          {betData?.isJackpot4Win && (
            <Box bg="yellow.400" color="white" px={4} py="4.2px" rounded="sm">
              JACPOT 4 HIT
            </Box>
          )}
          <Text border="2px" px={2} py={0.5} rounded="sm">
            USER {'***' + betData?.uid.slice(3)}{' '}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm">
            BET {formatToIndianCurrency(betData?.betAmount)}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm">
            OLD {formatToIndianCurrency(betData?.oldCredit)}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm">
            WON/LOST {formatToIndianCurrency(betData?.totalWin)}{' '}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm">
            CURRENT {formatToIndianCurrency(betData?.newCredit)}{' '}
          </Text>
        </Box>
        <Text onClick={setClose}>
          <CloseButton
            bg="gray.200"
            opacity={0.75}
            color="black"
            cursor="pointer"
          />
        </Text>
      </Box>
      <Box
        position="relative"
        width="100%"
        maxW="100%"
        mx="auto"
        aspectRatio={16 / 9}
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="md"
        overflow="hidden"
      >
        <Image
          src={getGameBG(betData?.GameId, betData?.bet)}
          alt="Game Background"
          objectFit="cover"
          width="100%"
          height="auto"
        />
        {betData?.symbols.map((sym, i) => {
          const { x, y } = getPos(i, betData?.GameId);

          return (
            <Box
              key={`${i}-${sym}`}
              position="absolute"
              top={y}
              left={x}
              transform="translate(-50%, -50%)"
              width="15%"
            >
              <motion.div
                initial={{ y: -100, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: [0, 0, 0.2, 0.3, 0.4, 0.7, 1], filter: 'blur(0px)' }}
                transition={{
                  y: {
                    type: 'spring',
                    stiffness: 120,
                    damping: 12,
                    mass: 0.5,
                    delay: i * 0.15,
                  },
                  opacity: {
                    duration: 0.3,
                    delay: i * 0.15,
                  },
                  filter: {
                    duration: 0.4,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  },
                }}
                style={{
                  width: '100%',
                }}
              >
                <Image
                  src={getReelSrcFromName(sym)}
                  alt={sym}
                  width="100%"
                  height="auto"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </Box>
          );
        })}
      </Box>
      <Text
        position="absolute"
        top="89.5%"
        left="56.2%"
        transform="translate(-50%, -50%)"
        height="65px"
        width="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
      >
        {formatToIndianCurrency(betData?.totalWin)}
      </Text>
      <Text
        position="absolute"
        top="89.5%"
        left="19.87%"
        transform="translate(-50%, -50%)"
        height="65px"
        width="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
      >
        {betData?.bet}
      </Text>
      <Text
        position="absolute"
        top="87.5%"
        left="9.2%"
        transform="translate(-50%, -50%)"
        height="65px"
        width="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
      >
        {formatToIndianCurrency(betData?.denom)}
      </Text>
      <Text
        position="absolute"
        top="92.5%"
        left="32.4%"
        transform="translate(-50%, -50%)"
        height="65px"
        width="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="xl"
        fontWeight="bold"
        color="white"
      >
        {formatToIndianCurrency(betData?.betAmount)}
      </Text>
      <Text
        position="absolute"
        top="87%"
        left="32.4%"
        transform="translate(-50%, -50%)"
        height="65px"
        width="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="xl"
        fontWeight="bold"
        color="white"
      >
        {formatToIndianCurrency(betData?.newCredit)}
      </Text>
    </Box>
  );
};

export default ReelBoard;
