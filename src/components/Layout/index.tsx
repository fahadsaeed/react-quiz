import StarOutline from "../../assets/StarOutline";
import { ProgressBar } from "react-bootstrap";
import StarFill from "../../assets/StarFill";
import { quiz } from "../../utils/quiz";
import "./index.scss";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import {useState} from "react";

export default function Layout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any>([]);

  const next = (answer: any) =>{
    setCurrentIndex((currentIndex + 1));
    const ans = [...answer];
    ans.push(!!answer);
    setAnswers(ans);
  }


  return (
    <div className="layout">
      <div className="body">
        <div className="layout-header-progress-bar">
          <ProgressBar now={75} />
        </div>
        <div className="layout-text">
          <div className="layout-header">
            <div className="question">
              <div className="question-title">
                <h3>Question 16 of 20</h3>
              </div>
              <div className="question-type">
                <span>{quiz[currentIndex]?.category}</span>
              </div>
              <div className="question-rating">
                <StarFill />
                <StarFill />
                {/* <StarOutline /> */}
                <StarFill />
              </div>
            </div>
          </div>
          <div className="layout-body">
            <QuestionCard question={quiz[currentIndex]} next={(ans: any) => next(ans)}></QuestionCard>
          </div>
          <div className="footer-progress-bar">
            <ProgressBar>
              <ProgressBar variant="success" now={67} key={1} />
              <ProgressBar variant="warning" now={8} key={2} />
              <ProgressBar variant="danger" now={12} key={3} />
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
}
