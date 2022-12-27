import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React from "react";
import EventList from "../components/events/EventList";
import { DummyEventsInterface } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage: NextPage<{ events: DummyEventsInterface[] }> = (props) => {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ events: DummyEventsInterface[] }>
> => {
  const featuredEvents: DummyEventsInterface[] = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
