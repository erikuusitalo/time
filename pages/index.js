import React, { useState, useEffect } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-[#0F172A]">
      <div>
        <span className="mr-4">
          <span className="text-6xl dark:text-gray-50">{date.getHours()}</span>
          <span className="text-2xl dark:text-gray-50">h</span>
        </span>
        <span className="mr-4">
          <span className="text-6xl dark:text-gray-50">
            {date.getMinutes()}
          </span>
          <span className="text-2xl dark:text-gray-50">m</span>
        </span>
        <span className="mr-4">
          <span className="text-6xl dark:text-gray-50">
            {date.getSeconds()}
          </span>
          <span className="text-2xl dark:text-gray-50">s</span>
        </span>
      </div>
    </div>
  );
}
