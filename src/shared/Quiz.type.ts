import { QuestionsAnswersType } from "./QuestionsAnswers.type";

export type QuizType = {
  description: string;
  id:  number;
  questions_answers: QuestionsAnswersType;
  score: null;
  title: string;
  url: string;
};
