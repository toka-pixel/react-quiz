import { AnswerType } from "./Answer.type";

export type QuestionType = {
  answer_id: number | null;
  answers: Array<AnswerType> ;
  feedback_false: string;
  feedback_true: string,
  id: number | null;
  text: string;
};
