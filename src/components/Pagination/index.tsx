import { Box, BoxProps } from '@chakra-ui/react';

interface PaginationProps extends BoxProps {
  isCurrent?: boolean;
}

export function Pagination({ isCurrent = false, ...rest }: PaginationProps) {
  if (isCurrent) {
    return (
      <Box
        w="4"
        h="4"
        borderRadius="full"
        bgColor="yellow.500"
        disabled
        _disabled={{
          bgColor: 'yellow.500',
          cursor: 'default',
        }}
        {...rest}
      />
    );
  }

  return (
    <Box
      w="4"
      h="4"
      bgColor="gray.100"
      cursor="pointer"
      borderRadius="full"
      _hover={{ bg: 'yellow.500' }}
      {...rest}
    />
  );
}
