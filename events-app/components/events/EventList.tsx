import React, { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";
import EventItem from "./EventItem";

interface Props {
  items: DummyEventsInterface[];
}

const EventList: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((event, index) => (
        <EventItem key={`event-list__${index}`} item={event} />
      ))}
    </ul>
  );
};

export default EventList;
