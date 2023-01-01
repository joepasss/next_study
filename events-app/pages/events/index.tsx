import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { DummyEventsInterface, getAllEvents } from "../../helpers/api-util";

const AllEventsPage: NextPage<{ events: DummyEventsInterface[] }> = ({
  events,
}) => {
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ events: DummyEventsInterface[] }>
> => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
