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
import {
  DummyEventsInterface,
  getEventById,
  getFeaturedEvents,
} from "../../helpers/api-util";

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
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPropsContext
): Promise<GetStaticPathsResult<{}>> => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default EventDetailPage;
