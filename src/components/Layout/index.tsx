import { ProgressBar } from "react-bootstrap";
import StarFill from "../../assets/StarFill";
import { quiz } from "../../utils/quiz";
import "./index.scss";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useState, useMemo } from "react";
import StarOutline from "../../assets/StarOutline";

export default function Layout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any>([]);

  const next = (answer: any) => {
    setCurrentIndex(currentIndex + 1);
    const ans = [...answers];
    ans.push(!!answer);
    setAnswers(ans);
  };

  const filterAnswers = (isAnswerValid: boolean) =>
    answers.filter((item: any) => item === isAnswerValid).length;

  const percentage = ((currentIndex + 1) / quiz.length) * 100;
  return (
    <div className="layout">
      <div
        className={`body ${
          currentIndex >= quiz.length &&
          "d-flex flex-column justify-content-center"
        }`}
      >
        {currentIndex >= quiz.length ? (
          <>
            <h4 className="text-center">
              Your Score :{" "}
              {Math.floor((filterAnswers(true) / answers.length) * 100)}
            </h4>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setAnswers([]);
              }}
              className="btn btn-light w-50 mx-auto"
            >
              Test Again
            </button>
          </>
        ) : (
          <>
            <div className="layout-header-progress-bar">
              <ProgressBar now={percentage} />
            </div>
            <div className="layout-text">
              <div className="layout-header">
                <div className="question">
                  <div className="question-type">
                    <h3 className="mt-3 mb-2">
                      Question {currentIndex + 1} of {quiz.length}
                    </h3>
                    <div className="question-type mb-2">
                      <span>{quiz[currentIndex]?.category}</span>
                    </div>
                    <div className="question-rating d-flex gap-1">
                      <StarFill />
                      {quiz[currentIndex]?.difficulty === "medium" ||
                      quiz[currentIndex]?.difficulty === "hard" ? (
                        <StarFill />
                      ) : (
                        <StarOutline />
                      )}
                      {quiz[currentIndex]?.difficulty === "hard" ? (
                        <StarFill />
                      ) : (
                        <StarOutline />
                      )}
                    </div>
                  </div>
                </div>
                <div className="layout-body">
                  <QuestionCard
                    question={quiz[currentIndex]}
                    next={(ans: any) => next(ans)}
                  />
                </div>
                <div className="footer-progress-bar">
                  <div className="score">
                    <div className="current-score">
                      Score:{" "}
                      {Math.floor(
                        (filterAnswers(true) / answers.length) * 100
                      ) || 0}
                      %
                    </div>
                    <div className="max-score-estimate">
                      Max Score:{" "}
                      {100 -
                        Math.floor((filterAnswers(false) / quiz.length) * 100)}
                      %
                    </div>
                  </div>
                  <ProgressBar>
                    <ProgressBar
                      variant="success"
                      now={Math.floor(
                        (filterAnswers(true) / quiz.length) * 100
                      )}
                      key={1}
                    />
                    <ProgressBar
                      variant="warning"
                      now={Math.floor(
                        (filterAnswers(false) / quiz.length) * 100
                      )}
                      key={2}
                    />
                    {/* <ProgressBar variant="danger" now={0} key={3} /> */}
                  </ProgressBar>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
