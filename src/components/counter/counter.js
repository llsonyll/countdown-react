import "./counter.css";

const Counter = ({ number, label }) => {
  return (
    <div className="counter">
      <div className="number-box">
        <div className="top card"> </div>
        <div className="bottom card"> </div>
        <div className="divider"> </div>
        <div className="number"> {number} </div>
      </div>
      <div className="label"> {label} </div>
    </div>
  );
};

export default Counter;
