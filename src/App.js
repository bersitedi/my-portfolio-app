import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import About from "./pages/container/About";

function App() {
  return (
    <div className="App font-mono">
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
