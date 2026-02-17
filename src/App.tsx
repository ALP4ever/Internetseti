import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home.tsx";
import { About } from "./components/pages/About.tsx";
import { Services } from "./components/pages/Services.tsx";
import { Catalog } from "./components/pages/Catalog.tsx";
import { Contacts } from "./components/pages/Contacts.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

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


export default App
