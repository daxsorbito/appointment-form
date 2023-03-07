import React, { useState } from "react";

function AppointmentForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="App">
      <h1 className="AppointmentForm__header">Schedule an appointment</h1>
      <form
        method="post"
        className="AppointmentForm"
        onSubmit={(event) => {
          console.log("Submitted!");
          event.preventDefault();
        }}
      >
        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="name">
            Name:
          </label>
          <input
            value={name}
            className="AppointmentForm__input"
            name="name"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="date">
            Date:
          </label>
          <input
            value={date}
            className="AppointmentForm__input"
            name="date"
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="time">
            Time:
          </label>
          <input
            value={time}
            className="AppointmentForm__input"
            name="time"
            type="time"
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
        </div>

        <div className="AppointmentForm__div AppointmentForm__div--btns">
          <button className="AppointmentForm__button" type="reset">
            Reset
          </button>
          <button className="AppointmentForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
