import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React from "react";
import EventList from "../components/events/EventList";
import { getAllEvents } from "../helpers/app-util";
import { EventsInterface } from "../interfaces";

const HomePage: NextPage<{ events: EventsInterface[] }> = ({ events }) => {
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ events: EventsInterface[] }>
> => {
  const events: EventsInterface[] = await getAllEvents();

  return {
    props: {
      events,
    },
  };
};

export default HomePage;
