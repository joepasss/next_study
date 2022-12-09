import { FC, ReactNode } from "react";
import Link from "next/link";
import { UrlObject } from "url";

interface Props {
  link: UrlObject;
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
