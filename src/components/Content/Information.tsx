import { ReactNode } from 'react';

import { Box, BoxProps, Text } from '@chakra-ui/react';

interface InformationProps extends BoxProps {
  children: ReactNode;
}

export const Information = ({ children, ...rest }: InformationProps) => {
  return (
    <Box w={[200, 400, 600]} {...rest}>
      <Text textAlign="justify" fontSize={['lg', 'xl', 'xl', '2xl']} color="gray.700">
        {children}
      </Text>
    </Box>
  );
};
