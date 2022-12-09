import classes from "./event-summary.module.css";

interface Props {
  title: String;
}

function EventSummary(props: Props) {
  const { title } = props;

  return (
    <section className="event-detail__summary">
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
