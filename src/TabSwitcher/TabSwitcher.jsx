import React, { useState } from "react";
import "./TabSwitcher.css";
import JobDetails from "../JobDetails/JobDetails";
import Requirements from "../Requirements/Requirements";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Job Details");

  return (
    <div className="tab-switcher-container">
      <div className="tab-switcher">
        <button
          className={`tab ${activeTab === "Job Details" ? "active" : ""}`}
          onClick={() => setActiveTab("Job Details")}
        >
          Job Details
        </button>
        <button
          className={`tab ${activeTab === "Requirements" ? "active" : ""}`}
          onClick={() => setActiveTab("Requirements")}
        >
          Requirements
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Job Details" && (
          <div className="job-details-content">
            <JobDetails />
          </div>
        )}
        {activeTab === "Requirements" && (
          <div className="requirements-content">
            <Requirements/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;
