import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header>
      <div className="logo">
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
