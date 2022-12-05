import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <div>
      <h1>The List Page</h1>

      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
