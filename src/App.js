import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import Content from './layout/content/Content';
import Nav from './layout/navbar/Nav';
import ChatContainer from './layout/chat/ChatContainer';
import Chat from './layout/chat/Chat';
import Responsive from './response/Responsive';
import ProgressBar from './progress-bar/ProgressBar';
import GotoSection from './goto-section/GotoSection';
import Test from './test/Test';
// import StepForm from './step-form/StepForm';
import StepForm from './step-form-validation/StepForm';

export default function App() {
  return (
    <Router>
      {/* <Responsive /> */}
      {/* <ProgressBar /> */}
      {/* <GotoSection /> */}
      <StepForm />
    </Router>
  );
}
