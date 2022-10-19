import React from "react";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>PROJECT PAGE!</h1>
      <h3>{router.pathname}</h3>
    </div>
  );
};

export default ProjectPage;
