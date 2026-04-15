import { useState, useEffect } from "react";
import "./Reminders.css";

function BGCurve() {
  const [curveData, setCurveData] = useState([]);

  // Load saved curve data
  useEffect(() => {
    const savedCurveData = localStorage.getItem("curveData");
    if (savedCurveData) {
      setCurveData(JSON.parse(savedCurveData));
    }
  }, []);

  // Add a new BG reading
  const addCurveEntry = () => {
    const reading = prompt("Enter blood sugar reading (mg/dL):");
    if (!reading) return;

    const entry = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
      bloodSugar: reading
    };

    const updated = [...curveData, entry];
    setCurveData(updated);
    localStorage.setItem("curveData", JSON.stringify(updated));
  };

  // Start a brand new curve (delete all old data)
  const startNewCurve = () => {
    const confirmReset = window.confirm(
      "Start a new curve? This will delete all previous readings."
    );
    if (!confirmReset) return;

    setCurveData([]);
    localStorage.removeItem("curveData");
  };

  // Download CSV
  const downloadCSV = () => {
    const header = "Date,Time,Blood Sugar\n";
    const rows = curveData
      .map((e) => `${e.date},${e.time},${e.bloodSugar}`)
      .join("\n");

    const csv = header + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "insulin_curve_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="curve-box">
      <h2>Blood Glucose Curve</h2>

      <button onClick={addCurveEntry}>Add BG Reading</button>
      <button onClick={downloadCSV}>Download Curve Data</button>
      <button onClick={startNewCurve}>Start New Curve</button>

      {curveData.length > 0 ? (
        <ul className="curve-list">
          {curveData.map((entry, index) => (
            <li key={index}>
              {entry.date} — {entry.time} — {entry.bloodSugar} mg/dL
            </li>
          ))}
        </ul>
      ) : (
        <p>No readings yet.</p>
      )}
    </div>
  );
}

export default BGCurve;
