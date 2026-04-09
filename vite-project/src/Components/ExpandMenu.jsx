import { useState } from "react";
import "./ExpandMenu.css";

function ExpandMenu({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expand-menu">
      <button 
        className="expand-header"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && (
        <div className="expand-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandMenu;
