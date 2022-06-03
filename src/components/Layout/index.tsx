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

  // useMemo(() => {
  // }, [answers]);
  const filterAnswers = (isAnswerValid: boolean) =>
    answers.filter((item: any) => item === isAnswerValid).length;

  const percentage = ((currentIndex + 1) / quiz.length) * 100;
  // console.log("answers", answers);
  return (
    <div className="layout">
      <div className="body">
        <div className="layout-header-progress-bar">
          <ProgressBar now={percentage} />
        </div>
        <div className="layout-text">
          <div className="layout-header">
            <div className="question">
              <div className="question-title">
                <h3>
                  Question {currentIndex + 1} of {quiz.length}
                </h3>
              </div>
              <div className="question-type">
                <span>{quiz[currentIndex]?.category}</span>
              </div>
              <div className="question-rating">
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
            ></QuestionCard>
          </div>
          <div className="footer-progress-bar">
            <div className="score">
              <div className="current-score">
                Score:{" "}
                {Math.floor((filterAnswers(true) / answers.length) * 100) || 0}%
              </div>
              <div className="max-score-estimate">
                Max Score:{" "}
                {100 - Math.floor((filterAnswers(false) / quiz.length) * 100)}%
              </div>
            </div>
            <ProgressBar>
              <ProgressBar
                variant="success"
                now={Math.floor((filterAnswers(true) / quiz.length) * 100)}
                key={1}
              />
              <ProgressBar
                variant="warning"
                now={Math.floor((filterAnswers(false) / quiz.length) * 100)}
                key={2}
              />
              {/* <ProgressBar variant="danger" now={0} key={3} /> */}
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
}
