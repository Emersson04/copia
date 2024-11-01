import { ReactNode } from "react";

// se define el tipo de dato que va a recibir
interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  const width = {
    width: "390px",
  };

  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

/* Componente CardBady */

interface CardBadyProps {
  title: string;
  text?: string;
  children: ReactNode;
}

export function CardBady(props: CardBadyProps) {
  const { title, text, children } = props;

  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <div>{children}</div>
    </>
  );
}

// react funiciona con objetos
// fragment => fragmentos => busca fragmentar el codigo para que sea mas legible
//<></> => con esta etiqueta fragmentamos el codigo
