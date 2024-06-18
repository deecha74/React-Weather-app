import React, { useRef, useState } from "react";
import "./scripts.js";
import "./quiz.css";
import { data } from "../../assets/data.js";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let options = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.ans === ans) {
        e.target.classList.add("Correct");
        setLock(true);
        setScore((pre) => pre + 1);
      } else {
        e.target.classList.add("Wrong");
        setLock(true);
        options[question.ans - 1].current.classList.add("Correct");
      }
    }
  };
  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex((pre) => pre + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      options.map((option) => {
        option.current.classList.remove("Correct");
        option.current.classList.remove("Wrong");
        return null;
      });
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <>
      <div className="App flex items-center justify-center flex-col  p-1 h-lvh">
        <h1 className=" bg-green-200 relative p-3 m-1 w-1/2 flex items-center justify-center font- ">
          Simple quiz{" "}
          <span className="absolute -right-3 -top-3 animate-bounce bg-yellow-300 rounded-full p-1 h-8 flex items-center justify-center w-8">
            <h1>{score} </h1>
          </span>
        </h1>

        <hr />
        {result ? (
          <>
            <h2>Your Result </h2>
            You scored {score} out of {data.length}
            <button onClick={reset} className="p-2 rounded-md bg-green-700">
              Reset
            </button>
          </>
        ) : (
          <>
            <div className=" Quiz h-auto w-1/2 bg-gray-200 shadow-md p-2">
              <h1 className="Question flex items-center justify-center p-3 text-xl bg-gray-300 rounded-md mb-3">
                {index + 1}.{questions.question}
              </h1>
              <div className="Answer flex items-center justify-center flex-col ">
                <button
                  ref={option1}
                  onClick={(e) => {
                    checkAns(e, 1);
                  }}
                  className="btn p-2 mb-1 bg-green-100 w-full mx-1   transition-all ease-in-out duration-100 hover:text-white uppercase rounded-md hover:scale-95 active:scale-90"
                >
                  {questions.option1}
                </button>
                <button
                  ref={option2}
                  onClick={(e) => {
                    checkAns(e, 2);
                  }}
                  className="btn p-2 mb-1 bg-green-100 w-full mx-1  transition-all ease-in-out duration-100 hover:text-white uppercase rounded-md hover:scale-95 active:scale-90"
                >
                  {questions.option2}
                </button>
                <button
                  ref={option3}
                  onClick={(e) => {
                    checkAns(e, 3);
                  }}
                  className="btn p-2 mb-1 bg-green-100 w-full mx-1   transition-all ease-in-out duration-100 hover:text-white uppercase rounded-md hover:scale-95 active:scale-90"
                >
                  {questions.option3}
                </button>
                <button
                  ref={option4}
                  onClick={(e) => {
                    checkAns(e, 4);
                  }}
                  className="btn p-2 mb-1 bg-green-100 w-full mx-1   transition-all ease-in-out duration-100 hover:text-white uppercase rounded-md hover:scale-95 active:scale-90"
                >
                  {questions.option4}
                </button>
              </div>
              <div className="w-full flex flex-col items-center justify-end py-5">
                <button
                  onClick={next}
                  className="Next p-2 mb-1 bg-red-500 mx-1 hover:bg-red-600 transition-all ease-in-out duration-100 hover:text-white uppercase rounded-md hover:scale-95 active:scale-90"
                >
                  Next
                </button>

                <h1>
                  {index + 1} out of {data.length} Questions
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
