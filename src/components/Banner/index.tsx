import { Box, useBreakpointValue } from '@chakra-ui/react';

export const Banner = () => {
  const isBigScreen = useBreakpointValue({
    '2xl': true,
  });

  return (
    <Box
      w="100%"
      h={isBigScreen ? '500px' : '370px'}
      background="url('/images/banner.png') no-repeat"
      bgSize="cover"
      bgPosition="center"
    />
  );
};
