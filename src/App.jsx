import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {

  const currenttheme = localStorage.getItem('currenttheme')
  const [theme, setTheme] = useState(currenttheme? currenttheme : 'light'); // Initializes theme state with 'light'

  useEffect(()=>{
    localStorage.setItem('currenttheme',theme)
  })


  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} /> {/* Passes theme and setTheme as props to Navbar */}
    </div>
  );
};

export default App;
