import StarFill from "../../assets/StarFill";
import StarOutline from "../../assets/StarOutline";
import "./index.scss";
import { quiz} from "../../utils/quiz";
import {QuestionCard} from "../QuestionCard/QuestionCard";
export default function Layout() {
  return (
    <div className="layout">
      <div className="body">
        <div className="layout-header">
          <div className="layout-header-progress-bar"></div>
          <div className="question">
            <div className="question-title">
              <h3>Question 16 of 20</h3>
            </div>
            <div className="question-type">
              <span>Entertainment: Board Games</span>
            </div>
            <div className="question-rating">
              <StarFill />
              <StarOutline />
              <StarFill />
            </div>
          </div>
        </div>
        <div className="layout-body">
          <QuestionCard></QuestionCard>
        </div>
      </div>
    </div>
  );
}
