import React, { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";
import EventItem from "./EventItem";

interface Props {
  items: DummyEventsInterface[];
}

const EventList: FC<Props> = ({ items }) => {
  return (
    <ul className="event-list">
      {items.map((event, index) => (
        <EventItem key={`event-item__${event.id}--${index}`} item={event} />
      ))}
    </ul>
  );
};

export default EventList;
