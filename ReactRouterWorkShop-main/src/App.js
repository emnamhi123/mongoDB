import "./App.css";
import Dev from "./Components/Dev";
import Home from "./Components/Home";
import Marketing from "./Components/Marketing";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
import Services from "./Components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}>
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/services/development" element={<Dev />} />
          </Route>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
