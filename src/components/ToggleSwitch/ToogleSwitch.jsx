import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { toggleDarkMode } from "../../common/apis/Features/darkModeSlice";
import "./ToogleSwitch.scss";

const ToogleSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div onClick={handleClick} className="toggle-icon">
      {darkMode ? (
        <BsSun className="sun-icon" />
      ) : (
        <BsFillMoonStarsFill className="moon-icon" />
      )}
    </div>
  );
};

export default ToogleSwitch;
