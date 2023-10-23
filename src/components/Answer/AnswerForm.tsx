import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { AnswerType } from "../../shared/Answer.type";
import { QuizType } from "../../shared/Quiz.type";

type AnswersProps = {
  setFormData: Function;
  formData: QuizType;
  currentQuestion: number;
};

const AnswerForm: React.FC<AnswersProps> = ({
  setFormData,
  formData,
  currentQuestion,
}) => {
  const handleAddFields = () => {
    setFormData((prevData: QuizType) => {
      const updatedAnswers = [
        ...prevData.questions_answers[currentQuestion].answers,
        {
          text: "",
          id: 0,
          is_true: false,
        },
      ];

      const updatedQuestionsAnswers = [...prevData.questions_answers];
      updatedQuestionsAnswers[currentQuestion] = {
        ...updatedQuestionsAnswers[currentQuestion],
        answers: updatedAnswers,
      };
      return {
        ...prevData,
        questions_answers: updatedQuestionsAnswers,
      };
    });
  };

  const handleChangeAnswer = (answerIndex: number, event: any) => {
    const { name, value, checked } = event.target;

    setFormData((prevData: QuizType) => {
      const updatedAnswers = [
        ...prevData.questions_answers[currentQuestion].answers,
      ];
      updatedAnswers[answerIndex] = {
        ...updatedAnswers[answerIndex],
        [name]: name === "text" ? value : checked,
      };
      const updatedQuestionsAnswers = [...prevData.questions_answers];
      updatedQuestionsAnswers[currentQuestion] = {
        ...updatedQuestionsAnswers[currentQuestion],
        answers: updatedAnswers,
      };
      return {
        ...prevData,
        questions_answers: updatedQuestionsAnswers,
      };
    });
  };

  return (
    <div>
      {formData?.questions_answers[currentQuestion]?.answers.map(
        (inputField: AnswerType, index: number) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextField
              required
              label="Answer Name"
              defaultValue=""
              name="text"
              placeholder="Answer Name"
              sx={{ width: "80%", marginBottom: "15px", marginRight: "10px" }}
              value={inputField.text}
              onChange={(event) => handleChangeAnswer(index, event)}
            />

            <FormControlLabel
              control={
                <Checkbox
                  value={inputField.is_true}
                  name="is_true"
                  onChange={(event) => handleChangeAnswer(index, event)}
                />
              }
              label="is true"
            />
          </Box>
        )
      )}
      <Button
        variant="outlined"
        type="button"
        onClick={() => handleAddFields()}
        sx={{ display: "flex", justifyContent: "start", marginBottom: "15px" }}
      >
        + Add Answer
      </Button>
    </div>
  );
};

export default AnswerForm;
