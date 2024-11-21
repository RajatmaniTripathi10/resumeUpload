import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../actions/requirementsActions';
import { pdfjs } from 'react-pdf';
import * as mammoth from 'mammoth'; 
import './UploadSection.css';

const UploadSection = () => {
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setLoading(true);
      setFileUploaded(true);

      if (file.type === 'application/pdf') {
        // Handle PDF files
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const pdfDoc = await pdfjs.getDocument(reader.result).promise;
            let textContent = '';
            for (let i = 0; i < pdfDoc.numPages; i++) {
              const page = await pdfDoc.getPage(i + 1);
              const pageText = await page.getTextContent();
              pageText.items.forEach((item) => {
                textContent += item.str + ' ';
              });
            }
            extractAndFillData(textContent);
          } catch (error) {
            console.error('Error reading PDF:', error);
            setLoading(false);
          }
        };
        reader.readAsArrayBuffer(file);
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // Handle DOCX files using Mammoth.js
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const arrayBuffer = reader.result;
            const { value: textContent } = await mammoth.extractRawText({ arrayBuffer });
            extractAndFillData(textContent);
          } catch (error) {
            console.error('Error reading DOCX:', error);
            setLoading(false);
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.error('Invalid file type');
        setLoading(false);
      }
    }
  };

  const extractAndFillData = (textContent) => {
    const degree = extractDegree(textContent);
    const university = extractUniversity(textContent);
    const specification = extractSpecification(textContent);
    const company = extractCompany(textContent);
    const industry = extractIndustry(textContent);
    const jobTitle = extractJobTitle(textContent);
    const skills = extractSkills(textContent); // Assuming you can extract skills

    // Dispatch all extracted data, including jobTitle and skills
    dispatch(setFormData({
      degree, university, specification, company, industry, jobTitle, skillsRequired: skills
    }));

    setLoading(false);
  };

  const extractSkills = (text) => {
    const skills = ['React', 'Java', 'Python', 'SQL'];
    return skills.filter(skill => text.includes(skill));
  };

  const extractDegree = (text) => {
    const degreeKeywords = ['B.Tech', 'M.Tech', 'Bachelor', 'Master'];
    const foundDegree = degreeKeywords.find((keyword) => text.includes(keyword));
    return foundDegree || '';
  };

  const extractUniversity = (text) => {
    const universityKeywords = ['University', 'Institute','Education'];
    const foundUniversity = universityKeywords.find((keyword) => text.includes(keyword));
    return foundUniversity || '';
  };

  const extractSpecification = (text) => {
    return text.includes('Certified') ? 'Certified' : '';
  };

  const extractCompany = (text) => {
    const companies = ['Google', 'Microsoft', 'Amazon', 'Facebook', 'TCS'];
    return companies.filter(company => text.includes(company));
  };

  const extractIndustry = (text) => {
    const industries = ['IT', 'Finance', 'Healthcare', 'Sales', 'Life Science'];
    return industries.filter(industry => text.includes(industry));
  };

  const extractJobTitle = (text) => {
    const jobTitles = ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX/UI Designer','Software Developer'];
    return jobTitles.filter(title => text.includes(title));
  };

  const handleRemoveFile = () => {
    setFileName('');
    setFileUploaded(false);
    setLoading(false);
    dispatch(setFormData({ degree: '', university: '', specification: '', company: [], industry: [], jobTitle: [], skillsRequired: [] }));
  };

  return (
    <div className="outer-section">
      <h3 className="title">Upload Ideal Candidate Resume</h3>
      <div className="inner-section">
        {fileUploaded ? (
          <>
            <p className="file-name">Uploaded: {fileName}</p>
            <button onClick={handleRemoveFile} className="remove-button">
              Remove Resume
            </button>
          </>
        ) : (
          <>
            <p>Drag and drop a file</p>
            <span>or</span>
            <label className="primary-button">
              Choose a file
              <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            </label>
          </>
        )}
        {loading && <p>Loading resume...</p>}
      </div>
    </div>
  );
};

export default UploadSection;
