import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div className="bg-zinc-950 text-zinc-300">
      <BrowserRouter>
        <Navbar />

        <div className="flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
