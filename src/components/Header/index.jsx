import { Container, Profile } from './styles';
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <Profile>
        <h1>RocketMovies</h1>
        
        <Input placeholder="Pesquisar pelo título"/>
        
          <div>
            <span>Moyse Mei</span>
            <a href='#'>sair</a>
          </div>
        <img
          src="https://github.com/moysemei.png"
          alt="Foto do usuário" />
      </Profile>

    </Container>
  );
}