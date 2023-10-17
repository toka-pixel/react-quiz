import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import QuestionForm from "../Question/QuestionForm";

const QuizForm = () => {
  const [data, setData] = useState<any>({});

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id:Math.random()
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Typography variant="h4">Add New Quiz</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Title"
          defaultValue=""
          name="title"
          placeholder="quiz title"
          sx={{ width: "100%", marginBottom: "15px" }}
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
        />
        <TextField
          required
          label="Video"
          defaultValue=""
          name="url"
          placeholder="video url"
          sx={{ width: "100%", marginBottom: "15px" }}
          onChange={handleData}
        />

        <QuestionForm handleQuestionsData={(data:any)=>{console.log(data)}} />

        <Button type="submit" variant="contained" style={{width:'100%'}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QuizForm;
