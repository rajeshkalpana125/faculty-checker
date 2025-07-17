import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const timetable = {
  RS: {
    Monday: ["9:00-10:00", "1:00-2:00"],
    Tuesday: ["10:00-11:00"],
    Wednesday: [],
    Thursday: ["11:00-12:00"],
    Friday: ["9:00-10:00"],
  },
  SP: {
    Monday: ["10:00-11:00"],
    Tuesday: ["1:00-2:00"],
    Wednesday: ["11:00-12:00"],
    Thursday: ["9:00-10:00"],
    Friday: [],
  },
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
      <input placeholder="Faculty Short Name" onChange={(e) => setShortName(e.target.value)} /><br /><br />
      <input placeholder="Day (e.g., Monday)" value={day} onChange={(e) => setDay(e.target.value)} /><br /><br />
      <input placeholder="Time Slot (e.g., 9:00-10:00)" onChange={(e) => setTime(e.target.value)} /><br /><br />
      <button onClick={checkAvailability}>Check</button>
      <div style={{ marginTop: 20 }}>Status: {status}</div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
