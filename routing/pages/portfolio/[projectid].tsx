import { useRouter } from "next/router";
import React from "react";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>PROJECT PAGE!</h1>
      <h3>{router.pathname}</h3>
      <h3>{router.query.projectid}</h3>
    </div>
  );
};

export default ProjectPage;
