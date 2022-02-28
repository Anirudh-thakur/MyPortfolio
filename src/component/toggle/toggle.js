import sun from "../moon.png"
import moon from "../sun.png"
import React from 'react';
import {themes } from '../context.js'
import ThemeContext from '../context.js'
import './toggle.css'
const Toggle = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className="t"> 
      <img className="t-icon" src={sun} alt=""></img>
      <img className = "t-icon" src={moon} alt=""></img>
      <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div style = {{left:darkMode ? 25 : 0}}
            color="link"
            className = "t-button"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
              </div>
            )}
          </ThemeContext.Consumer>

      </div>
      
  )
}
export default Toggle