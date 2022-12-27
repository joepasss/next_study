import {
  GetStaticPaths,
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
import { getAllEvents } from "../../dummy-data";
import { DummyEventsInterface, getEventById } from "../../helpers/api-util";

const EventDetailPage: NextPage<{ event: DummyEventsInterface }> = ({
  event,
}) => {
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
): Promise<GetStaticPropsResult<{ event: DummyEventsInterface }>> => {
  const { params } = context;
  const event = await getEventById(params!.eventId as string);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event: event,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPropsContext
): Promise<GetStaticPathsResult<{}>> => {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailPage;
