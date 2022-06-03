import "./QuestionCard.scss";
import {useEffect, useState} from "react";

export const QuestionCard = ({question, next}: any) => {
    const [answer, setAnswer] = useState('')
    const [options, setOptions] = useState<any>([])

    useEffect(() => {
        setAnswer('');
        const optionsValues: any[] = question ? [...question?.incorrect_answers , question?.correct_answer] : [];
        optionsValues.sort(() => Math.random() - 0.5);
        setOptions(optionsValues);
    }, [question])

    const submit = (value: any) =>{
       setAnswer(value)
    }

    return (
        <div className="question-card">
            <p>{question?.question}</p>
            <div className="options">
                {
                    options? options.map((o: string)=>{
                        return   <div className="option">
                            <button disabled={!!answer} onClick={() => submit(o)}>{o}</button>
                        </div>
                    }) : null
                }

            </div>

            {
                !!answer ?
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p>{answer === question?.correct_answer ? 'Correct!' : 'Sorry!'} </p>
                        <button onClick={() => next(answer === question?.correct_answer)}>Next Question</button>
                    </div> : null
            }


        </div>
    );
};
