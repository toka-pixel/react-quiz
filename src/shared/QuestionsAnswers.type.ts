export type QuestionsAnswersType = {
  answer_id: number | null,
  answers: {
    id: number | null;
    is_true: boolean;
    text: string;
  }[],
  feedback_false: string,
  feedback_true: string,
  id: number ,
  text: string;
}[];
