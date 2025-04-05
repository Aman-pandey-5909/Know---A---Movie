import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdvancedSearch from "./components/AdvancedSearch";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advsearch" element={<AdvancedSearch />} />
        <Route path="/result" element={<ResultCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
