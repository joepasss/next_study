import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/clients/123"}>Client/id</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientsPage;
