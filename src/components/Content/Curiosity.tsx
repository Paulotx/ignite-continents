import { FiInfo } from 'react-icons/fi';

import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Flex, Heading, Icon, Text, Tooltip } from '@chakra-ui/react';

interface CuriosityProps {
  heading: number;
  text: string;
  haveInfo?: boolean;
}

export const Curiosity = ({ heading, text, haveInfo = false }: CuriosityProps) => {
  return (
    <Flex direction="column" align="center">
      <Heading color="yellow.500" fontSize="5xl">
        {heading}
      </Heading>

      <Flex align="center">
        <Text fontWeight="600" fontSize="xl">
          {text}
        </Text>
        {haveInfo && (
          <Tooltip
            hasArrow
            placement="top"
            label="Cidades entre as 100 mais visitadas do mundo."
          >
            <InfoOutlineIcon ml="1" fontSize="15" color="gray.400" />
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};
