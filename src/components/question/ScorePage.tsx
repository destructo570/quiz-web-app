import { Question, Quiz, Submission } from "@/utils/types";
import { areArraysEqual } from "@/utils/utils";
import React, { useEffect, useMemo, useState } from "react";
import { useReward } from "react-rewards";
import ProgressBar from "../ProgressBar";

interface ScorePageProps {
  quiz: Quiz;
  submissions: Submission[];
}

const ScorePage = ({ quiz, submissions }: ScorePageProps) => {
  const [has_rewarded, setHasRewarded] = useState(false);
  const { reward } = useReward("rewardId", "confetti", {
    lifetime: 1000,
    spread: 70,
  });

  const result = useMemo(() => {
    let correct = 0;
    let incorrect = 0;

    quiz?.questions?.forEach((question: Question) => {
      const submission = submissions.find(
        (sub) => sub.question_id === question.id
      );

      let is_multiselect = question.has_multiple_answers;

      if (
        (is_multiselect &&
          areArraysEqual(submission!.answer, question.correctAnswer)) ||
        (!is_multiselect && submission!.answer === question.correctAnswer)
      ) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return {
      correct,
      incorrect,
      percentage: Math.ceil((correct / (correct + incorrect)) * 100),
    };
  }, [quiz, submissions]);

  useEffect(() => {
    if (result.percentage === 100 && !has_rewarded) {
      reward();
      setHasRewarded(true);
    }
  }, [result]);

  const renderProgress = () => {
    return (
      <ProgressBar percentage={result?.percentage}>
        <div className="flex justify-center items-center w-[300px] h-[300px] rounded-full">
          <p
            id="rewardId"
            className="font-extrabold text-6xl"
          >{`${result?.percentage}%`}</p>
        </div>
      </ProgressBar>
    );
  };

  return (
    <div className="px-4 pt-8 pb-24 flex flex-col gap-4 items-center">
      <p className="font-extrabold text-4xl">Your Result</p>
      {renderProgress()}
      <div className="bg-successSecondary px-4 py-8 w-full rounded-lg flex gap-4 items-center mt-8">
        <div className="rounded-full w-[16px] h-[16px] bg-successPrimary"></div>
        <p className="font-extrabold">{result?.correct}</p>
        <p className="text-textTertairy font-bold">Correct</p>
      </div>
      <div className="bg-errorSecondary px-4 py-8 w-full rounded-lg flex gap-4 items-center">
        <div className="rounded-full w-[16px] h-[16px] bg-errorPrimary"></div>
        <p className="font-extrabold">{result?.incorrect}</p>
        <p className="text-textTertairy font-bold">Incorrect</p>
      </div>
    </div>
  );
};

export default ScorePage;
