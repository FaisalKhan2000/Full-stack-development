export default function Input({ input, onInput }) {
  return (
    <div className="input-container">
      <div className="heading">Select date </div>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={input}
        onChange={(e) => {
          onInput(e.target.value);
        }}
        min="1947-01-01"
        max="2024-12-31"
      />
    </div>
  );
}
