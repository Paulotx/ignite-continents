import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  bannerImage: string;
  continent: string;
}

export const ContinentBanner = ({ bannerImage, continent }: ContinentBannerProps) => {
  return (
    <Flex
      w="100%"
      h={['200', '400', '600']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      background={`url('${bannerImage}') no-repeat`}
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading color="white" textAlign={['center', 'left']} fontSize={['1.75rem', '5xl']}>
        {continent}
      </Heading>
    </Flex>
  );
};
