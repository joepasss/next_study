import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/app-util";
import { EventsInterface } from "../../interfaces";

const AllEventsPage: NextPage<{ events: EventsInterface[] }> = ({ events }) => {
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ events: EventsInterface[] }>
> => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
  };
};

export default AllEventsPage;
