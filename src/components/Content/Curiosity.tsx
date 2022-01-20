import { Flex, Heading, Text } from '@chakra-ui/react';

interface CuriosityProps {
  heading: number;
  text: string;
}

export const Curiosity = ({ heading, text }: CuriosityProps) => {
  return (
    <Flex direction="column" align="center">
      <Heading color="yellow.500" fontSize="5xl">
        {heading}
      </Heading>
      <Text fontWeight="600" fontSize="xl">
        {text}
      </Text>
    </Flex>
  );
};
