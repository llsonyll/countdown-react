import "./App.css";

// Components
import CountDown from "./components/countdown/countdown";
import Expired from "./components/expired/expired";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countDownDate = new Date(new Date("Jun 24, 2023 00:00:00").getTime());
  // const countDownDate = new Date(new Date().getTime());
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
        {days + hours + minutes + seconds > 0 ? (
          <CountDown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        ) : (
          <Expired />
        )}
      </main>
      <footer className="footer" style={footerStyle}>
        <div className="links">
          <a
            href="https://www.facebook.com/JosepRojasNice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/StrkJoseph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://github.com/llsonyll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
        <p> By: Josep Rojas | llsonyll </p>
      </footer>
    </div>
  );
}

export default App;
