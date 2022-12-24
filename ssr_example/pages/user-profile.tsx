import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import React from "react";

interface Props {
  username: string;
}

const UserProfilePage: NextPage<Props> = (props) => {
  const { username } = props;

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const { params, req, res } = context;

  return {
    props: {
      username: "joe",
    },
  };
};

export default UserProfilePage;
