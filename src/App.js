import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navigate to="/contacts" />} />
        <Route exact path="/add" element={<ContactPage />} />
        <Route exact path="/contacts" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
