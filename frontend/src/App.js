import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArtQuestionComponent from './components/ArtQuestionComponent';
import HistoryQuestionComponent from './components/HistoryQuestionComponent';
import ScienceQuestionComponent from './components/ScienceQuestionComponent';
import WordGuesserComponent from './components/WordGuesserComponent';
import FactsComponent from './components/FactsComponent';
import RPSComponent from './components/RPSComponent';
import './App.css';
import NavBar from './components/NavBarComponent';

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/art" element={<ArtQuestionComponent />}/>
      <Route path="/history" element={<HistoryQuestionComponent />} />  
      <Route path="/science" element={<ScienceQuestionComponent />} />  
      <Route path="/rps" element={<RPSComponent />} />  
      <Route path="/wordguesser" element={<WordGuesserComponent />} />  
      <Route path="/facts" element={<FactsComponent />} /> 
    </Routes>
    </Router>

  );
}

export default App;
