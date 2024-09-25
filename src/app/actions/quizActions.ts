import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get("/api/quiz");
    return response;
  } catch (error) {
    //Error handling
  }
};
