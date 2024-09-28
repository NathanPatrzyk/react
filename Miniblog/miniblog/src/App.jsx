import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/AuthContext";

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <p className="bg-zinc-950 text-zinc-300 flex justify-center items-center h-screen px-8 md:px-16 py-3">
        Carregando...
      </p>
    );
  }

  return (
    <div className="bg-zinc-950 text-zinc-300">
      <AuthProvider value={{ user }}>
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
      </AuthProvider>
    </div>
  );
}
