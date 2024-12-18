import { useState } from "react";
import * as S from "./style";
import copaolaranja from "../../assets/images/laranja2x.png"
import copinhoLaranja from "../../assets/images/laranja 3.png"
import copaovermelho from "../../assets/images/vermelho2x 1.png"
import copinhoVemelho from "../../assets/images/vermelho 1.png"
import copaoamarelo from "../../assets/images/amarelo 1.png"
import copinhoAmarelo from "../../assets/images/amarelo2x 1.png"

export default function Home() {

  
  // Estado para armazenar a cor do círculo e a imagem do copo
  const [corCirculo, setCorCirculo] = useState("#037143"); // Cor padrão
  const [imagemCopo, setImagemCopo] = useState(copaolaranja); // Imagem padrão

  const mudaCopo = (cor, imagem) => {
    setCorCirculo(cor);
    setImagemCopo(imagem);
  };

  return (
    <S.Home $corCirculo={corCirculo}>
      <section>
        <div className="texto">
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span>Starbucks</span>
          </h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>SAIBA MAIS</button>
        </div>
             
      </section>
       {/* Div circulo com cor dinâmica */}
      <div className="circulo" >
            <img className="copo" src={imagemCopo} alt="Copo" />
        </div>  

        {/* Ao clicar nos copinhos muda o copão e a cor do circulo de fundo */}
      <div className="copinhos">
            <img className="laranja" src={copinhoLaranja} alt="" onClick={() => mudaCopo("#037143", copaolaranja)} />
            <img className="vermelho" src={copinhoVemelho} alt=""  onClick={() => mudaCopo("#97090C", copaovermelho)} />
            <img className="amarelo" src={copaoamarelo} alt=""  onClick={() => mudaCopo("#DECD13", copinhoAmarelo)}/>

        </div>
    </S.Home>
  );
}
