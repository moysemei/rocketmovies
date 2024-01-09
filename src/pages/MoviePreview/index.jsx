import { Container } from './styles';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <main>

      
      <ButtonText title="Voltar" />

      <Section title="Interestellar" class="section">
      </Section>

      <FaStar class="fa-star"/>
      <FaStar class="fa-star"/>
      <FaStar class="fa-star"/>
      <FaStar class="fa-star"/>
      <FaRegStar class="fa-star"/>
      <span>Por Moyse Mei 23/05/22 às 08:00</span>
      <Tag title="Ficção Científica" />
      <Tag title="Drama" />
      <Tag title="Família" />

      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
        da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma
        que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviado mensagens codificadas atráves
        de radiação gravitacional, deixando coordenadas em binário que os levam até uma instação secreta da NASA liderada pelo professor John Brand.
        O cientista revela que um buraco de minhaco foi aberto perto de Saturno e que ele leva planetas que podem oferecer condições de sobrevivência para
        a espécie humana.
      </p>
      </main>
    </Container>
  )
}