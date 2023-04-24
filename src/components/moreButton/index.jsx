import React, { useState } from "react";
import "./index.css";
import { Dropdown } from "../Dropdown";

export const MoreButton = () => {
  return (
    <div>
      <div className="moreButton">
        <label className="bar" htmlFor="check">
          
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
      </div>
    </div>
  );
};
