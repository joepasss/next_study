import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import path from "path";
import fs from "fs/promises";
import React, { Fragment } from "react";
import { DataInterface } from "../interfaces/Data";
import { ExtractArrayType } from "../interfaces/UtilityType";

interface Props {
  loadedProduct: ExtractArrayType<DataInterface["products"]>;
}

const ProductDetailPage: NextPage<Props> = ({ loadedProduct }) => {
  if (!loadedProduct) {
    return <p>Loading ...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = (await fs.readFile(filePath)).toString();
  const data: DataInterface = JSON.parse(jsonData);

  return data;
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const { params } = context;

  if (params === undefined) {
    return { notFound: true };
  }

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find(
    (product: ExtractArrayType<DataInterface["products"]>) =>
      product.id === productId
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const data = await getData();

    const ids = data.products.map((product) => product.id);

    const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

    return {
      paths: pathsWithParams,
      fallback: true,
    };
  };

export default ProductDetailPage;
