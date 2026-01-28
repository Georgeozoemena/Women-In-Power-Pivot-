import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DefaultLayout>
  );
}