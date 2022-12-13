import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter.</p>;
  }

  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No Event found for the chosen filter!</p>;
  }

  return (
    <Fragment>
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export default FilteredEventsPage;
