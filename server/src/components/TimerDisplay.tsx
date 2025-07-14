import React from 'react';

interface TimerDisplayProps {
  timerStarted: boolean;
  secondsElapsed: number | null;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timerStarted, secondsElapsed }) => {
  if (!timerStarted || secondsElapsed === null) return null;
  const elapsed = Math.floor(Date.now() / 1000) - secondsElapsed;
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  return (
    <div className="my-4 p-4 text-left bg-green-200">
      Time elapsed: {minutes}:{seconds}
    </div>
  );
};

export default TimerDisplay;
