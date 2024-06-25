import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { toggleDarkMode } from "./darkModeSlice";

const ToogleSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div onClick={handleClick} className="toggle-icon">
      {darkMode ? (
        <BsFillMoonStarsFill className="moon-icon" />
      ) : (
        <BsSun className="sun-icon" />
      )}
    </div>
  );
};

export default ToogleSwitch;
