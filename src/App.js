import "./App.css";

// Components
import Counter from "./components/counter/counter";

// Icons - SVG
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-instagram.svg";
import github from "./assets/icon-pinterest.svg";

// Footer Pattern
import hillsPatter from "./assets/pattern-hills.svg";
import bgStars from "./assets/bg-stars.svg";
import { useEffect, useState } from "react";

function App() {
  const footerStyle = {
    backgroundImage: `url(${hillsPatter})`,
    backgroundSize: "cover",
  };

  const contentStyle = {
    backgroundImage: `url(${bgStars})`,
    backgroundSize: "cover",
    backgroundColor: "hsl(235, 16%, 14%)",
    width: "100vw",
    height: "100vh",
  };

  const formatTimeWithCero = (number) => {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countDownDate = new Date(new Date("Jun 24, 2022 15:37:25").getTime());

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div className="App">
      <main className="content" style={contentStyle}>
        <div className="title">WE'RE LAUNCHING SOON</div>
        <div className="countdown">
          <Counter number={formatTimeWithCero(days)} label="Days" />
          <Counter number={formatTimeWithCero(hours)} label="Hours" />
          <Counter number={formatTimeWithCero(minutes)} label="Minutes" />
          <Counter number={formatTimeWithCero(seconds)} label="Seconds" />
        </div>
      </main>
      <footer className="footer" style={footerStyle}>
        <div className="links">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={github} alt="github" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
