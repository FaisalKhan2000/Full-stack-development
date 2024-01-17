export default function People({ noOfPeople, onNoOfPeople }) {
  return (
    <div>
      <label>No. of People</label>
      <input
        type="number"
        step="1"
        value={noOfPeople}
        onChange={(e) => {
          // console.log(Number(e.target.value));
          // onNoOfPeople(Number(e.target.value));
          if (e.target.value > 0) {
            onNoOfPeople(Number(e.target.value));
          }
        }}
      />
    </div>
  );
}
