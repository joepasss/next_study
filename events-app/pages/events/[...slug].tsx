import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredDate = router.query.slug;

  if (!filteredDate) {
    return <p className="center">Loading ...</p>;
  }

  const filteredYear = filteredDate[0];
  const filteredMonth = filteredDate[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <h1>INVALID FILTER</h1>;
  }

  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });

  return (
    <Fragment>
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export default FilteredEventsPage;
