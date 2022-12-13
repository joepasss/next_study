import React, { FC, FormEvent, RefObject, useRef } from "react";
import Button from "../ui/Button";

interface Props {
  onSearch: (selectedYear: string, selectedMonth: string) => void;
}

const EventsSearch: FC<Props> = ({ onSearch }) => {
  const yearInputRef = useRef() as RefObject<HTMLSelectElement>;
  const monthInputRef = useRef() as RefObject<HTMLSelectElement>;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current!.value;
    const selectedMonth = monthInputRef.current!.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__controls">
        <div className="form__controls--control">
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="form__controls--control">
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
