import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Error404_Page from "./pages/error/Error404_Page.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error404_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
