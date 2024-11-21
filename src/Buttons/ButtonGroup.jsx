import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = () => {
    const handleCancel = () => {
        console.log('Cancel button clicked');
    };

    const handleSave = () => {
        console.log('Save button clicked');
    };

    return (
        <div className="button-group">
            <button className="button cancel" onClick={handleCancel}>
                Cancel
            </button>
            <button className="button save" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default ButtonGroup;