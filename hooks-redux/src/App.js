import React, { useState } from 'react';
import './App.css';
import useDropdown from './useDropdown';
import useInput from './useInput';
import ThemedElement from './ThemedElement';

const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => 'dark'
});

export function useThemeContext() {
  return React.useContext(ThemeContext);
}

function App() {
  const [show, toggle] = useDropdown();
  const [show2, toggle2] = useDropdown();
  const [name, onNameChange] = useInput();
  const [occupation, onOccupationChange] = useInput();
  const context = useThemeContext();
  console.log('App', context);

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(`Hello ${name}, a ${occupation}`);
  }

  const [theme, setTheme] = useState('orange');

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <div className="App">
        <div className="Dropdown">
          <div
            className="Dropdown__header"
            onClick={toggle}
          >
            Dropdown header
          </div>
          {show && (
            <div className="Dropdown__content">
              Dropdown content
            </div>
          )}
        </div>

        <div className="Dropdown">
          <div
            className="Dropdown__header"
            onClick={toggle2}
          >
            Dropdown header 2
          </div>
          {show2 && (
            <div className="Dropdown__content">
              Dropdown content 2
            </div>
          )}
        </div>

        <ThemedElement />

        <form onSubmit={onSubmit}>
          <input onChange={onNameChange} value={name} />
          <input onChange={onOccupationChange} value={occupation} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
