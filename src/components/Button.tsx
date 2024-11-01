import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <>
      <button
        disabled={isLoading}
        className={`btn btn-${isLoading ? "secondary" : "primary"}`}
        onClick={onClick}
      >
        {isLoading ? "cargando..." : children}
      </button>
    </>
  );

  /* const [estado, setEstdo] = useState(true);
  const [cargando, setCargando] = useState("Hola mundo");
  const handleClick = () => {
    const aux = estado ? false : true;
    setEstdo(aux);
    const carga = estado ? "Cargando..." : "hola mundo";
    setCargando(carga);
  };

  return (
    <>
      <button
        className={`btn btn-${(estado && "primary") || "secondary"}`}
        onClick={() => handleClick()}
      >
        {cargando}
      </button>
    </>
  ); */
}

export default Button;
