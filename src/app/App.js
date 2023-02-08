import { NewsApp } from "../screens/NewsApp";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewsApp />} />
      </Routes>
    </div>
  );
}

export default App;
