import { Flex, FlexProps } from '@chakra-ui/react';

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
    <Flex maxW="1240px" mx="auto" align="center" px="1rem" {...rest}>
      <Information>{information}</Information>

      <Flex flex="1" maxW="500" align="center" justify="space-evenly">
        <Curiosity heading={curiosities.countryNumber} text="países" />
        <Curiosity heading={curiosities.languageNumber} text="línguas" />
        <Curiosity heading={curiosities.plus100Number} text="cidades + 100" />
      </Flex>
    </Flex>
  );
};
