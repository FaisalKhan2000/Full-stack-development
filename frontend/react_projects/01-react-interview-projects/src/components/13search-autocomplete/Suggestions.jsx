export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item) => (
            <li onClick={handleClick} key={item}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
