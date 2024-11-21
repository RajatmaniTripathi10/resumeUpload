import React, { useState } from 'react';
import './Recruiters.css';

const Recruiters = () => {
    const [recruiters, setRecruiters] = useState(['Josh Tender', 'Hari Priya']);

    const getCircleColor = (initials) => {
        switch (initials) {
            case 'JT':
                return '#467886';
            case 'HP':
                return '#E8B0CC';
            default:
                return '#007BFF';
        }
    };

    return (
        <div className="recruiters-container">
            <div className="h3">
                <h3>Recruiters</h3>
                <button className="add-button" onClick={() => {}}>+</button>
            </div>
            <div className="names-section">
                {recruiters.map((recruiter, index) => {
                    const initials = recruiter.split(' ').map(name => name.charAt(0)).join('');
                    const circleColor = getCircleColor(initials);
                    return (
                        <div className="recruiter-item" key={index}>
                            <div className="profile-circle" style={{ backgroundColor: circleColor }}>{initials}</div>
                            <span className="recruiter-name">{recruiter}</span>
                            <div className="menu-icon">⋮</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Recruiters;