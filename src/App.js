import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ChoosePortfolio from "./pages/ChoosePortfolio";
import HomePage from "./pages/HomePage";
import CoolPortfolio from "./pages/CoolPortfolio";

function App() {
  return (
    <div className="App font-mono">
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
