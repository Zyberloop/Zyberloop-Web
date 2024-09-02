import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import ErpProject from "./pages/ErpProject.jsx";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="w-full h-full font-LexendDecaRegular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/erp-project" element={<ErpProject />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
