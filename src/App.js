import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationDasboard from "./Pages/ApplicationDasboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ApplicationDasboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
