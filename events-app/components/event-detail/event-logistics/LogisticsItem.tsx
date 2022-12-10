import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  children: ReactNode;
}

const LogisticsItem: FC<Props> = ({ icon, children }) => {
  return (
    <li className="event-logistics__list--item">
      <span className="icon">{icon}</span>
      <span className="event-logistics__list--item__contents">{children}</span>
    </li>
  );
};

export default LogisticsItem;
