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
          <span className="text-6xl dark:text-gray-50">
            {String(date.getHours()).padStart(2, "0")}:
            {String(date.getMinutes()).padStart(2, "0")}:
            {String(date.getSeconds()).padStart(2, "0")}
          </span>
        </span>
      </div>
    </div>
  );
}
