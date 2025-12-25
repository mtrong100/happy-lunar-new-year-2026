import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Lunar New Year 2026: February 17, 2026
const LUNAR_NEW_YEAR_2026 = new Date("2026-02-17T00:00:00");

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = LUNAR_NEW_YEAR_2026.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Ngày", labelVI: "Days" },
    { value: timeLeft.hours, label: "Giờ", labelVI: "Hours" },
    { value: timeLeft.minutes, label: "Phút", labelVI: "Minutes" },
    { value: timeLeft.seconds, label: "Giây", labelVI: "Seconds" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="countdown-card flex flex-col items-center w-[150px] h-[150px] md:w-[230px] md:h-[230px] animate-float justify-center"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <span className="countdown-number text-4xl md:text-6xl lg:text-7xl font-display font-bold gold-text lg:leading-relaxed">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-foreground/80 text-sm md:text-base font-medium mt-2 tracking-wider uppercase">
            {unit.label}
          </span>
          <span className="text-accent/60 text-sm md:text-base font-body">
            {unit.labelVI}
          </span>
        </div>
      ))}
    </div>
  );
};
