import { GetStaticProps, GetStaticPropsResult } from "next";
import fs from "fs/promises";
import path from "path";
import { DataInterface } from "../interfaces/Data";
import Link from "next/link";

export default function Home(props: DataInterface) {
  const { products } = props;

  return (
    <ul>
      {products.map((product, index) => (
        <li key={`${product.id}_${index}`}>
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<DataInterface>
> => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = (await fs.readFile(filePath)).toString();
  const data: DataInterface = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  if (!data) {
    return {
      redirect: {
        permanent: true,
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
