import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import "./questions.scss";

const QuestionPage = () => {
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
        <div className="question-counter absolute w-[120px] h-[120px] bg-white rounded-full flex flex-col items-center justify-center ">
            <div className="flex items-baseline">
                <div className="font-extrabold text-5xl italic">1</div>
                <div className="font-extrabold text-textSecondary">/5</div>
            </div>
        </div>
        <div className="question-content-wrapper px-6 pt-24 pb-24 h-[calc(100vh-120px)]">
          <p className="text-lg font-extrabold">
            How do you judge what should be added in the next version of the
            app?
          </p>
          <Image src={"/icons/logo.svg"} height={70} width={180} className="object-fill mx-auto max-w-[300px] h-[300px]" alt="logo" />
          <div className="mt-4 flex flex-col gap-3">
          </div>
        </div>
        <Button classes="fixed bottom-5 left-5 right-5">Next</Button>
      </div>
    </div>
  );
};

export default QuestionPage;
