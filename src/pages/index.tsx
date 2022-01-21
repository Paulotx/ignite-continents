import { GetStaticProps } from 'next';

import { Box, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';
import { TravelTypes } from '../components/TravelTypes';

interface Continent {
  slug: string;
  name: string;
  description: string;
  slide_image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const continents = [
    {
      slug: 'america',
      name: 'América',
      description: 'O continente mais top.',
      slide_image: '/images/america.png',
    },
    {
      slug: 'africa',
      name: 'Africa',
      description: 'O berço da humanidade.',
      slide_image: '/images/africa.png',
    },
    {
      slug: 'europe',
      name: 'Europa',
      description: 'O continente mais antigo.',
      slide_image: '/images/europa.png',
    },
    {
      slug: 'oceania',
      name: 'Oceania',
      description: 'O continente mais bonito.',
      slide_image: '/images/oceania.png',
    },
    {
      slug: 'asia',
      name: 'Asia',
      description: 'O maior dos continentes',
      slide_image: '/images/asia.png',
    },
    {
      slug: 'antartida',
      name: 'Antártida',
      description: 'O continente gelado.',
      slide_image: '/images/antartida.png',
    },
  ];

  return {
    props: { continents },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};
