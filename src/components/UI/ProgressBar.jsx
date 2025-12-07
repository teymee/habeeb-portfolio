import React, { useEffect, useState } from "react";

export default function ProgressBar({ setActive, durationTime, clipNotes }) {
  const [timeLeft, setTimeLeft] = useState(durationTime);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (timeLeft <= 0) {
      setActive((prevState) => {
        let nextState = prevState + 1;
        return clipNotes.length - 1 < nextState ? 0 : nextState;
      });
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft]);

  useEffect(() => {
    const progressMade = (timeLeft / durationTime) * 100;
    setProgress(progressMade);
  }, [timeLeft, durationTime]);

  return (
    <div className="w-full h-[2px]">
      <div
        className="h-full bg-black"
        style={{
          width: `${progress}%`,
          transition: "width 1s linear",
        }}
      ></div>
    </div>
  );
}
