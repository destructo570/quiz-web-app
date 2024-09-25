import Image from "next/image";
import React, { useMemo, useState } from "react";
import Button from "../button/Button";
import "./questions.scss";
import { Quiz, Submission } from "@/utils/types";
import QuestionContainer from "./QuestionContainer";
import ScorePage from "./ScorePage";

interface QuestionPageProps {
  quiz: Quiz | null;
  submissions: Submission[];
  saveSubmission: (submission: Submission) => void;
  resetSubmissions: () => void;
}

const QuestionPage = ({
  quiz,
  submissions = [],
  saveSubmission,
  resetSubmissions,
}: QuestionPageProps) => {
  const questions = quiz?.questions || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [show_score_page, setShowScorePage] = useState(false);

  const currQuestion = useMemo(
    () => questions?.[currentQuestion],
    [currentQuestion, questions]
  );

  const currSubmission = useMemo(
    () =>
      submissions?.find(
        (submission) => submission.question_id === currQuestion?.id
      ),
    [currQuestion?.id, JSON.stringify(submissions)]
  );

  let is_last_question = useMemo(
    () => currentQuestion === questions?.length - 1,
    [currentQuestion, questions?.length]
  );

  const onNextClick = () => {
    if (currentQuestion + 1 < questions?.length && !is_last_question) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (is_last_question) {
      setShowScorePage(true);
    }
  };

  const resetQuiz = () => {
    resetSubmissions();
    setCurrentQuestion(0);
    setShowScorePage(false);
  };

  return (
    <div className="bg-secondaryAccent">
      <Image
        src={"/icons/confetti.svg"}
        height={70}
        width={180}
        className="w-full h-[120px] object-cover"
        alt="logo"
      />
      <div className="bg-white  rounded-t-3xl relative">
        {show_score_page ? (
          <ScorePage quiz={quiz} submissions={submissions} />
        ) : (
          <QuestionContainer
            currentQuestion={currentQuestion}
            questions={questions}
            currSubmission={currSubmission}
            currQuestion={currQuestion}
            saveSubmission={saveSubmission}
          />
        )}
        <Button
          classes="fixed bottom-5 left-5 right-5"
          onClick={show_score_page ? resetQuiz : onNextClick}
          disabled={
            !currSubmission?.answer ||
            (currQuestion.has_multiple_answers &&
              !currSubmission?.answer?.length)
          }
        >
          {show_score_page ? "Start Again" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default QuestionPage;
