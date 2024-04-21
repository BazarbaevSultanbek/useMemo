import { useMemo } from "react";

const Test = ({ userAnswers, correctAnswers }) => {

    let count = 0


    const result = useMemo(() => userAnswers.map((item, index) => { item === correctAnswers[index] ? count++ : item }, [count]))

    return (
        <div className="Test">
            <div className="container">
                <div className="Test-block">
                    <p>userAnswers: {userAnswers}</p>
                    <p>correctAnswers: {correctAnswers}</p>
                    <p>Result:{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Test;