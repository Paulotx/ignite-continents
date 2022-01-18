import { Box, useBreakpointValue } from '@chakra-ui/react';

interface BannerProps {
  bgImage: string;
}

export const Banner = ({ bgImage }: BannerProps) => {
  const isBigScreen = useBreakpointValue({
    xl: false,
    '2xl': true,
  });

  return (
    <Box
      w="100%"
      h={isBigScreen ? '500px' : '370px'}
      background={`url('${bgImage}') no-repeat`}
      bgSize="cover"
      bgPosition="center"
    />
  );
};
