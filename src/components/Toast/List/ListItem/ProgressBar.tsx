import { useEffect, useState } from 'react';

interface ProgressBarProps {
  time: number;
}

const ProgressBar = ({ time }: ProgressBarProps) => {
  const [timer, setTimer] = useState(time / 1000);

  useEffect(() => {
    const intervel = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervel);
  }, [timer]);

  return <span>{timer}</span>;
};

export default ProgressBar;
