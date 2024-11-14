import { Link } from "react-router-dom";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <img src="public\images\logo 1.png" alt="logo do starbucks" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
}
