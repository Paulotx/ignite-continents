import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Icon } from '@chakra-ui/react';

interface ChevronProps {
  direction: string;
  handleClick: () => void;
}

export const Chevron = ({ direction, handleClick }: ChevronProps) => {
  return (
    <Icon
      as={direction === 'left' ? BsChevronLeft : BsChevronRight}
      fontSize="40"
      color="yellow.500"
      cursor="pointer"
      onClick={handleClick}
    />
  );
};
