import { EventsInterface } from "../interfaces";

export const getAllEvents = async () => {
  const response = await fetch(
    `https://next-study-e4457-default-rtdb.firebaseio.com/events.json`
  );

  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getEventById = async (
  eventId: string
): Promise<EventsInterface | undefined> => {
  const response = await fetch(
    `https://next-study-e4457-default-rtdb.firebaseio.com/events/${eventId}.json`
  );

  const data = await response.json();

  if (data !== null) {
    const event: EventsInterface = {
      id: eventId,
      ...data,
    };

    return event;
  }

  return undefined;
};
