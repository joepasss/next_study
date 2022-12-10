import { useRouter } from "next/router";
import { Fragment } from "react";
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from "../../components/event-detail";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId as string);

  if (!event) {
    return <p>No event Found!</p>;
  }

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

export default EventDetailPage;
