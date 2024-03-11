// import Accordion from "./components/01accordion/Accordion";
// import RandomColor from "./components/02random-color/RandomColor";
// import StarRating from "./components/03star-rating/StarRating";

import ImageSlider from "./components/04image-slider/ImageSlider";

function App() {
  return (
    <div>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color generator */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    </div>
  );
}

export default App;
