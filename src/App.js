import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer>
          This project was coded by Keenah VanCampenhout and is hosted on{" "}
          <a
            href="https://github.com/kavancamp/dictionary_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
