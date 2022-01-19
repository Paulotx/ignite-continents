import { ReactNode } from 'react';

import { Box, Text } from '@chakra-ui/react';

interface InformationProps {
  children: ReactNode;
}

export const Information = ({ children }: InformationProps) => {
  return (
    <Box w={[200, 400, 600]} mr="70">
      <Text textAlign="justify" fontSize={['lg', 'xl', 'xl', '2xl']} color="gray.700">
        {children}
      </Text>
    </Box>
  );
};
