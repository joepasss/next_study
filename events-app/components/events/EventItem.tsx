/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { DummyEventsInterface } from "../../helpers/api-util";
import { AddressIcon, ArrowRightIcon, DateIcon } from "../icons";
import Button from "../ui/Button";

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
  const exploreLink = { pathname: "/events/[id]", query: { id } };

  return (
    <li className="event-item">
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className="event-item__content">
        <div className="event-item__content--summary">
          <h2>{title}</h2>
        </div>

        <div className="event-item__content--date">
          <DateIcon />
          <time>{readableDate}</time>
        </div>

        <div className="event-item__content--address">
          <AddressIcon />
          <address>{formattedAddr}</address>
        </div>

        <div className="event-item__content--actions">
          <Button>
            <Link href={exploreLink}>
              <span>Explore Event</span>
              <span className="icon">
                <ArrowRightIcon />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
