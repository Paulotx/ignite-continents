import { Flex, FlexProps } from '@chakra-ui/react';

import { Curiosity } from './Curiosity';
import { Information } from './Information';

type ContentProps = FlexProps;

export const Content = ({ ...rest }: ContentProps) => {
  return (
    <Flex maxW="1240px" mx="auto" align="center" px="1rem" {...rest}>
      <Information>
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
        península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela
        divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar
        Negro a sudeste.
      </Information>

      <Flex flex="1" maxW="500" align="center" justify="space-evenly">
        <Curiosity heading="50" text="países" />
        <Curiosity heading="60" text="línguas" />
        <Curiosity heading="27" text="cidades + 100" />
      </Flex>
    </Flex>
  );
};
