import { Box, Button, TextField, Typography } from "@mui/material";
import AnswerForm from "../Answer/AnswerForm";
import { QuestionType } from "../../shared/Question.type";
import { QuizType } from "../../shared/Quiz.type";

type QuestionFormProps = {
  setFormData: Function;
  formData: QuizType;
};

const QuestionForm: React.FC<QuestionFormProps> = ({
  setFormData,
  formData,
}) => {
  const handleAddFields = () => {
    setFormData((prevData: QuizType) => {
      const updatedQuestions = [...prevData.questions_answers];
      return {
        ...prevData,
        questions_answers: [
          ...updatedQuestions,
          {
            answer_id: 0,
            answers: [
              {
                id: 0,
                is_true: false,
                text: "",
              },
            ],
            feedback_false: "",
            feedback_true: "",
            id: Math.random(),
            text: "",
          },
        ],
      };
    });
  };

  const handleChangeQuestion = (questionIndex: number, event: any) => {
    const { value } = event.target;

    setFormData((prevData: QuizType) => {
      const updatedQuestions = [...prevData.questions_answers];
      updatedQuestions[questionIndex].text = value;

      return {
        ...prevData,
        questions_answers: updatedQuestions,
      };
    });
  };

  return (
    <div>
      <Typography
        sx={{ display: "flex", justifyContent: "start", marginBottom: "15px" }}
        variant="h5"
      >
        Questions
      </Typography>

      {formData?.questions_answers.length > 0 &&
        formData?.questions_answers?.map(
          (inputField: QuestionType, index: number) => (
            <Box key={index}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: "15px",
                }}
                variant="h6"
              >
                Question 
              </Typography>
              <TextField
                required
                label="Question Name"
                name="text"
                sx={{ width: "100%", marginBottom: "15px" }}
                value={inputField.text}
                onChange={(event) => handleChangeQuestion(index, event)}
              />
              <AnswerForm
                currentQuestion={index}
                formData={formData}
                setFormData={setFormData}
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
        + Add Question
      </Button>
    </div>
  );
};

export default QuestionForm;
