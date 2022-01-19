import { useState } from 'react';

import { Flex, Stack } from '@chakra-ui/react';

import { Pagination } from '../Pagination';
import { Chevron } from './Chevron';
import { ContinentText } from './ContinentText';

interface Continent {
  name: string;
  description: string;
  slide_image: string;
}

interface SlideProps {
  continents: Continent[];
}

export const Slide = ({ continents }: SlideProps) => {
  const [index, setIndex] = useState(0);

  const handlePrev = (): void => {
    index === 0 ? setIndex(continents.length - 1) : setIndex(index - 1);
  };

  const handleNext = (): void => {
    index + 1 === continents.length ? setIndex(0) : setIndex(index + 1);
  };

  const handleSetIndex = (continentIndex: number): void => {
    setIndex(continentIndex);
  };

  return (
    <Flex
      maxW="1240px"
      w="100%"
      h="450px"
      background={`url(${continents[index].slide_image}) no-repeat`}
      backgroundSize="cover"
      backgroundPosition="center"
      mx="auto"
      my="50px"
      align="center"
      justify="center"
      position="relative"
    >
      <Flex align="center" justify="space-between" w="100%" px="8">
        <Chevron direction="left" handleClick={handlePrev} />

        <ContinentText
          title={continents[index].name}
          description={continents[index].description}
        />

        <Chevron direction="right" handleClick={handleNext} />
      </Flex>

      <Stack direction="row" spacing="4" position="absolute" bottom="6">
        {continents.map((_, continentIndex) => (
          <Pagination
            isCurrent={continentIndex === index}
            onClick={() => handleSetIndex(continentIndex)}
          />
        ))}
      </Stack>
    </Flex>
  );
};
