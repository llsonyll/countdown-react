import "./countdown.css";
import Counter from "../counter/counter";

const CountDown = (props) => {
  const formatTimeWithCero = (number) => {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  };

  return (
    <div className="countDown">
      <div className="title">MY BIRTHDAY COUNTDOWN</div>
      <div className="countdown">
        <Counter number={formatTimeWithCero(props.days)} label="Days" />
        <Counter number={formatTimeWithCero(props.hours)} label="Hours" />
        <Counter number={formatTimeWithCero(props.minutes)} label="Minutes" />
        <Counter number={formatTimeWithCero(props.seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default CountDown;
