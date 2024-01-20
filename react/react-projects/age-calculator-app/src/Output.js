export default function Output({ years, months, days }) {
  return (
    <div className="output">
      <h1>
        {" "}
        <span>{years}</span> years
      </h1>
      <h1>
        <span>{months}</span> months
      </h1>
      <h1>
        <span>{days}</span>days
      </h1>
    </div>
  );
}
