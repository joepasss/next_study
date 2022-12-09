/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";

interface Props {
  item: DummyEventsInterface;
}

const EventItem: FC<Props> = ({ item }) => {
  const { id, title, description, location, date, image, isFeatured } = item;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddr = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className="event-item">
      <img src={"/" + image} alt="items" />

      <div className="event-item__content">
        <div className="event-item__content--summary">
          <h2>{title}</h2>
        </div>

        <div className="event-item__content--date">
          <time>{readableDate}</time>
        </div>

        <div className="event-item__content--address">
          <address>{formattedAddr}</address>
        </div>

        <div className="event-item__content--actions">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
