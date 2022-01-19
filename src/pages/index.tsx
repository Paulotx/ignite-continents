import { Box, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';
import { TravelTypes } from '../components/TravelTypes';

const continents = [
  {
    name: 'América',
    description: 'O continente mais top.',
    slide_image: '/images/america.png',
  },
  {
    name: 'Africa',
    description: 'O berço da humanidade.',
    slide_image: '/images/africa.png',
  },
  {
    name: 'Europa',
    description: 'O continente mais antigo.',
    slide_image: '/images/europa.png',
  },
  {
    name: 'Oceania',
    description: 'O continente mais bonito.',
    slide_image: '/images/oceania.png',
  },
  {
    name: 'Asia',
    description: 'O continente com mais doidos.',
    slide_image: '/images/asia.png',
  },
  {
    name: 'Antártida',
    description: 'O continente gelado.',
    slide_image: '/images/antartida.png',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <Box width="90px" height="4px" bgColor="gray.500" mx="auto" my="20" />

      <Box as="div" mx="auto" maxW="1240px">
        <Text as="p" fontSize="4xl" fontWeight="500" align="center" mt="-10px">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>

      <Slide continents={continents} />
    </>
  );
}
