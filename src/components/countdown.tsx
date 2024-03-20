import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeRemaining = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const now = new Date();
    const targetDateUTC8 = new Date(targetDate);
    targetDateUTC8.setHours(targetDate.getHours() + 8); // UTC+8 offset
    const difference = targetDateUTC8.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div suppressHydrationWarning={true} className="justify-center">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col">
          <span suppressHydrationWarning={true} className="font-black text-2xl font-cormorant">{String(timeRemaining.days).padStart(2, '0')}</span> hari
        </div>
        <div className="flex flex-col">
          <span suppressHydrationWarning={true} className="font-black text-2xl font-cormorant">{String(timeRemaining.hours).padStart(2, '0')}</span> jam
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col">
          <span suppressHydrationWarning={true} className="font-black text-2xl font-cormorant">{String(timeRemaining.minutes).padStart(2, '0')}</span> minit
        </div>
        <div className="flex flex-col">
          <span suppressHydrationWarning={true} className="font-black text-2xl font-cormorant">{String(timeRemaining.seconds).padStart(2, '0')}</span> saat
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
