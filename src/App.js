import "./App.css";

// Components
import Counter from "./components/counter/counter";

// Icons - SVG
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-instagram.svg";
import github from "./assets/icon-pinterest.svg";

// Footer Pattern
import hillsPatter from "./assets/pattern-hills.svg";

function App() {
  const footerStyle = {
    backgroundImage: `url(${hillsPatter})`,
    backgroundSize: "cover",
  };

  return (
    <div className="App">
      <main className="content">
        <div className="title">WE'RE LAUNCHING SOON</div>
        <div className="countdown">
          <Counter number="05" label="Days" />
          <Counter number="12" label="Hours" />
          <Counter number="32" label="Minutes" />
          <Counter number="11" label="Seconds" />
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
