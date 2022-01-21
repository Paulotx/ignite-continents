import { Box, BoxProps, Heading, SimpleGrid } from '@chakra-ui/react';

import { City } from './City';

interface City {
  city: string;
  country: string;
  image: string;
  flag: string;
}

interface CitiesProps extends BoxProps {
  cities: City[];
}

export const Cities = ({ cities, ...rest }: CitiesProps) => {
  return (
    <Box maxW="1240px" px="1rem" mx="auto" {...rest}>
      <Heading>Cidades + 100</Heading>

      <SimpleGrid flex="1" gap="10" mt="10" minChildWidth="260px" align="flex-start">
        {cities.map((city) => (
          <City
            key={city.city}
            city={city.city}
            country={city.country}
            image={city.image}
            flag={city.flag}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
