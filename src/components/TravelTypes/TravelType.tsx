import { Flex, Image, Text } from '@chakra-ui/react';

interface TravelTypeProps {
  src: string;
  alt: string;
  title: string;
}

export const TravelType = ({ src, alt, title }: TravelTypeProps) => {
  return (
    <Flex direction="column" align="center">
      <Image src={src} alt={alt} />
      <Text as="span" fontSize="lg" fontWeight="600" mt="6">
        {title}
      </Text>
    </Flex>
  );
};
