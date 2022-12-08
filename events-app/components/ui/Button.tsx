import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

const Button: FC<Props> = ({ link, children }) => {
  return (
    <Link href={link} className="btn">
      {children}
    </Link>
  );
};

export default Button;
