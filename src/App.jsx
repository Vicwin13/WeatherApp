import "./App.css";
import ErrorHandling from "./components/ErrorHandling";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <ErrorHandling>
      <Home />
    </ErrorHandling>
    </div>
  );
}

export default App;
