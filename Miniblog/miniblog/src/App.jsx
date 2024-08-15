import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
