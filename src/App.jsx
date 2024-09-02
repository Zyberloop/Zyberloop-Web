import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";

function App() {
  return (
    <Router>
      <div className="w-full h-full font-LexendDecaRegular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
