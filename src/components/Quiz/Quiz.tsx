import { useAppSelector } from "../../hooks/storeIndex";
import { QuizType } from "../../shared/Quiz.type";
import { QuestionsAnswersType } from "../../shared/QuestionsAnswers.type";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Question from "../Question/Question";
import { useState } from "react";

const Quiz = () => {
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const quiz = useAppSelector((state) =>
    state.quiz.quizList.find(
      (quiz: QuizType) => quiz.id === parseInt(id as string)
    )
  );

  return (
    <div>
      {quiz && (
        <>
          <Typography variant="h2" color="">
            {quiz?.title}
          </Typography>

          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={quiz?.questions_answers as QuestionsAnswersType}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
