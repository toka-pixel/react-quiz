import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import { useAppSelector } from "../../hooks/storeIndex";
import { QuizType } from "../../shared/Quiz.type";
import { Link, useNavigate } from "react-router-dom";

const Quizzes = () => {
  const { quizList } = useAppSelector((state) => state.quiz);
  const navigate = useNavigate();
  const addQuiz = () => {
    navigate("/quiz-form");
  };

  return (
    <Box sx={{ disply: "flex", justifyContent: "start" }}>
      <Button onClick={addQuiz} variant="contained">
        Add new Quiz
      </Button>

      <br />
      <br />
      {quizList.map((quiz: QuizType) => (
        <Link to={`/quiz/${quiz.id}`}>
          <Card
            variant="elevation"
            sx={{ wifth: "100%", marginBottom: "10px"}}
          >
            <CardContent>
              <Typography variant="h4">{quiz.title}</Typography>
              <Typography>{quiz.description}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default Quizzes;
