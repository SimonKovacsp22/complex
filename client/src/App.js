import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/otherpage">Other</Link>
        </header>
        <Routes>
          <Route exact path="/" Component={Fib}></Route>
          <Route path="/otherpage" Component={OtherPage}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
