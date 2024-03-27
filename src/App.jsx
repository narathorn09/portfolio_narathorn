import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
