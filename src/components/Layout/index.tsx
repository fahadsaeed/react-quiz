import StarFill from "../../assets/StarFill";
import StarOutline from "../../assets/StarOutline";
import "./index.scss";
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
          <p>
            At the start of a standard game of the Monopoly, if you throw a
            double six, which square would you land on?
          </p>
          <div className="options">
            <div className="option">
              <button>Electric Company</button>
            </div>
            <div className="option">
              <button>Water Works</button>
            </div>
            <div className="option">
              <button>Chance</button>
            </div>
            <div className="option">
              <button>Community Chest</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
