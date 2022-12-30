import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { DummyEventsInterface, getAllEvents } from "../../helpers/api-util";

const AllEventsPage: NextPage<{ events: DummyEventsInterface[] }> = ({
  events,
}) => {
  return (
    <Fragment>
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
