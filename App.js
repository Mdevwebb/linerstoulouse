
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Engagements from "./pages/Engagements";
import Offres from "./pages/Offres";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/engagements" element={<Engagements />} />
      <Route path="/offres" element={<Offres />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
