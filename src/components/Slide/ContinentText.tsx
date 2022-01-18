import { Flex, Heading, Text } from '@chakra-ui/react';

interface ContinentTextProps {
  title: string;
  description: string;
}

export const ContinentText = ({ title, description }: ContinentTextProps) => {
  return (
    <Flex direction="column" align="center">
      <Heading as="h2" color="white" fontSize="5xl">
        {title}
      </Heading>
      <Text color="white" fontSize="xl" mt="4" fontWeight="600">
        {description}
      </Text>
    </Flex>
  );
};
