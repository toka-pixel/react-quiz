import AnswerForm from "../AnswerForm";
import { render, screen, fireEvent } from "../../../test-utils";
import { InitialQuizObj } from "../../Quiz/InitialQuizObj";

const mockedFun = jest.fn();


describe("answer form", () => {
  test("render answer form  correctly", () => {
    render(
      <AnswerForm
        setFormData={mockedFun}
        currentQuestion={0}
        formData={InitialQuizObj}
      />
    );

    const addAnswer = screen.getByRole("button", { name: /\+ Add Answer/i });
    fireEvent.click(addAnswer);
    const answerName = screen.getByRole("textbox");
    const checkbox = screen.getByRole("checkbox");
    expect(answerName).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
