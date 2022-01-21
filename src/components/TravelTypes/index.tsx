import { SimpleGrid } from '@chakra-ui/react';

import { TravelType } from './TravelType';

export const TravelTypes = () => {
  return (
    <SimpleGrid
      direction="row"
      w="100%"
      maxW="1240px"
      minChildWidth="160px"
      mx="auto"
      mt="20"
      gap="10"
    >
      <TravelType src="/images/cocktail.svg" alt="Night Life" title="vida noturna" />
      <TravelType src="/images/surf.svg" alt="Surf" title="praia" />
      <TravelType src="/images/building.svg" alt="Modern" title="moderno" />
      <TravelType src="/images/museum.svg" alt="Classic" title="clássico" />
      <TravelType src="/images/earth.svg" alt="More options" title="e mais ..." />
    </SimpleGrid>
  );
};
