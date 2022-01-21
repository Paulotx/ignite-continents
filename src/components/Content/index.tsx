import { Flex, FlexProps, Icon } from '@chakra-ui/react';

import { Curiosity } from './Curiosity';
import { Information } from './Information';

interface ContentProps extends FlexProps {
  content: {
    information: string;
    curiosities: {
      countryNumber: number;
      languageNumber: number;
      plus100Number: number;
    };
  };
}

export const Content = ({ content, ...rest }: ContentProps) => {
  const { information, curiosities } = content;

  return (
    <Flex
      maxW="1240px"
      direction={{ base: 'column', md: 'column', lg: 'row' }}
      mx="auto"
      align="center"
      px="1rem"
      {...rest}
    >
      <Information
        mr={{ base: '0', md: '0', lg: '70' }}
        w={{ base: '100%', md: '100%', lg: '600px' }}
      >
        {information}
      </Information>
      <Flex
        flex="1"
        w={{ base: '100%', md: '500px' }}
        px="0.5rem"
        align="center"
        mt={{ base: '10', md: '10', lg: '0' }}
        justify={{ base: 'space-between', md: 'space-evenly' }}
      >
        <Curiosity heading={curiosities.countryNumber} text="países" />
        <Curiosity heading={curiosities.languageNumber} text="línguas" />
        <Curiosity heading={curiosities.plus100Number} text="cidades + 100" haveInfo />
      </Flex>
    </Flex>
  );
};
