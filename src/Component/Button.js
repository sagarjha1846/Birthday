import React from "react";
import { Link } from "react-router-dom";
function Button() {
  return (
    <div>
      <div className="field">
        <button>
          <Link to="/birth" style={{ textDecoration: "none", color: "white" }}>
            Add Birthday
          </Link>
        </button>
        <button>Clear All</button>
      </div>
    </div>
  );
}

export default Button;
