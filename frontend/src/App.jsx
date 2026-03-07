import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Preloader from "./components/ui/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensuring a minimum loading time for the animation (2.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Also handle window load for flexibility
    const handleLoad = () => {
      // We still respect the minimum timer for better UX
    };

    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </DefaultLayout>
    </>
  );
}