import Link from "next/link";
import React from "react";

const ClientProjectPage = () => {
  return (
    <div>
      <h1>The Projects of a Given Client</h1>

      <ul>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
        <li>
          <Link href={"/clients/123/132"}>Client/id/clientproject</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientProjectPage;
