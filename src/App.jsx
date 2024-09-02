import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import ErpProject from "./pages/ErpProject.jsx";
import Services from "./pages/Services.jsx"

function App() {
  return (
    <Router>
      <div className="w-full h-full font-LexendDecaRegular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/erp-project" element={<ErpProject />} />
          <Route path="/erp-project" element={<ErpProject />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
