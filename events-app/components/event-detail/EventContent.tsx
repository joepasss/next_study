import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function EventContent(props: Props) {
  return <section className="event-detail__content">{props.children}</section>;
}

export default EventContent;
