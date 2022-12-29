import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { Fragment } from "react";
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "../../components/event-detail";
import { getAllEvents, getEventById } from "../../helpers/app-util";
import { EventsInterface } from "../../interfaces";

const EventDetailPage: NextPage<{ event: EventsInterface }> = ({ event }) => {
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics item={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<{}>> => {
  const { params } = context;

  if (params === undefined) {
    return {
      notFound: true,
    };
  }

  const event = await getEventById(params.eventId as string);

  if (event === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult<{}>> => {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailPage;
