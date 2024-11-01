/* import Card from "./components/Card";
import Titulo from "./components/Titulo";
import { CardBady } from "./components/Card";
import { List } from "./components/List";
import { useState } from "react"; */
import { ProductList } from "./components/ProductList";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Iphone",
    },
  ]);

  // agrega un nuevo objeto de ultimo en la lista
  const handleClink = () => {
    const newProduct = { id: 1 + product.length, name: "Samsung" };
    setProduct([...product, newProduct]);
  };

  // agrega un nuevo elemeno
  const handleClickOne = () => {
    const newProduct = { id: 1 + product.length, name: "Kevin" };
    setProduct([newProduct, ...product]);
  };

  const handleLimpliarArray = () => {
    setProduct([]);
  };

  return (
    <>
      <Button onClick={handleClink}>Agregar de ultimo</Button>
      <Button onClick={handleClickOne}>Primer elemento</Button>
      <Button onClick={handleLimpliarArray}>Primer elemento</Button>

      <ProductList products={product} />
    </>
  );
}

export default App;

/*  <Titulo />
      <Card>
        <CardBady title="sdsd" text="ds">
          <Button onClick={handleAddMinions}>Añadir</Button>
          <Button onClick={handleDeleteMinion}>Delete</Button>
          {contenido}
          <Button isLoading={cargando} onClick={handleClick}>
            hola
          </Button>
        </CardBady>
      </Card> */

/*   const [cargando, setCargando] = useState(false);
  const handleClick = () => setCargando(!cargando);

  const [data, setList] = useState<string[]>([
    "goku",
    "vegueta",
    "Gohan",
    "Goten",
  ]);

  const handleselect = (elemento: string) => {
    alert(elemento);
  };

  const handleAddMinions = () => {
    setList([...data, "emersson"]);
  };

  const handleDeleteMinion = () => {
    console.log(data.slice(0, -1));
    setList(data.slice(0, -1));
  };

  const contenido = data.length ? (
    <List data={data} onselect={handleselect} />
  ) : (
    "hola mundo desde esta joda"
  );
 */
