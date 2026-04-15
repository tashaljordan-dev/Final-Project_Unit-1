import { useState } from "react";

function Reminders() {
  // Load from localStorage 
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });

  const [insulinLast, setInsulinLast] = useState("");
  const [syringeLast, setSyringeLast] = useState("");
  const [vetLast, setVetLast] = useState("");
  const [curveLast, setCurveLast] = useState("");

  const saveReminders = (updated) => {
    setReminders(updated);
    localStorage.setItem("reminders", JSON.stringify(updated));
  };

  const getNextDate = (start, days) => {
    if (!start) return "";
    const d = new Date(start);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  };

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

  const deleteReminder = (id) => {
    const updated = reminders.filter((r) => r.id !== id);
    saveReminders(updated);
  };

  return (
    <div className="reminders-wrapper">
      {/* LEFT COLUMN — INPUTS */}
      <div className="reminders-left">
        <h2>Care Reminders</h2>
<h3>Care Guidelines</h3>

<p>Insulin refills should be done every 42 days after the insulin bottle has been punctured.</p>
<hr />

<p>Syringe refills should be done every 50 days. I typically refill when I am on my last package to avoid having to reuse needles.</p>
<hr />

<p>Vet check-ups should be done at least 2–3 times a year.</p>
<hr />

<p>Blood glucose curves should be done every 3–6 months for stable, controlled dogs. A curve involves taking BG measurements every 1–2 hours for 12–24 hours. This is to monitor insulin effectiveness and detect potential hypoglycemia.</p>
<hr />

    

        <div className="auto-item">
          <label><strong>Last Insulin Refill:</strong></label>
          <input type="date" value={insulinLast} onChange={(e) => setInsulinLast(e.target.value)} />
          <button onClick={() => addReminder("Insulin Refill", insulinLast, 42)}>Save</button>
        </div>

        <div className="auto-item">
          <label><strong>Last Syringe Refill:</strong></label>
          <input type="date" value={syringeLast} onChange={(e) => setSyringeLast(e.target.value)} />
          <button onClick={() => addReminder("Syringe Refill", syringeLast, 50)}>Save</button>
        </div>

        <div className="auto-item">
          <label><strong>Last Vet Visit:</strong></label>
          <input type="date" value={vetLast} onChange={(e) => setVetLast(e.target.value)} />
          <button onClick={() => addReminder("Vet Check-Up", vetLast, 90)}>Save</button>
        </div>

        <div className="auto-item">
          <label><strong>Last Insulin Curve:</strong></label>
          <input type="date" value={curveLast} onChange={(e) => setCurveLast(e.target.value)} />
          <button onClick={() => addReminder("Insulin Curve", curveLast, 21)}>Save</button>
        </div>
      </div>

      {/* RIGHT COLUMN — SAVED CARDS */}
      <div className="reminders-right">
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
    </div>
  );
}

export default Reminders;
