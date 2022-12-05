import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        {router.query.id} {router.query.clientprojectid}
      </h1>

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
