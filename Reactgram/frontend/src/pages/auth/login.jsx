import { Instagram, LogIn } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/authSlice";
import { toast } from "sonner";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user))
      .unwrap()
      .then(() => {
        toast.success("Login realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao realizar login");
      });
  };

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <Link
                  to="/"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <Instagram className="size-6" />
                  </div>
                  <span className="sr-only">Reactgram</span>
                </Link>
                <FieldDescription className="text-primary text-xl font-bold mb-1.5">
                  Reactgram
                </FieldDescription>
                <FieldDescription>
                  Faça o login para ver o que há de novo.
                </FieldDescription>
                <FieldDescription>
                  Não tem uma conta? <Link to="/login">Clique aqui</Link>
                </FieldDescription>
              </div>
              <Field>
                <Input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || ""}
                />
              </Field>
              <Field>
                <Input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password || ""}
                />
              </Field>
              <Field>
                {loading ? (
                  <Button type="submit" disabled>
                    <Spinner />
                    Aguarde...
                  </Button>
                ) : (
                  <Button type="submit">
                    <LogIn className="size-5" />
                    Entrar
                  </Button>
                )}
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Login };
