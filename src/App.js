import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserInput from "./pages/UserInput";
import Display from "./pages/Display";
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {(document.title = "Peek")}, [])

  return (     
    <div>
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/userinput" element={<UserInput />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
