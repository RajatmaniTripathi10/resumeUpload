import React from 'react';
import './App.css';
import Header from './Header/Header';
import TabSwitcher from './TabSwitcher/TabSwitcher';
import UploadSection from './UploadSection/UploadSection';
import Clients from './Client/Clients';
import Recruiters from './Recruiters/Recruiters';
import MatTab from './MatTab/MatTab';
import ButtonGroup from './Buttons/ButtonGroup';

function App() {
  return (
    <>
      <Header/>
      <div className="main-container">
        <TabSwitcher />
        <div className="right-section">
          <UploadSection />
          <Clients />
          <Recruiters className="recruiters-container"/>
          <MatTab className="mattab-container"/>
          <ButtonGroup/>
        </div>
      </div>
    </>
  );
}

export default App;