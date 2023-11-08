import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import QuestionForm from "../Question/QuestionForm";
import { QuizType } from "../../shared/Quiz.type";
import { addQuiz } from "../../store/quizSlice";
import { useAppDispatch } from "../../hooks/storeIndex";
import { InitialQuizObj } from "./InitialQuizObj";
import { useNavigate } from "react-router-dom";

const QuizForm = () => {
  const [formData, setFormData] = useState<QuizType>(InitialQuizObj);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 10),
    });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addQuiz(formData));
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4">Add New Quiz</Typography>
      <br />
      <form onSubmit={handleSubmitForm}>
        <TextField
          required
          label="Title"
          defaultValue=""
          name="title"
          placeholder="quiz title"
          sx={{ width: "100%", marginBottom: "15px" }}
          value={formData.title}
          onChange={handleData}
        />

        <TextField
          required
          label="Description"
          defaultValue=""
          name="description"
          placeholder="quiz description"
          sx={{ width: "100%", marginBottom: "15px" }}
          multiline
          minRows={5}
          onChange={handleData}
          value={formData.description}
        />
        <TextField
          required
          label="Video"
          defaultValue=""
          name="url"
          placeholder="video url"
          sx={{ width: "100%", marginBottom: "15px" }}
          value={formData.url}
          onChange={handleData}
        />

        <QuestionForm setFormData={setFormData} formData={formData} />

        <Button role="button" type="submit" variant="contained" style={{ width: "100%" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QuizForm;
