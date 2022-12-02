import Link from "next/link";
import React from "react";

const SelectedClientProjectPage = () => {
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>

      <ul>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
        <li>
          <Link href={"/clients/123"}>Client/id</Link>
        </li>
      </ul>
    </div>
  );
};

export default SelectedClientProjectPage;
