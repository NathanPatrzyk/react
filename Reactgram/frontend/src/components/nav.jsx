import { Link, useNavigate } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  Camera,
  HomeIcon,
  Instagram,
  LogIn,
  LogOut,
  Search,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/slices/authSlice";
import { toast } from "sonner";
import { useState } from "react";

function Nav() {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success("Logout realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao realizar logout");
      });

    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <nav className="flex flex-col gap-4 py-8">
      <Link
        to="/"
        className="flex gap-2 items-center scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        <Instagram className="size-6" />
        Reactgram
      </Link>
      <form onSubmit={handleSearch}>
        <InputGroup>
          <InputGroupInput
            placeholder="Pesquisar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupAddon>
            <Search className="size-5" />
          </InputGroupAddon>
        </InputGroup>
      </form>
      {auth ? (
        <>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/">
              <HomeIcon className="size-5" />
              Página Inicial
            </Link>
          </Button>
          {user && (
            <Button variant="ghost" asChild className="justify-start">
              <Link to={`/users/${user._id}`}>
                <Camera className="size-5" />
                Minhas Fotos
              </Link>
            </Button>
          )}
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/profile">
              <UserRound className="size-5" />
              Perfil
            </Link>
          </Button>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="justify-start"
          >
            <LogOut className="size-5" />
            Sair
          </Button>
        </>
      ) : (
        <>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/login">
              <LogIn className="size-5" />
              Entrar
            </Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/register">
              <UserRoundPlus className="size-5" />
              Cadastrar
            </Link>
          </Button>
        </>
      )}
    </nav>
  );
}

export { Nav };
