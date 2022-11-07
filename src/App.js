import "./App.css";
import Header from "./components/Header/Header";
import IndexPage from "./pages/IndexPage";
import JobPage from "./pages/JobPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path={`/:jobId`} element={<JobPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
