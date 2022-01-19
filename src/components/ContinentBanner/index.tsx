import { Flex, Heading } from '@chakra-ui/react';

export const ContinentBanner = () => {
  return (
    <Flex
      w="100%"
      h={['200px', '400px', '600px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      background="url('/images/banner-europa.png') no-repeat"
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading color="white" textAlign={['center', 'left']} fontSize={['1.75rem', '5xl']}>
        Europa
      </Heading>
    </Flex>
  );
};
