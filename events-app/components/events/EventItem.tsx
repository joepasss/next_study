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
    <li>
      <img src={"/" + image} alt="items" />

      <div>
        <div>
          <h2>{title}</h2>
        </div>

        <div>
          <time>{readableDate}</time>
        </div>

        <div>
          <address>{formattedAddr}</address>
        </div>

        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
