export interface DummyEventsInterface {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export const getAllEvents = async (): Promise<DummyEventsInterface[]> => {
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

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};
