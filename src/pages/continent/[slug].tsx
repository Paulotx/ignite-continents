import { GetStaticPaths, GetStaticProps } from 'next';

import { Cities } from '../../components/Cities';
import { Content } from '../../components/Content';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

type City = {
  city: string;
  country: string;
  image: string;
  flag: string;
};

interface ContinentProps {
  continent: {
    name: string;
    bannerImage: string;
    content: {
      information: string;
      curiosities: {
        countryNumber: number;
        languageNumber: number;
        plus100Number: number;
      };
    };
    cities: City[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />

      <ContinentBanner bannerImage={continent.bannerImage} continent={continent.name} />

      <Content my="20" content={continent.content} />

      {continent.cities.length > 0 && <Cities mb="20" cities={continent.cities} />}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continents = {
    europe: {
      name: 'Europa',
      bannerImage: '/images/banner-europa.png',
      content: {
        information:
          'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
        curiosities: {
          countryNumber: 50,
          languageNumber: 60,
          plus100Number: 27,
        },
      },
      cities: [
        {
          city: 'Londres',
          country: 'Reino Unido',
          image: '/images/londres.png',
          flag: '/images/flags/england.svg',
        },
        {
          city: 'Paris',
          country: 'França',
          image: '/images/paris.png',
          flag: '/images/flags/france.svg',
        },
        {
          city: 'Roma',
          country: 'Italia',
          image: '/images/roma.png',
          flag: '/images/flags/italy.svg',
        },
        {
          city: 'Praga',
          country: 'República Tcheca',
          image: '/images/praga.png',
          flag: '/images/flags/czech_republic.svg',
        },
        {
          city: 'Amesterdã',
          country: 'Holanda',
          image: '/images/amsterda.png',
          flag: '/images/flags/netherlands.svg',
        },
      ],
    },
    america: {
      name: 'América',
      bannerImage: '/images/banner-america.jpg',
      content: {
        information:
          'A América compõe-se de duas massas de dimensões continentais (as Américas do Norte e do Sul) ligadas por um istmo (o istmo do Panamá) que é cortado por um canal (o canal do Panamá). Além dessas divisões, há os conceitos das chamadas América Central e Mesoamérica.',
        curiosities: {
          countryNumber: 35,
          languageNumber: 1061,
          plus100Number: 13,
        },
      },
      cities: [
        {
          city: 'New York',
          country: 'Estados Unidos',
          image: '/images/new-york.png',
          flag: '/images/flags/usa.png',
        },
        {
          city: 'Rio de Janeiro',
          country: 'Brasil',
          image: '/images/rio-de-janeiro.png',
          flag: '/images/flags/brazil.png',
        },
        {
          city: 'Lima',
          country: 'Peru',
          image: '/images/lima.png',
          flag: '/images/flags/peru.png',
        },
        {
          city: 'Vancouver',
          country: 'Canada',
          image: '/images/vancouver.png',
          flag: '/images/flags/canada.png',
        },
        {
          city: 'Cancun',
          country: 'Mexico',
          image: '/images/cancun.png',
          flag: '/images/flags/mexico.png',
        },
      ],
    },
    africa: {
      name: 'Africa',
      bannerImage: '/images/banner-africa.jpg',
      content: {
        information:
          'A África é conhecida pela sua pluralidade étnica e cultural, e, por meio de uma história milenar, é capaz de contar a história de toda a humanidade.',
        curiosities: {
          countryNumber: 54,
          languageNumber: 1250,
          plus100Number: 12,
        },
      },
      cities: [
        {
          city: 'Marrakech',
          country: 'Marrocos',
          image: '/images/marrakech.png',
          flag: '/images/flags/marrocos.png',
        },
        {
          city: 'Johannesburg',
          country: 'Africa do Sul',
          image: '/images/johannesburg.png',
          flag: '/images/flags/south-africa.png',
        },
        {
          city: 'Cairo',
          country: 'Egito',
          image: '/images/cairo.png',
          flag: '/images/flags/egypt.png',
        },
      ],
    },
    asia: {
      name: 'Asia',
      bannerImage: '/images/banner-asia.jpg',
      content: {
        information:
          'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
        curiosities: {
          countryNumber: 50,
          languageNumber: 2301,
          plus100Number: 33,
        },
      },
      cities: [
        {
          city: 'Hong Kong',
          country: 'China',
          image: '/images/hong-kong.png',
          flag: '/images/flags/china.png',
        },
        {
          city: 'Osaka',
          country: 'Japão',
          image: '/images/osaka.png',
          flag: '/images/flags/japan.png',
        },
        {
          city: 'St. Petersburg',
          country: 'Russia',
          image: '/images/st-petersburg.png',
          flag: '/images/flags/russia.png',
        },
        {
          city: 'Bangkok',
          country: 'Tailândia',
          image: '/images/bangkok.png',
          flag: '/images/flags/thailand.png',
        },
      ],
    },
    oceania: {
      name: 'Oceania',
      bannerImage: '/images/banner-oceania.jpg',
      content: {
        information:
          'A Oceania está localizada entre os oceanos Índico e Pacífico e é formado por milhares de ilhas de diversas extensões, desde pequenos atóis coralígenos até a Austrália, um dos maiores países do planeta.',
        curiosities: {
          countryNumber: 16,
          languageNumber: 820,
          plus100Number: 3,
        },
      },
      cities: [
        {
          city: 'Sydney',
          country: 'Australia',
          image: '/images/sydney.png',
          flag: '/images/flags/australia.png',
        },
        {
          city: 'Melbourne',
          country: 'Australia',
          image: '/images/melbourne.png',
          flag: '/images/flags/australia.png',
        },
        {
          city: 'Auckland',
          country: 'New Zealand',
          image: '/images/auckland.png',
          flag: '/images/flags/new-zealand.png',
        },
      ],
    },
    antartida: {
      name: 'Antártida',
      bannerImage: '/images/banner-antartida.jpg',
      content: {
        information:
          'Antártida é o mais meridional e o segundo menor dos continentes. É o continente mais frio, mais seco, com a maior média de altitude e de maior índice de ventos fortes do planeta. A temperatura mais baixa da Terra (-93,2 °C) foi registrada na Antártida, sendo a temperatura média na costa, durante o verão, de -10 °C; no interior do continente, é de -40 °C',
        curiosities: {
          countryNumber: 0,
          languageNumber: 0,
          plus100Number: 0,
        },
      },
      cities: [],
    },
  };

  return {
    props: { continent: continents[String(slug)] },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};
