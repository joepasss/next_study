import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EventContent: FC<Props> = ({ children }) => {
  return <section className="event-content">{children}</section>;
};

export default EventContent;
