import { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";

interface Props {
  title: DummyEventsInterface["title"];
}

const EventSummary: FC<Props> = ({ title }) => {
  return (
    <div className="event-summary">
      <h1>{title}</h1>
    </div>
  );
};

export default EventSummary;
