import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // load data

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "joe", clientprojectid: "projectA" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>

      <ul>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
        <button onClick={loadProjectHandler}>Load ProjectA</button>
      </ul>
    </div>
  );
};

export default ClientProjectPage;
