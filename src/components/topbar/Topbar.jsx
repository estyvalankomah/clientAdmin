import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">E-GATE ADMIN</span>
        </div>
        <div className="topRight">
          <div className="search">
            <input type="text"/>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
