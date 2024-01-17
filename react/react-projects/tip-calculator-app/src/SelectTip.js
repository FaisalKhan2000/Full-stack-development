export default function SelectTip({ selectTip, onSelectTip }) {
  function handleButtonClick(value) {
    onSelectTip(value);
  }

  return (
    <div>
      <label>Select Tip %</label>

      {[10, 15, 20, 25, 50].map((percentage) => (
        <input
          key={percentage}
          type="button"
          value={percentage}
          onClick={() => handleButtonClick(percentage)}
          className={selectTip === percentage ? "selected-button" : ""}
        />
      ))}

      <input
        type="number"
        step="0.1"
        value={selectTip}
        onChange={(e) => {
          // console.log(e.target.value);
          onSelectTip(e.target.value);
        }}
      />
    </div>
  );
}
