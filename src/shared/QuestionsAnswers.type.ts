export type QuestionsAnswersType = {
  answer_id: null;
  answers: {
    id: number;
    is_true: boolean;
    text: string;
  }[];
  feedback_false: string;
  feedback_true: string;
  id: number;
  text: string;
}[];
