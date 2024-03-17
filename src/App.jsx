import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Navbar from "./components/Navbar";
import Download from "./pages/client/Download";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
