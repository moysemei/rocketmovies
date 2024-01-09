import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { MyMovies } from '../../components/MyMovies';

export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
      <Button title="+ Adicionar filme" />

      <Section title="Meus filmes">
        <MyMovies/>
        <MyMovies/>
        <MyMovies/>
      </Section>

        </Content>
      </main>
    </Container>
  )
}