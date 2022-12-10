/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { DummyEventsInterface } from "../../../dummy-data";
import { AddressIcon, DateIcon } from "../../icons";
import LogisticsItem from "./LogisticsItem";

interface Props {
  item: DummyEventsInterface;
}

const EventLogistics: FC<Props> = ({ item }) => {
  const readableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const locationText = item.location.replace(", ", "\n");

  return (
    <section className="event-logistics">
      <div className="event-logistics__image">
        <img src={`/${item.image}`} alt={item.title} />
      </div>

      <ul className="event-logistics__list">
        <LogisticsItem icon={<DateIcon />}>
          <time>{readableDate}</time>
        </LogisticsItem>

        <LogisticsItem icon={<AddressIcon />}>
          <address>{locationText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
