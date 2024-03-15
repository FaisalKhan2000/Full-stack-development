import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star-rating.css";

/*
1. create a star rating component which accept a prop (no of stars)
2. create 2 useStates which are rating and hover
3. set the index to index += 1 since, index starts with 0
4. create onClick, onMouseEnter, onMouseLeave
5. create 3 methods handleClick, handleMouseEnter, handleMouseLeave, all of which accepts index as parameter
6. take getCurrentIndex as paramtere in each of the methods
7. create a className with conditon className={index <= (hover || rating) ? "active" : "inactive"}, which colors the stars on the following condition
8. for handleClick => setRating(getCurrenIndex) , handleMouseEnter => setHover(getCurrentIndex) and handleMouseLeave => setHover(rating)
*/

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
