import QuizForm from "../QuizForm";
import { fireEvent } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import { MemoryRouter } from "react-router-dom";


describe("quiz form", () => {
  test("render quiz form correctly", () => {
    render(
      <MemoryRouter>
        <QuizForm />
      </MemoryRouter>
    );

    const inputTitle = screen.getByPlaceholderText(/quiz title/i);
    const inputDescription = screen.getByPlaceholderText(/quiz description/i);
    const inputVideo = screen.getByPlaceholderText(/video url/i);

    expect(inputTitle).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(inputVideo).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(
      <MemoryRouter>
        <QuizForm />
      </MemoryRouter>
    );
    const inputTitle = screen.getByPlaceholderText(
      /quiz title/i
    ) as HTMLInputElement;


    fireEvent.change(inputTitle, { target: { value: "react quiz" } });
    expect(inputTitle.value).toBe("react quiz");
  });

  it("submit button ", () => {
    render(
      <MemoryRouter>
        <QuizForm />
      </MemoryRouter>
    );
   
    const buttonElement = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(buttonElement);
  });
});
