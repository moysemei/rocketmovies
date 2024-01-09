import { Container } from './styles';
import { Tag } from '../Tag';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export function MyMovies() {
  return(
    <Container>
      <h1>Interestellar</h1>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA,<br/> tem uma 
        fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </p>

      <Tag title="Ficção Científica" />
      <Tag title="Drama" />
      <Tag title="Família" />
    </Container>
  )
}