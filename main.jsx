import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const timetable = {
  RS: {
    Monday: ["10:40-11:30", "13:10-14:00"],
    Tuesday: ["09:50-10:40"],
    Thursday: ["11:30-12:20"],
    Friday: ["09:00-09:50"]
  },
  SP: {
    Monday: ["10:40-11:30", "12:20-13:10"],
    Wednesday: ["11:30-12:20"],
    Thursday: ["09:00-09:50"]
  }
};

function App() {
  const [shortName, setShortName] = useState("");
  const [day, setDay] = useState("Monday");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const checkAvailability = () => {
    const schedule = timetable[shortName.toUpperCase()];
    if (!schedule) {
      setStatus("Faculty not found.");
      return;
    }
    const isBusy = schedule[day]?.includes(time);
    setStatus(isBusy ? "Engaged in class" : "Free");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Faculty Availability Checker</h1>
      <input placeholder="Faculty Short Name (e.g., RS)" onChange={(e) => setShortName(e.target.value)} /><br /><br />
      <input placeholder="Day (e.g., Monday)" value={day} onChange={(e) => setDay(e.target.value)} /><br /><br />
      <input placeholder="Time Slot (e.g., 10:40-11:30)" onChange={(e) => setTime(e.target.value)} /><br /><br />
      <button onClick={checkAvailability}>Check</button>
      <div style={{ marginTop: 20 }}>Status: {status}</div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
