import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home.jsx";
import { About } from "./components/pages/About.jsx";
import { Services } from "./components/pages/Services.jsx";
import { Catalog } from "./components/pages/Catalog.jsx";
import { Contacts } from "./components/pages/Contacts.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <main className="bg-amber-800 w-full caret-amber-50 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};
