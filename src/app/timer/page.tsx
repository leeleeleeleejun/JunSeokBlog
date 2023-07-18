export default function Timer() {
  return (
    <div>
      <input type="number" max={8} className="bg-mainGreen" />
      <input type="number" max={60} className="bg-mainGreen" />
      <input type="number" max={60} className="bg-mainGreen" />
      <button>START</button>
      <button>RESET</button>
    </div>
  );
}
