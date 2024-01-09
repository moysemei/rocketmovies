import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">Voltar</a>
            <h1>Novo filme</h1>
          </header>

          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </Section>
          <div className='buttons'>
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}