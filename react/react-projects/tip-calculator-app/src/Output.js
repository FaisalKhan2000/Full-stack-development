import Button from "./Button";
export default function Output({ tipAmountPerPerson, totalAmount, onReset }) {
  const handleReset = () => {
    // Reset both tipAmountPerPerson and totalAmount to 0
    onReset();
  };
  return (
    <div className="content-box-2">
      <div>
        <label className="output-label">Tip Amount / Person:</label>
        <p className="output-output">
          {!tipAmountPerPerson ? "$0.00" : `$${tipAmountPerPerson.toFixed(2)}`}
        </p>
      </div>
      <div>
        <label className="output-label">Total Amount:</label>
        <p className="output-output">
          {!totalAmount ? "$0.00" : `$${totalAmount.toFixed(2)}`}
        </p>
      </div>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
