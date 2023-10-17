import { createSlice ,PayloadAction } from "@reduxjs/toolkit";
import data from "../data.json";
import { QuizType } from "../shared/Quiz.type";

const quizList:Array<QuizType> = data;

const initialState = {
  quizList,
};

export const quizReducer = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    addQuiz: (state, action:PayloadAction<QuizType>) => {
      state.quizList.push(action.payload);
    },
  },
});

export const { addQuiz } = quizReducer.actions;
