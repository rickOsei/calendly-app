import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars";
import Home from "./Components/Home";
import Teams from "./Components/Teams";
import Individuals from "./Components/Individuals";
import Enterprises from "./Components/Enterprises";
import Error from "./Components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/individuals" element={<Individuals />}></Route>
        <Route path="/enterprises" element={<Enterprises />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
