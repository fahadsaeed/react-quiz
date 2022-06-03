import StarOutline from "../../assets/StarOutline";
import { ProgressBar } from "react-bootstrap";
import StarFill from "../../assets/StarFill";
import { quiz } from "../../utils/quiz";
import "./index.scss";
import { QuestionCard } from "../QuestionCard/QuestionCard";
export default function Layout() {
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
                <span>Entertainment: Board Games</span>
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
            <QuestionCard></QuestionCard>
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
