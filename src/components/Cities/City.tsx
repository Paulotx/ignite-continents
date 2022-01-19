import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface CityProps {
  city: string;
  country: string;
  image: string;
  flag: string;
}

export const City = ({ city, country, image, flag }: CityProps) => {
  return (
    <Flex direction="column" w="100%">
      <Image
        src={image}
        w="100%"
        h={{ base: '400px', sm: '250px', md: '200', lg: '180px' }}
        borderRadius="4px 4px 0 0"
        objectFit="cover"
      />
      <Flex
        w="100%"
        p="24px"
        bg="white"
        justify="space-between"
        align="center"
        borderRadius="0 0 4px 4px"
        border="1px"
        borderColor="yellow.500"
        borderTop="none"
      >
        <Box>
          <Text fontSize="xl" fontWeight="600">
            {city}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {country}
          </Text>
        </Box>
        <Image src={flag} w="8" h="8" objectFit="cover" />
      </Flex>
    </Flex>
  );
};
