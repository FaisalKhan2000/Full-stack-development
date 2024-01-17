export default function BillInput({ input, onInput }) {
  return (
    <div>
      <label>Bill</label>
      <input
        type="number"
        step="0.1"
        value={input}
        onChange={(e) => {
          console.log(Number(e.target.value));
          onInput(Number(e.target.value));
        }}
      />
    </div>
  );
}
