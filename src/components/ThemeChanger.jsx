import React, { useState, useEffect } from "react";
// Style Sheet import
import "../styles/ThemeChanger.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <section className="ThemeChanger">
      <div>
        <label htmlFor="theme-toggle" className="labelname">
          Theme
        </label>
        <label className="switch" htmlFor="theme-toggle">
          <input
            id="theme-toggle"
            type="checkbox"
            onChange={handleThemeChange}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </section>
  );
};

export default ThemeChanger;
