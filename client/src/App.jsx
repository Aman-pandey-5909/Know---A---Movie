import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdvancedSearch from "./components/AdvancedSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advsearch" element={<AdvancedSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
