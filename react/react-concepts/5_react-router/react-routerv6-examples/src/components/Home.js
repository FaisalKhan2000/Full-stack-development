import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the '/about' route when the button is clicked
    navigate("/about");
  };

  const handleNavigation = (steps) => {
    // Navigate forward (+1) or backward (-1) in the navigation history
    navigate(steps);
  };
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>Go to About</button>

      <button onClick={() => handleNavigation(1)}>Go Forward</button>
      <button onClick={() => handleNavigation(-1)}>Go Backward</button>
    </div>
  );
};

export default Home;
