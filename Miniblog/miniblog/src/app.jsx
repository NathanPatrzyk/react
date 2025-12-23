import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/authContext";

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Search } from "./pages/search/search";
import { Post } from "./pages/post/post";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { CreatePost } from "./pages/createPost/createPost";
import { Dashboard } from "./pages/dashboard/dashboard";

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
      <p className="bg-zinc-900 text-zinc-300 flex justify-center items-center h-screen px-8 md:px-16 py-3">
        Carregando...
      </p>
    );
  }

  return (
    <div className="bg-zinc-900 text-zinc-300">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />

          <div className="flex items-center justify-center min-h-[90vh]">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/posts/:id" element={<Post />}></Route>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              ></Route>
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
