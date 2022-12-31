import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/app-util";
import { EventsInterface } from "../../interfaces";

const FilteredEventsPage: NextPage<{
  filteredEvent: EventsInterface[] | null;
}> = ({ filteredEvent }) => {
  if (!filteredEvent) {
    return <h1>no matched result!</h1>;
  }

  return (
    <Fragment>
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{ filteredEvent: EventsInterface[] | null }>
> => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }

  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  const filteredYear = params.slug[0];
  const filteredMonth = params.slug[1];

  const year = +filteredYear;
  const month = +filteredMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        filteredEvent: null,
      },
    };
  }

  const filteredEvent = await getFilteredEvents(year, month);

  if (!filteredEvent) {
    return {
      props: {
        filteredEvent: null,
      },
    };
  }

  return {
    props: {
      filteredEvent,
    },
  };
};

export default FilteredEventsPage;
