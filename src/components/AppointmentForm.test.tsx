import { fireEvent, render, screen } from "@testing-library/react";
import AppointmentForm from "./AppointmentForm";

describe("AppointmentForm", () => {
  it("submits the form with correct data", () => {
    render(<AppointmentForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);

    fireEvent.change(nameInput, {
      target: { value: "John Doe" },
    });
    fireEvent.change(dateInput, {
      target: { value: "2022-01-01" },
    });
    fireEvent.change(timeInput, {
      target: { value: "14:00" },
    });
    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/date/i)).toHaveValue("2022-01-01");
    expect(screen.getByLabelText(/time/i)).toHaveValue("14:00");
  });

  it("resets the form when reset button is clicked", () => {
    render(<AppointmentForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2022-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "14:00" },
    });
    fireEvent.click(screen.getByText(/reset/i));

    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/date/i)).toHaveValue("");
    expect(screen.getByLabelText(/time/i)).toHaveValue("");
  });
});
