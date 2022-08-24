import React, {useEffect, useState} from 'react';
import {BsMoonFill} from 'react-icons/bs';
import {FiSun} from 'react-icons/fi';
import {themeSwitcher} from '../utils/themeSwitcher';

const ThemeSetter = () => {
  const curretnTheme = localStorage.getItem('theme');
  const [selectedTheme, setSelectedTheme] = useState(curretnTheme || 'dark');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'dark' ? 'retro' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('theme', selectedTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', selectedTheme);
    themeSwitcher();
  }, [selectedTheme]);

  return (
    <div>
      <button
        className="active:scale-90 hover:text-primary hover:scale-110 text-xl"
        onClick={handleThemeChange}
      >
        {selectedTheme === 'dark' ? <FiSun /> : <BsMoonFill />}
      </button>
    </div>
  );
};

export default ThemeSetter;
