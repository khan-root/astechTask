import React, { useState, useEffect, useRef } from "react";

// Counter Props
interface CounterProps {
  number: number;
}

const Counter: React.FC<CounterProps> = ({ number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    const duration = 2000; // Duration in milliseconds
    const increment = end / (duration / 50); // Update every 50ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={counterRef}>
      <span className="text-white text-[5rem] font-semibold">{count}</span>
    </div>
  );
};

export default Counter;
