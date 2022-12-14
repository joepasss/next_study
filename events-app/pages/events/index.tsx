import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
