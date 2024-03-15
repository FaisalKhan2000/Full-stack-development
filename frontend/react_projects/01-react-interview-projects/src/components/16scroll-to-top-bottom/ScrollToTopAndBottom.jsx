import { useRef } from "react";
import useFetch from "../14use-fetch/useFetch";

function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "http://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (pending) {
    return <h1>Loading ! Please wair</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Scroll to Top and Bottom Features</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.title}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the section</h3>
    </div>
  );
}

export default ScrollToTopAndBottom;
