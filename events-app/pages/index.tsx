import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents, DummyEventsInterface } from "../helpers/api-util";
import Head from "next/head";

const HomePage: NextPage<{ events: DummyEventsInterface[] }> = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
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
    revalidate: 1800,
  };
};

export default HomePage;
