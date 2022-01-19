import { Box, BoxProps, Heading, SimpleGrid } from '@chakra-ui/react';

import { City } from './City';

type CitiesProps = BoxProps;

export const Cities = ({ ...rest }: CitiesProps) => {
  return (
    <Box maxW="1240px" px="1rem" mx="auto" {...rest}>
      <Heading>Cidades + 100</Heading>

      <SimpleGrid flex="1" gap="10" mt="10" minChildWidth="260px" align="flex-start">
        <City
          city="Londres"
          country="Reino Unido"
          image="/images/londres.png"
          flag="/images/flags/england.png"
        />
        <City
          city="Paris"
          country="França"
          image="/images/paris.png"
          flag="/images/flags/france.png"
        />
        <City
          city="Roma"
          country="Italia"
          image="/images/roma.png"
          flag="/images/flags/italy.png"
        />
        <City
          city="Praga"
          country="República Tcheca"
          image="/images/praga.png"
          flag="/images/flags/czech_republic.png"
        />
        <City
          city="Amesterdã"
          country="Holanda"
          image="/images/amsterda.png"
          flag="/images/flags/netherlands.png"
        />
      </SimpleGrid>
    </Box>
  );
};
