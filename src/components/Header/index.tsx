import Link from 'next/link';

import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex align="center" justify="center" w="100%" h="100px">
      <Link href="/">
        <ChakraLink>
          <Image src="/images/logo.svg" alt="Logo" />
        </ChakraLink>
      </Link>
    </Flex>
  );
};
