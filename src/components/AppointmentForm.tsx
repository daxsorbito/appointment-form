import { useReducer } from "react";

interface FormData {
  name: string;
  date: string;
  time: string;
}

type Action = { type: string; payload: string } | { type: "RESET" };

const reducer = (state: FormData, action: Action): FormData => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "RESET":
      return {} as FormData;
    default:
      throw new Error("Invalid action type");
  }
};

function AppointmentForm() {
  const [formData, dispatch] = useReducer(reducer, {
    name: "",
    date: "",
    time: "",
  } as FormData);

  function handleChange(value: string, fieldName: string) {
    dispatch({
      type: fieldName.toUpperCase(),
      payload: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("Submitted!");
    event.preventDefault();
    // alert(JSON.stringify(formData));
  }

  return (
    <div className="App">
      <h1 className="AppointmentForm__header">Schedule an appointment</h1>
      <form method="post" className="AppointmentForm" onSubmit={handleSubmit}>
        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            value={formData.name}
            className="AppointmentForm__input"
            name="name"
            type="text"
            title="name"
            aria-label="name"
            onChange={(event) => {
              handleChange(event.target.value, "NAME");
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="date">
            Date:
          </label>
          <input
            id="date"
            value={formData.date}
            className="AppointmentForm__input"
            name="date"
            type="date"
            title="date"
            onChange={(event) => {
              handleChange(event.target.value, "DATE");
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="time">
            Time:
          </label>
          <input
            id="time"
            value={formData.time}
            className="AppointmentForm__input"
            name="time"
            type="time"
            title="time"
            onChange={(event) => {
              handleChange(event.target.value, "TIME");
            }}
          />
        </div>

        <div className="AppointmentForm__div AppointmentForm__div--btns">
          <button
            className="AppointmentForm__button"
            type="reset"
            onClick={() => dispatch({ type: "RESET" })}
          >
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
