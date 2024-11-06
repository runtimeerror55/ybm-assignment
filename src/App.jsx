import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
function App() {
      return (
            <Routes>
                  <Route path="/" element={<HomePage></HomePage>} />
            </Routes>
      );
}

export default App;
