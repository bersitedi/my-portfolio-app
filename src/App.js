import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";

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
