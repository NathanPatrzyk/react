import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Instagram, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "@/slices/authSlice";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user))
      .unwrap()
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao realizar cadastro");
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
                  Cadastre-se para ver as fotos dos seus amigos.
                </FieldDescription>
                <FieldDescription>
                  Já tem uma conta? <Link to="/login">Clique aqui</Link>
                </FieldDescription>
              </div>
              <Field>
                <Input
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name || ""}
                />
              </Field>
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
                <Input
                  type="password"
                  placeholder="Confirme a senha"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword || ""}
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
                    <UserRoundPlus className="size-5" />
                    Cadastrar
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

export { Register };
