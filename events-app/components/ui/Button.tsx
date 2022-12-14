import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  if (onClick === undefined) {
    return <button className="btn">{children}</button>;
  }

  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
