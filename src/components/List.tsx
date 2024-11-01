import { useState } from "react";

// se recibe unos datos que son arreglos de string
type props = {
  data: string[];
  onselect?: (list: string) => void;
};

//
export function List({ data, onselect }: props) {
  const [index, setIndex] = useState(-1); //

  const handleClik = (i: number, elemento: string) => {
    setIndex(i);

    // se esta gestionando el estado del elemento
    // y con onselect
    onselect?.(elemento);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((list, i) => (
          <li
            onClick={() => handleClik(i, list)}
            key={list + i}
            className={`list-group-item ${index == i ? "active" : ""}`}
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

// la interface se puede remplazar por "type"
