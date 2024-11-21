import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { setFormData } from '../actions/requirementsActions'; // Import the setFormData action
import './Requirements.css';

const Requirements = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const companyOption = [
    { value: "Google", label: "Google" },
    { value: "Microsoft", label: "Microsoft" },
    { value: "Amazon", label: "Amazon" },
    { value: "Facebook", label: "Facebook" },
    { value: "TCS", label: "TCS" },
    { value: "Coforge", label: "Coforge" }
  ];

  const industryOption = [
    { value: "IT", label: "IT" },
    { value: "Finance", label: "Finance" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Sales", label: "Sales" },
    { value: "Life Science", label: "Life Science" },
  ];

  // Handle change for text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  // Handle change for select inputs (company, industry)
  const handleSelectChange = (name) => (selectedOptions) => {
    dispatch(setFormData({ [name]: selectedOptions }));
  };

  return (
    <div className="requirements-form">
      <div className="input-group">
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleInputChange} // Handle manual input
          className="input-field degree-input"
        />
      </div>
      <div className="input-group">
        <label>University</label>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleInputChange} // Handle manual input
          className="input-field university-input"
        />
      </div>
      <div className="input-group">
        <label>Specification/Certificate</label>
        <input
          type="text"
          name="specification"
          value={formData.specification}
          onChange={handleInputChange} // Handle manual input
          className="input-field specification-input"
        />
      </div>
      <div className="input-group">
        <label>Company</label>
        <Select
          options={companyOption}
          isMulti
          value={formData.company}
          onChange={handleSelectChange("company")} // Handle multi-select change
        />
      </div>
      <div className="input-group">
        <label>Industry</label>
        <Select
          options={industryOption}
          isMulti
          value={formData.industry}
          onChange={handleSelectChange("industry")} // Handle multi-select change
        />
      </div>
      <div className="input-group">
        <label>Boolean Search</label>
        <input
          type="text"
          name="booleanSearch"
          value={formData.booleanSearch}
          onChange={handleInputChange} // Handle manual input
          className="input-field boolean-input"
        />
      </div>
    </div>
  );
};

export default Requirements;
