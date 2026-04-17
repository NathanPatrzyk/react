import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Home } from "./pages/home/home";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { Search } from "./pages/auth/search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./components/ui/input-group";
import { HomeIcon, LogIn, UserRoundPlus } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";
import { useAuth } from "./hooks/useAuth";
import { Spinner } from "./components/ui/spinner";
import { EditProfile } from "./pages/editProfile/editProfile";
import { Profile } from "./pages/profile/profile";
import { Photo } from "./pages/photo/photo";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full flex justify-center pt-8">
        <Spinner className="size-6" />
      </div>
    );
  }

  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <div className="grid grid-cols-[1fr_1px_4fr_1fr] min-h-screen px-8 gap-8">
          <Nav />

          <Separator orientation="vertical" />

          <main className="py-8">
            <Routes>
              <Route
                path="/"
                element={auth ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile"
                element={auth ? <EditProfile /> : <Navigate to="/login" />}
              />
              <Route
                path="/users/:id"
                element={auth ? <Profile /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!auth ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/search"
                element={auth ? <Search /> : <Navigate to="/login" />}
              />
              <Route
                path="/photos/:id"
                element={auth ? <Photo /> : <Navigate to="/login" />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
