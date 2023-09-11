import HistoryList from "../components/HistoryList.js";
import Navbar from "../components/Navbar.js";
import Home from "./Home.js";
import ShowHistory from "./ShowHistory.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/history" element={<ShowHistory />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
