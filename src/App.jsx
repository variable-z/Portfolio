import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScreenSaver from "./components/ScreenSaver/ScreenSaver"; // Import the ScreenSaver component
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the ScreenSaver page */}
        <Route path="/screensaver" element={<ScreenSaver />} />

        {/* Route for the main app (Home, Navbar, etc.) */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Redirect to /screensaver by default */}
        <Route path="/" element={<Navigate to="/screensaver" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
