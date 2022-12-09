import { ReactNode } from "react";
import classes from "./logistics-item.module.css";

interface Props {
  icon: ReactNode;
  children: ReactNode;
}

function LogisticsItem(props: Props) {
  return (
    <li className="event-detail__logistics--list__item">
      <span className="icon">{props.icon}</span>
      <span className="event-detail__logistics--list__item--content">
        {props.children}
      </span>
    </li>
  );
}

export default LogisticsItem;
