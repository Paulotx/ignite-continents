import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Box, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />

      <Banner bgImage="/images/banner.png" />

      <TravelTypes />

      <Box width="90px" height="4px" bgColor="gray.500" mx="auto" my="20" />

      <Box as="div" mx="auto" maxW="1240px">
        <Text as="p" fontSize="4xl" fontWeight="500" align="center" mt="-10px">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>

      <Flex
        maxW="1240px"
        w="100%"
        h="450px"
        background="url(images/europa.png) no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        mx="auto"
        my="50px"
        align="center"
        justify="center"
        position="relative"
      >
        <Flex align="center" justify="space-between" w="100%" px="8">
          <Icon as={BsChevronLeft} fontSize="40" color="yellow.500" />

          <Flex direction="column" align="center">
            <Heading as="h2" color="white" fontSize="5xl">
              Europa
            </Heading>
            <Text color="white" fontSize="xl" mt="4" fontWeight="600">
              O continente mais antigo.
            </Text>
          </Flex>

          <Icon as={BsChevronRight} fontSize="40" color="yellow.500" />
        </Flex>
        <Stack direction="row" spacing="4" position="absolute" bottom="6">
          <Box w="4" h="4" br="50%" bg="yellow.500" borderRadius="full" />
          <Box w="4" h="4" br="50%" bg="gray.400" borderRadius="full" />
          <Box w="4" h="4" br="50%" bg="gray.400" borderRadius="full" />
          <Box w="4" h="4" br="50%" bg="gray.400" borderRadius="full" />
          <Box w="4" h="4" br="50%" bg="gray.400" borderRadius="full" />
          <Box w="4" h="4" br="50%" bg="gray.400" borderRadius="full" />
        </Stack>
      </Flex>
    </>
  );
}
