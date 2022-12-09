/* eslint-disable @next/next/no-img-element */
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./LogisticsItem";
import { DummyEventsInterface } from "../../dummy-data";

interface Props {
  item: DummyEventsInterface;
  imageAlt: string;
}

function EventLogistics(props: Props) {
  const { date, location, image } = props.item;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const locationText = location.replace(", ", "\n");

  return (
    <section className="event-detail__logistics">
      <div className="event-detail__logistics--image">
        <img src={`/${image}`} alt={props.imageAlt} />
      </div>
      <ul className="event-detail__logistics--list">
        <LogisticsItem icon={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon />}>
          <address>{locationText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
