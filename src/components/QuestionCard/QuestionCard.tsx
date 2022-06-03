import "./QuestionCard.scss";
import {useState} from "react";

export const QuestionCard = ({question}: any) => {
    const [answer, setAnswer] = useState('')
    const options: any[] = question ? [...question?.incorrect_answers , question?.correct_answer] : [];
    const shuffle = (array: any[]) => {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(options);

    const submit = (value: any) =>{
       setAnswer(value)
    }

    return (
        <div className="question-card">
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
    );
};
