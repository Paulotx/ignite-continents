import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Box
      w="100%"
      h={['163px', '250px', '250px', '370px']}
      background="url('/images/banner-background.png') no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        justify={['center', 'space-between']}
        px={['4', '10', '15', '20', '40']}
        h="100%"
        mx="auto"
        align="center"
      >
        <Box>
          <Heading
            color="white"
            fontWeight="600"
            lineHeight={{ base: '34px', sm: '34px', md: '44px', lg: '54px' }}
            fontSize={['xl', '2xl', '2xl', '3xl', '4xl']}
            textAlign={{ base: 'center', md: 'left' }}
          >
            6 Continentes,
            <br /> infinitas possibilidades
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        <Image
          src="/images/airplane.svg"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(68px)"
          ml="8"
        />
      </Flex>
    </Box>
  );
};
