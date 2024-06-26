import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Layout/Header';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
