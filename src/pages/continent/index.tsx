import { Cities } from '../../components/Cities';
import { Content } from '../../components/Content';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

export default function Continent() {
  return (
    <>
      <Header />

      <ContinentBanner />

      <Content my="20" />

      <Cities mb="20" />
    </>
  );
}
