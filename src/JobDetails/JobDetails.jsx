import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../actions/requirementsActions"; // Import action
import "./JobDetails.css";

const JobDetails = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const formData = useSelector((state) => state.formData); // Get form data from redux store

  const [formDataState, setFormDataState] = useState({
    projectName: formData.projectName || "",
    jobDescription: formData.jobDescription || "",
    jobTitle: formData.jobTitle || [],
    skillsRequired: formData.skillsRequired || [],
    location: formData.location || "",
    zipCode: formData.zipCode || "",
    miles: formData.miles || 0,
    minExperience: formData.minExperience || 0,
    maxExperience: formData.maxExperience || 0,
  });

  useEffect(() => {
    // Synchronize formData with Redux store if formData changes
    setFormDataState({
      projectName: formData.projectName || "",
      jobDescription: formData.jobDescription || "",
      jobTitle: formData.jobTitle || [],
      skillsRequired: formData.skillsRequired || [],
      location: formData.location || "",
      zipCode: formData.zipCode || "",
      miles: formData.miles || 0,
      minExperience: formData.minExperience || 0,
      maxExperience: formData.maxExperience || 0,
    });
  }, [formData]); // Triggered when formData in Redux store changes

  const jobOptions = [
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'Product Manager', label: 'Product Manager' },
    { value: 'UX/UI Designer', label: 'UX/UI Designer' },
  ];

  const skillsOptions = [
    { value: "React", label: "React" },
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "SQL", label: "SQL" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState({
      ...formDataState,
      [name]: value,
    });
    dispatch(setFormData({ [name]: value })); // Dispatch the change to Redux store
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormDataState({ ...formDataState, skillsRequired: selectedOptions });
    dispatch(setFormData({ skillsRequired: selectedOptions }));
  };

  const handleJobChange = (selectedOptions) => {
    setFormDataState({ ...formDataState, jobTitle: selectedOptions });
    dispatch(setFormData({ jobTitle: selectedOptions }));
  };

  return (
    <div className="job-details-form">
      <div className="input-group">
        <label>Project Name</label>
        <input
          type="text"
          name="projectName"
          value={formDataState.projectName}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label>Job Description</label>
        <textarea
          name="jobDescription"
          value={formDataState.jobDescription}
          onChange={handleChange}
          className="input-field job-description-input"
        />
      </div>

      <div className="input-group">
        <label>Job Title</label>
        <Select
          className="select-no-arrow"
          options={jobOptions}
          isMulti
          onChange={handleJobChange}
          value={formDataState.jobTitle}
        />
      </div>

      <div className="input-group">
        <label>Skills Required</label>
        <Select
          className="select-no-arrow"
          options={skillsOptions}
          isMulti
          onChange={handleSkillsChange}
          value={formDataState.skillsRequired}
        />
      </div>

      <div className="horizontal-row">
        <div className="input-group-horizontal">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formDataState.location}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group-horizontal">
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formDataState.zipCode}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group-horizontal">
          <label>Miles</label>
          <input
            type="number"
            name="miles"
            value={formDataState.miles}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group-horizontal">
          <label>Work Experience</label>
          <div className="work-experience">
            <input
              type="number"
              name="minExperience"
              value={formDataState.minExperience}
              onChange={handleChange}
              className="input-field half-width"
              min={0}
              max={formDataState.maxExperience}
            />
            <input
              type="number"
              name="maxExperience"
              value={formDataState.maxExperience}
              onChange={handleChange}
              className="input-field half-width"
              min={formDataState.minExperience}
              max={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
