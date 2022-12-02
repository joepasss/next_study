import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  return (
    <div>
      <h1>The Portfolio Page</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/portfolio/list"}>List</Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioPage;
