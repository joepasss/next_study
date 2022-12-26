import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import React from "react";

interface Props {
  userId: string;
}

const UserIdPage: NextPage<Props> = (props) => {
  return <h1>{props.userId}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const { query } = context;

  if (query === undefined) {
    return {
      notFound: true,
    };
  }

  const userId = query.uid;

  return {
    props: {
      userId: `userid-${userId}`,
    },
  };
};

export default UserIdPage;
