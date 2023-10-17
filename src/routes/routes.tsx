import {  Routes, Route } from "react-router-dom";
import Quiz from "../components/Quiz/Quiz";
import Quizzes from "../components/Quiz/Quizzes";
import QuizForm from "../components/Quiz/QuizForm";

const RoutesApp = () => {


  return (
    <Routes>
      <Route path="/" element={<Quizzes  />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route  path='/quiz-form' element={<QuizForm />} />
    </Routes>
  );
};

export default RoutesApp;
