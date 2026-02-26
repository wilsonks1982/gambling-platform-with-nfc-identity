import React, { useState } from 'react';
import roulette_board_main from '../.././../../../assets/roulette/roulette_classic_bet_panel.png';
import number_fire from '../../../../../assets/roulette/number_fire.webm';
import number_0_fire from '../../../../../assets/roulette/number_0_fire.webm';
import { Box, Text, Image, chakra } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const Video = chakra('video');

import chip_10 from '../.././../../../assets/roulette/chip_10.png';
import chip_20 from '../.././../../../assets/roulette/chip_20.png';
import chip_50 from '../.././../../../assets/roulette/chip_50.png';
import chip_200 from '../.././../../../assets/roulette/chip_200.png';
import chip_1000 from '../.././../../../assets/roulette/chip_1000.png';

import numeral from 'numeral';
import { formatToIndianCurrency } from '../../../../../../renderer/utils';

const RouletteBoard = ({ betData, isWinList, setClose }) => {
  const [isWinListLocal, setIsWinListLocal] = useState(isWinList);

  const rouletteMap = {
    300: { x: '23%', y: '6%' },
    301: { x: '46%', y: '6%' },

    400: { x: '23%', y: '13.5%' },
    401: { x: '23%', y: '20.75%' },
    402: { x: '23%', y: '28.1%' },
    403: { x: '23%', y: '35.4%' },
    404: { x: '23%', y: '42.7%' },
    405: { x: '23%', y: '50%' },
    406: { x: '23%', y: '57.3%' },
    407: { x: '23%', y: '64.6%' },
    408: { x: '23%', y: '71.9%' },
    409: { x: '23%', y: '79.2%' },
    410: { x: '23%', y: '86.5%' },

    411: { x: '45.25%', y: '13.5%' },
    412: { x: '45.25%', y: '20.75%' },
    413: { x: '45.25%', y: '28.1%' },
    414: { x: '45.25%', y: '35.4%' },
    415: { x: '45.25%', y: '42.7%' },
    416: { x: '45.25%', y: '50%' },
    417: { x: '45.25%', y: '57.3%' },
    418: { x: '45.25%', y: '64.6%' },
    419: { x: '45.25%', y: '71.9%' },
    420: { x: '45.25%', y: '79.2%' },
    421: { x: '45.25%', y: '86.5%' },
    422: { x: '68.25%', y: '6%' },

    500: { x: '68.25%', y: '9.85%' },
    501: { x: '68.25%', y: '17.15%' },
    502: { x: '68.25%', y: '24.45%' },
    503: { x: '68.25%', y: '31.75%' },
    504: { x: '68.25%', y: '39.05%' },
    505: { x: '68.25%', y: '46.35%' },
    506: { x: '68.25%', y: '53.65%' },
    507: { x: '68.25%', y: '60.95%' },
    508: { x: '68.25%', y: '68.25%' },
    509: { x: '68.25%', y: '75.55%' },
    510: { x: '68.25%', y: '82.85%' },
    511: { x: '68.25%', y: '90.15%' },

    600: { x: '68.25%', y: '13.5%' },
    601: { x: '68.25%', y: '20.75%' },
    602: { x: '68.25%', y: '28.1%' },
    603: { x: '68.25%', y: '35.4%' },
    604: { x: '68.25%', y: '42.7%' },
    605: { x: '68.25%', y: '50%' },
    606: { x: '68.25%', y: '57.3%' },
    607: { x: '68.25%', y: '64.6%' },
    608: { x: '68.25%', y: '71.9%' },
    609: { x: '68.25%', y: '79.2%' },
    610: { x: '68.25%', y: '86.5%' },

    700: { x: '12.3%', y: '96.75%' },
    701: { x: '34.29%', y: '96.75%' },
    702: { x: '57%', y: '96.75%' },

    800: { x: '75.25%', y: '20.75%' },
    801: { x: '75.25%', y: '50%' },
    802: { x: '75.25%', y: '79.2%' },

    900: { x: '91.5%', y: '13.5%' },
    901: { x: '91.5%', y: '28.1%' },
    902: { x: '91.5%', y: '42.7%' },
    903: { x: '91.5%', y: '57.3%' },
    904: { x: '91.5%', y: '71.9%' },
    905: { x: '91.5%', y: '86.5%' },

    100: { x: '34.29%', y: '3.11%' },

    101: { x: '56.32%', y: '9.81%' },
    102: { x: '34.29%', y: '9.81%' },
    103: { x: '12.3%', y: '9.81%' },

    104: { x: '56.32%', y: '17.11%' },
    105: { x: '34.29%', y: '17.11%' },
    106: { x: '12.3%', y: '17.11%' },

    107: { x: '56.32%', y: '24.41%' },
    108: { x: '34.29%', y: '24.41%' },
    109: { x: '12.3%', y: '24.41%' },

    110: { x: '56.32%', y: '31.71%' },
    111: { x: '34.29%', y: '31.71%' },
    112: { x: '12.3%', y: '31.71%' },

    113: { x: '56.32%', y: '39.01%' },
    114: { x: '34.29%', y: '39.01%' },
    115: { x: '12.3%', y: '39.01%' },

    116: { x: '56.32%', y: '46.31%' },
    117: { x: '34.29%', y: '46.31%' },
    118: { x: '12.3%', y: '46.31%' },

    119: { x: '56.32%', y: '53.61%' },
    120: { x: '34.29%', y: '53.61%' },
    121: { x: '12.3%', y: '53.61%' },

    122: { x: '56.32%', y: '60.91%' },
    123: { x: '34.29%', y: '60.91%' },
    124: { x: '12.3%', y: '60.91%' },

    125: { x: '56.32%', y: '68.21%' },
    126: { x: '34.29%', y: '68.21%' },
    127: { x: '12.3%', y: '68.21%' },

    128: { x: '56.32%', y: '75.51%' },
    129: { x: '34.29%', y: '75.51%' },
    130: { x: '12.3%', y: '75.51%' },

    131: { x: '56.32%', y: '82.81%' },
    132: { x: '34.29%', y: '82.81%' },
    133: { x: '12.3%', y: '82.81%' },

    134: { x: '56.32%', y: '90.11%' },
    135: { x: '34.29%', y: '90.11%' },
    136: { x: '12.3%', y: '90.11%' },

    200: { x: '12.3%', y: '6%' },
    201: { x: '12.3%', y: '13.5%' },
    202: { x: '12.3%', y: '20.75%' },
    203: { x: '12.3%', y: '28.1%' },
    204: { x: '12.3%', y: '35.4%' },
    205: { x: '12.3%', y: '42.7%' },
    206: { x: '12.3%', y: '50%' },
    207: { x: '12.3%', y: '57.3%' },
    208: { x: '12.3%', y: '64.6%' },
    209: { x: '12.3%', y: '71.9%' },
    210: { x: '12.3%', y: '79.2%' },
    211: { x: '12.3%', y: '86.5%' },

    212: { x: '23%', y: '9.85%' },
    213: { x: '23%', y: '17.15%' },
    214: { x: '23%', y: '24.45%' },
    215: { x: '23%', y: '31.75%' },
    216: { x: '23%', y: '39.05%' },
    217: { x: '23%', y: '46.35%' },
    218: { x: '23%', y: '53.65%' },
    219: { x: '23%', y: '60.95%' },
    220: { x: '23%', y: '68.25%' },
    221: { x: '23%', y: '75.55%' },
    222: { x: '23%', y: '82.85%' },
    223: { x: '23%', y: '90.15%' },

    224: { x: '34.29%', y: '6%' },
    225: { x: '34.29%', y: '13.5%' },
    226: { x: '34.29%', y: '20.75%' },
    227: { x: '34.29%', y: '28.1%' },
    228: { x: '34.29%', y: '35.4%' },
    229: { x: '34.29%', y: '42.7%' },
    230: { x: '34.29%', y: '50%' },
    231: { x: '34.29%', y: '57.3%' },
    232: { x: '34.29%', y: '64.6%' },
    233: { x: '34.29%', y: '71.9%' },
    234: { x: '34.29%', y: '79.2%' },
    235: { x: '34.29%', y: '86.5%' },

    236: { x: '46%', y: '9.85%' },
    237: { x: '46%', y: '17.15%' },
    238: { x: '46%', y: '24.45%' },
    239: { x: '46%', y: '31.75%' },
    240: { x: '46%', y: '39.05%' },
    241: { x: '46%', y: '46.35%' },
    242: { x: '46%', y: '53.65%' },
    243: { x: '46%', y: '60.95%' },
    244: { x: '46%', y: '68.25%' },
    245: { x: '46%', y: '75.55%' },
    246: { x: '46%', y: '82.85%' },
    247: { x: '46%', y: '90.15%' },

    248: { x: '57%', y: '6%' },
    249: { x: '57%', y: '13.5%' },
    250: { x: '57%', y: '20.75%' },
    251: { x: '57%', y: '28.1%' },
    252: { x: '57%', y: '35.4%' },
    253: { x: '57%', y: '42.7%' },
    254: { x: '57%', y: '50%' },
    255: { x: '57%', y: '57.3%' },
    256: { x: '57%', y: '64.6%' },
    257: { x: '57%', y: '71.9%' },
    258: { x: '57%', y: '79.2%' },
    259: { x: '57%', y: '86.5%' },
  };

  const winNoMap = {
    0: 100,
    1: 101,
    2: 102,
    3: 103,
    4: 104,
    5: 105,
    6: 106,
    7: 107,
    8: 108,
    9: 109,
    10: 110,
    11: 111,
    12: 112,
    13: 113,
    14: 114,
    15: 115,
    16: 116,
    17: 117,
    18: 118,
    19: 119,
    20: 120,
    21: 121,
    22: 122,
    23: 123,
    24: 124,
    25: 125,
    26: 126,
    27: 127,
    28: 128,
    29: 129,
    30: 130,
    31: 131,
    32: 132,
    33: 133,
    34: 134,
    35: 135,
    36: 136,
  };

  const getWinIndex = () => {
    return winNoMap[betData?.number];
  };

  const getBetChip = (bet) => {
    if (bet.betAmount >= 1000) return chip_1000;
    if (bet.betAmount >= 200 && bet.betAmount < 1000) return chip_200;
    if (bet.betAmount >= 50 && bet.betAmount < 200) return chip_50;
    if (bet.betAmount >= 20 && bet.betAmount < 50) return chip_20;
    return chip_10;
  };

  const getTypeOfList = () => {
    return isWinListLocal ? betData.wonBetsList : betData.betsList;
  };

  return (
    <Box
      mb={4}
      p={8}
      w="70%"
      zIndex={9999999}
      // style={{boxShadow: '0px 0px 300px 100px gray'}}
      backdropFilter="blur(15px)"
      rounded="xl"
      overflow="hidden"
      position="absolute"
      top="50%"
      left="50%"
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
          <Box
            bg="brand.900"
            color="white"
            px={4}
            py="4.2px"
            rounded="sm"
            cursor="pointer"
            onClick={() => setIsWinListLocal(!isWinListLocal)}
          >
            {isWinListLocal ? 'SHOWING WINS' : 'SHOWING BETS'}{' '}
          </Box>
          <Text border="2px" px={2} py={0.5} rounded="sm" cursor="pointer">
            NUMBER {betData?.number}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm" cursor="pointer">
            USER {'***' + betData?.uid.slice(3)}{' '}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm" cursor="pointer">
            OLD {formatToIndianCurrency(betData?.oldCredit)}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm" cursor="pointer">
            WON/LOST {formatToIndianCurrency(betData?.winAmount)}{' '}
          </Text>
          <Text border="2px" px={2} py={0.5} rounded="sm" cursor="pointer">
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
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="2xl"
      >
        <Image src={roulette_board_main} display="inline-block" />
        {getTypeOfList().map((bet, i) => (
          <Box
            key={bet?.betIndex}
            position="absolute"
            top={rouletteMap[bet.betIndex].x}
            left={rouletteMap[bet.betIndex].y}
            transform="translate(-50%, -50%)"
            height="65px"
            width="65px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            pointerEvents="none"
            zIndex={9999999999}
          >
            <MotionDiv
              key={`${isWinListLocal ? 'win' : 'bet'}-${bet.betIndex}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.015 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                zIndex={9999}
                position="absolute"
                fontWeight="bold"
                color="white"
                fontSize="md"
              >
                <MotionDiv
                  animate={{
                    // opacity: [1, 0, 1],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {isWinListLocal
                    ? numeral(bet.winAmount).format('0.[0]a')
                    : numeral(bet.betAmount).format('0.[0]a')}
                </MotionDiv>
              </Text>
              <motion.img
                src={getBetChip(bet)}
                style={{ position: 'relative', width: '100%', height: 'auto' }}
                animate={{
                  // opacity: [1, 0, 1],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </MotionDiv>
          </Box>
        ))}
        {/* <Box
          position="absolute"
          top={rouletteMap[getWinIndex()].x}
          left={rouletteMap[getWinIndex()].y}
          transform="translate(-50%, -50%)"
          height={getWinIndex() === 100 ? '62.7%' : '19.6%'}
          width={getWinIndex() === 100 ? '4.95%' : '6.4%'}
          bg="white"
          rounded="lg"
          opacity="0.6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pointerEvents="none"
        ></Box> */}
        <Video
          position="absolute"
          bgSize="cover"
          src={getWinIndex() === 100 ? number_0_fire : number_fire}
          top={rouletteMap[getWinIndex()].x}
          left={rouletteMap[getWinIndex()].y}
          transform="translate(-50%, -50%)"
          height={getWinIndex() === 100 ? '72%' : '24%'}
          // width="40%"
          pointerEvents="none"
          autoPlay
          loop
          muted
          playsInline
        />
      </Box>
    </Box>
  );
};

export default RouletteBoard;
