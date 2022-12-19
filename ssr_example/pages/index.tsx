import { GetServerSideProps, GetServerSidePropsResult } from "next";

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

export const getStaticProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<DataInterface>
> => {
  return {
    props: {
      products: [{ id: "p1", title: "Product1" }],
    },
  };
};
