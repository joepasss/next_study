import { FC, ReactNode } from "react";
import Link from "next/link";
import { UrlObject } from "url";

interface Props {
  link?: UrlObject;
  children: ReactNode;
  onClick?: void;
}

const Button: FC<Props> = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className="btn">
        {children}
      </Link>
    );
  }

  return (
    <button className="btn" onClick={onClick!}>
      {children}
    </button>
  );
};

export default Button;
