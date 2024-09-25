import { Submission } from "@/utils/types";
import axios from "axios";

export const fetchQuizData = async (quiz_id: number) => {
  try {
    const response = await axios.get(`/api/quiz/${quiz_id}`);
    return response;
  } catch (error) {
    //Error handling
  }
};

export const updateUserSubmission = async (quiz_id: number, submission: Submission) => {
  try {
    const response = await axios.put(`/api/quiz/${quiz_id}`, submission);
    return response;
  } catch (error) {
    //Error handling
  }
};
