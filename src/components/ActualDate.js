import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import "../styles/ActualDate.scss";

export default function ActualDate() {
  const [date, setDate] = useState(new Date());

  const timerRef = useRef(null);

  const time = date.toLocaleTimeString("en-UK");
  const day = date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="actual-date">
      <div className="date-item">
        <FontAwesomeIcon icon={faCalendarDays} /> {day}
      </div>
      <div className="date-item">/</div>
      <div className="date-item">{time}</div>
    </div>
  );
}
