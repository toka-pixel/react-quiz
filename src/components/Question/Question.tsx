import React, { useState } from "react";
import { QuestionsAnswersType } from "../../shared/QuestionsAnswers.type";
import { Typography, Button, Box, Snackbar, Alert } from "@mui/material";

type QuestionProps = {
  currentQuestion: number;
  setCurrentQuestion: Function;
  questions: QuestionsAnswersType;
};

const Question: React.FC<QuestionProps> = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
}) => {
  const [selected, setSelected] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (selected) {
      setCurrentQuestion((prev: number) => ++prev);
      setSelected("");
    } else {
      if (currentQuestion < questions?.length) setOpen(true);
    }
  };

  const handleSelect = (answer: string, is_true: boolean) => {
    // if(selected === answer && answer === correctAnswer ) return 'green';
    // else if(selected === answer && answer !== correctAnswer) return 'red';
    // else if(correctAnswer === answer) return 'green';
    return is_true ? "green" : "red";
  };

  const handleCheck = (answer: string, is_true: boolean) => {
    setSelected(answer);
    if (is_true) setCorrectAnswer(answer);
  };

  return (
    <Box >
      <Typography variant="h4">{questions[currentQuestion]?.text}</Typography>
      <br />
      {questions[currentQuestion]?.answers.map((answer, index) => (
        <Button
          variant="outlined"
          key={index}
          className={` ${
            selected && handleSelect(answer.text, answer.is_true)
          }`}
          onClick={() => handleCheck(answer.text, answer.is_true)}
          disabled={selected ? true : false}
          sx={{ marginBottom: "20px", width: "100%", display: "block" }}
        >
          {answer.text}
        </Button>
      ))}

      <Typography color="green" variant="h6">
        {selected && correctAnswer === selected && "your answer is correct "}
      </Typography>
      <Typography color="red" variant="h6">
        {selected && correctAnswer !== selected && "your answer is not correct"}
      </Typography>

      <Button
        onClick={handleNext}
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: "20px", width: "100%" }}
      >
        {currentQuestion < questions?.length ? "Next" : "Submit"}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          please , select answer!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Question;
