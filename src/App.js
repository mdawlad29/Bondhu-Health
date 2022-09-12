import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Experience from "./Pages/Experience";
import FAQ from "./Pages/FAQ";
import Feature from "./Pages/Feature";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Footer";
import Testimonial from "./Pages/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
