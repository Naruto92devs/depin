import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import './index.css';
import ProgressBar from "./Components/ProgressBar";

function App() { 
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 100; // Update every 100ms
    const increments = duration / interval; // Number of increments
    let currentProgress = 0;
    const progressIncrement = 100 / increments; // Progress increment per interval

    const updateProgress = () => {
      currentProgress += progressIncrement;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(intervalId);
        setLoading(false);
      }
    };

    const intervalId = setInterval(updateProgress, interval);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
    
  return (
    <section className="App">
      {loading ? <ProgressBar progress={progress} / > :
      <div>
      <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
          <Footer/>
        </div>}
         
        
    </section>
  );
}

export default App;