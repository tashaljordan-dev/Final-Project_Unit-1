import { useState } from "react";

function Reminders() {
  // Load from localStorage ONCE during initial render
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });

  const [insulinLast, setInsulinLast] = useState("");
  const [syringeLast, setSyringeLast] = useState("");
  const [vetLast, setVetLast] = useState("");
  const [curveLast, setCurveLast] = useState("");

  // Save reminders to localStorage
  const saveReminders = (updated) => {
    setReminders(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));
  };

  // Helper to calculate next date
  const getNextDate = (start, days) => {
    if (!start) return "";
    const d = new Date(start);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  };

  // Add reminder card
  const addReminder = (type, lastDate, days) => {
    if (!lastDate) {
      alert("Please enter the last date first.");
      return;
    }

    const nextDate = getNextDate(lastDate, days);

    const newEntry = {
      id: Date.now(),
      type,
      lastDate,
      nextDate
    };

    const updated = [...reminders, newEntry];
    saveReminders(updated);
  };

  // Delete reminder
  const deleteReminder = (id) => {
    const updated = reminders.filter((r) => r.id !== id);
    saveReminders(updated);
  };

  return (
    <div className="reminders-box">
      <h2>Care Reminders</h2>

      {/* INSULIN REFILL */}
      <div className="auto-item">
        <label><strong>Last Insulin Refill:</strong></label>
        <input
          type="date"
          value={insulinLast}
          onChange={(e) => setInsulinLast(e.target.value)}
        />
        <button onClick={() => addReminder("Insulin Refill", insulinLast, 42)}>
          Save
        </button>
      </div>

      {/* SYRINGE REFILL */}
      <div className="auto-item">
        <label><strong>Last Syringe Refill:</strong></label>
        <input
          type="date"
          value={syringeLast}
          onChange={(e) => setSyringeLast(e.target.value)}
        />
        <button onClick={() => addReminder("Syringe Refill", syringeLast, 50)}>
          Save
        </button>
      </div>

      {/* VET CHECK-UP */}
      <div className="auto-item">
        <label><strong>Last Vet Visit:</strong></label>
        <input
          type="date"
          value={vetLast}
          onChange={(e) => setVetLast(e.target.value)}
        />
        <button onClick={() => addReminder("Vet Check-Up", vetLast, 90)}>
          Save
        </button>
      </div>

      {/* INSULIN CURVE */}
      <div className="auto-item">
        <label><strong>Last Insulin Curve:</strong></label>
        <input
          type="date"
          value={curveLast}
          onChange={(e) => setCurveLast(e.target.value)}
        />
        <button onClick={() => addReminder("Insulin Curve", curveLast, 21)}>
          Save
        </button>
      </div>

      {/* SAVED CARDS */}
      <h3>Saved Reminders</h3>

      {reminders.length === 0 ? (
        <p>No reminders saved yet.</p>
      ) : (
        <ul className="reminder-list">
          {reminders.map((r) => (
            <li key={r.id} className="reminder-card">
              <h4>{r.type}</h4>
              <p><strong>Last:</strong> {r.lastDate}</p>
              <p><strong>Next:</strong> {r.nextDate}</p>
              <button onClick={() => deleteReminder(r.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reminders;
