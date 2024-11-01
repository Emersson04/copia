type Product = {
  id: number;
  name: string;
};

type Props = {
  products: Product[];
};

export function ProductList({ products }: Props) {
  console.log(products);
  return (
    <>
      <ul>
        {products.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
