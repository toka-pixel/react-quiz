import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AnswerForm from "../Answer/AnswerForm";
import { QuestionType } from "../../shared/Question.type";

type QuestionFormProps = {
  handleQuestionsData: Function;
};

const QuestionForm: React.FC<QuestionFormProps> = ({ handleQuestionsData }) => {
  const [inputFieldsQuestion, setInputFieldsQuestion] = useState<
    QuestionType[]
  >([]);
  
  const [answersData, setAnswersData] = useState();

  const handleAddFields = () => {
    const values = [...inputFieldsQuestion];

    setInputFieldsQuestion((prev) => [
      ...prev,
      {
        answer_id: null,
        answers: answersData,
        feedback_false: "",
        feedback_true: "",
        id: null,
        text: "",
      },
    ]);
    //setInputFieldsQuestion(values);
  };

  const handleInputChange = (index: number, event: any) => {
    const { value } = event.target;
    if (value) {
      const newInputFields = inputFieldsQuestion.map((inputField, id) => {
        if (index == id) {
          return {
            ...inputField,
            text: value,
          };
        } else return inputField;
      });
      setInputFieldsQuestion(newInputFields);
    }
  };

  const handleAnswersData = (data: any) => {
    setAnswersData(data);
  };

  useEffect(() => {
    handleQuestionsData(inputFieldsQuestion);
  }, [inputFieldsQuestion]);



  return (
    <div>
      <Typography
        sx={{ display: "flex", justifyContent: "start", marginBottom: "15px" }}
        variant="h5"
      >
        Questions
      </Typography>

      {inputFieldsQuestion.map((inputField: any, index: number) => (
        <Box key={index}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "start",
              marginBottom: "15px",
            }}
            variant="h6"
          >
            Question #{index}
          </Typography>
          <TextField
            required
            label="Question Name"
            defaultValue=""
            name="text"
            placeholder="Question Name"
            sx={{ width: "100%", marginBottom: "15px" }}
            value={inputField.text}
            onChange={(event) => handleInputChange(index, event)}
          />
          <AnswerForm answersData={handleAnswersData} />
        </Box>
      ))}

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
