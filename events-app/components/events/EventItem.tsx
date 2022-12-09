/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { DummyEventsInterface } from "../../dummy-data";
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
      <img src={"/" + image} alt="items" />

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
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className="icon">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
