import React, { useEffect, useState, useRef } from "react";
import { DatesWrapper, StartDate, EndDate } from "./AnimatedYears.styled";
import { ANIMATION_INTERVAL } from "@constants";

type AnimatedYearsProps = {
  startYear: number;
  endYear: number;
};

const AnimatedYears: React.FC<AnimatedYearsProps> = ({
  startYear,
  endYear,
}) => {
  const [currentStart, setCurrentStart] = useState(startYear);
  const [currentEnd, setCurrentEnd] = useState(endYear);
  const startTimerRef = useRef<NodeJS.Timeout | null>(null);
  const endTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (startTimerRef.current) {
      clearInterval(startTimerRef.current);
    }
    if (endTimerRef.current) {
      clearInterval(endTimerRef.current);
    }

    startTimerRef.current = setInterval(() => {
      setCurrentStart((prev) => {
        if (prev === startYear) {
          if (startTimerRef.current) {
            clearInterval(startTimerRef.current);
          }
          return prev;
        }
        return prev < startYear ? prev + 1 : prev - 1;
      });
    }, ANIMATION_INTERVAL);

    endTimerRef.current = setInterval(() => {
      setCurrentEnd((prev) => {
        if (prev === endYear) {
          if (endTimerRef.current) {
            clearInterval(endTimerRef.current);
          }
          return prev;
        }
        return prev < endYear ? prev + 1 : prev - 1;
      });
    }, ANIMATION_INTERVAL);

    return () => {
      if (startTimerRef.current) {
        clearInterval(startTimerRef.current);
      }
      if (endTimerRef.current) {
        clearInterval(endTimerRef.current);
      }
    };
  }, [startYear, endYear]);

  return (
    <DatesWrapper>
      <StartDate>{currentStart}</StartDate>
      <EndDate>{currentEnd}</EndDate>
    </DatesWrapper>
  );
};

export default AnimatedYears;
