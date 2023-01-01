import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import {
  DummyEventsInterface,
  getFilteredEvents,
} from "../../helpers/api-util";

const FilteredEventsPage: NextPage<{
  filteredEvent: DummyEventsInterface[];
  year: number;
  month: number;
}> = ({ filteredEvent, year, month }) => {
  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`All events for ${year}/${month}.`} />
      </Head>
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    filteredEvent: DummyEventsInterface[];
    year: number;
    month: number;
  }>
> => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }

  const filteredDate = params.slug;

  if (!filteredDate) {
    return {
      notFound: true,
    };
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

  const filteredEvent = await getFilteredEvents(numYear, numMonth);

  return {
    props: {
      year: numYear,
      month: numMonth,
      filteredEvent,
    },
  };
};

export default FilteredEventsPage;
