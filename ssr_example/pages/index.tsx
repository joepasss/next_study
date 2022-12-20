import { GetStaticProps, GetStaticPropsResult } from "next";
import fs from "fs/promises";
import path from "path";

export default function Home(props: DataInterface) {
  const { products } = props;

  return (
    <ul>
      {products.map((product, index) => (
        <li key={`${product.id}_${index}`}>{product.title}</li>
      ))}
    </ul>
  );
}

interface DataInterface {
  products: {
    id: string;
    title: string;
  }[];
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<DataInterface>
> => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = (await fs.readFile(filePath)).toString();
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
