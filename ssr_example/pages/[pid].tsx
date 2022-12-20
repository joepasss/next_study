import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";
import { DataInterface } from ".";

type FilterArray<T> = T extends (infer U)[] ? U : T;
interface Props {
  loadedProduct: FilterArray<DataInterface["products"]>;
}

const ProductDetailPage: NextPage<Props> = ({ loadedProduct }) => {
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const { params } = context;

  if (params === undefined) {
    return { notFound: true };
  }

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = (await fs.readFile(filePath)).toString();
  const data = JSON.parse(jsonData);

  const product = data.products.find(
    (product: FilterArray<DataInterface["products"]>) =>
      product.id === productId
  );

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    return {
      paths: [
        { params: { pid: "p1" } },
        { params: { pid: "p2" } },
        { params: { pid: "p3" } },
      ],
      fallback: false,
    };
  };

export default ProductDetailPage;
