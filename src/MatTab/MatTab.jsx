import React, { useState } from 'react';
import './MatTab.css';

const MatTab = () => {
    const [selectedTab, setSelectedTab] = useState('goodFit'); // State to track selected tab

    const goodFitCount = 10; 
    const contactedCount = 10; 
    const repliedCount = 0; 

    return (
        <div className="container">
            <div className="tabs">
                <button 
                    className={`tab ${selectedTab === 'goodFit' ? 'selected' : ''}`} 
                    onClick={() => setSelectedTab('goodFit')}
                >
                    Good Fit ({goodFitCount})
                </button>
                <button 
                    className={`tab ${selectedTab === 'contacted' ? 'selected' : ''}`} 
                    onClick={() => setSelectedTab('contacted')}
                >
                    Contacted ({contactedCount})
                </button>
                <button 
                    className={`tab ${selectedTab === 'replied' ? 'selected' : ''}`} 
                    onClick={() => setSelectedTab('replied')}
                >
                    Replied ({repliedCount})
                </button>
            </div>
        </div>
    );
};

export default MatTab;