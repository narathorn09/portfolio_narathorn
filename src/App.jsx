import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/narathorn-noophum-portfolio" />}
        />
        <Route path="/narathorn-noophum-portfolio" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
