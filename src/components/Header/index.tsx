import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsChevronLeft } from 'react-icons/bs';

import { Flex, Icon, Image, Link as ChakraLink } from '@chakra-ui/react';

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      align="center"
      justify="center"
      maxW="1240px"
      h="100px"
      mx="auto"
      position="relative"
    >
      {asPath !== '/' && (
        <Link href="/">
          <ChakraLink>
            <Icon
              as={BsChevronLeft}
              fontSize="30"
              color="gray.500"
              cursor="pointer"
              position="absolute"
              display="block"
              top="40%"
              left="0"
            />
          </ChakraLink>
        </Link>
      )}

      <Link href="/">
        <ChakraLink>
          <Image src="/images/logo.svg" alt="Logo" />
        </ChakraLink>
      </Link>
    </Flex>
  );
};
