import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export default function Home(props: DataInterface) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
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
