import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import MainPage from "./pages/mainPage";
import ErrorPage from "./pages/errorPage";
import CareerPage from "./pages/careerPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
