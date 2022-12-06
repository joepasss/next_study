/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";

interface Props {
  item: DummyEventsInterface;
}

const EventItem: FC<Props> = ({ item }) => {
  const readableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddr = item.location.replace(", ", "\n");
  const exploreLink = `/events/${item.id}`;

  return (
    <li>
      <img src={"/" + item.image} alt="" />

      <div>
        <div>
          <h2>{item.title}</h2>
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
