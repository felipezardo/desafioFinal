import { Link } from "react-router-dom";
import * as S from "./style";
import logo from "../../assets/images/logo 1.png"

export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="logo do starbucks" />
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
