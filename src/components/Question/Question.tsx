import React, { useState } from "react";
import { QuestionsAnswersType } from "../../shared/QuestionsAnswers.type";
import { Typography, Button, Box, Snackbar } from "@mui/material";

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

  const handleNext = () => {
    if (selected) {
      setCurrentQuestion((prev: number) => ++prev);
      setSelected("");
    } else {
      <Snackbar
        // anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClose={() => {}}
        message="I love snacks"
        // key={vertical + horizontal}
      />;
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
    <Box>
      <Typography variant="h4">{questions[currentQuestion]?.text}</Typography>
      <br />
      {questions[currentQuestion]?.answers.map((answer, index) => (
        <Button
          variant="outlined"
          key={index}
          className={`answer ${
            selected && handleSelect(answer.text, answer.is_true)
          }`}
          onClick={() => handleCheck(answer.text, answer.is_true)}
          disabled={selected ? true : false}
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
    </Box>
  );
};

export default Question;
