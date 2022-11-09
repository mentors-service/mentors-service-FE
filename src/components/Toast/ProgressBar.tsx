import { useEffect, useState } from 'react';

interface ProgressBarProps {
  time: number;
}

const ProgressBar = ({ time }: ProgressBarProps) => {
  const [temp, setTemp] = useState(time / 1000);

  useEffect(() => {
    const intervel = setInterval(() => {
      setTemp((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervel);
  }, [temp]);

  return <span>{temp}</span>;
};

export default ProgressBar;
