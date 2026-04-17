import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { profile, updateProfile } from "@/slices/userSlice";
import { uploads } from "@/utils/config";
import { UserRoundPen } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function EditProfile() {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const handleFile = (e) => {
    const image = e.target.files[0];

    setPreviewImage(image);
    setProfileImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (name) {
      formData.append("name", name);
    }

    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    if (bio) {
      formData.append("bio", bio);
    }

    if (password) {
      formData.append("password", password);
    }

    await dispatch(updateProfile(formData))
      .unwrap()
      .then(() => {
        toast.success("Usuário atualizado com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao atualizar usuário");
      });
  };

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <FieldDescription className="text-primary text-xl font-bold mb-1.5">
                  Edite seus dados
                </FieldDescription>
                <FieldDescription>
                  Adicione uma imagem de perfil e conte mais sobre você...
                </FieldDescription>
              </div>
              <div className="w-full flex justify-center">
                <Avatar className="size-28">
                  {(user.profileImage || previewImage) && (
                    <AvatarImage
                      src={
                        previewImage
                          ? URL.createObjectURL(previewImage)
                          : `${uploads}/users/${user.profileImage}`
                      }
                      alt={user.name}
                    />
                  )}
                  <AvatarFallback className="text-lg">N/A</AvatarFallback>
                </Avatar>
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
                  disabled
                  value={email || ""}
                />
              </Field>
              <Field>
                <FieldLabel>Imagem de perfil:</FieldLabel>
                <Input type="file" onChange={handleFile} />
              </Field>
              <Field>
                <FieldLabel>Bio:</FieldLabel>
                <Input
                  type="text"
                  placeholder="Descrição do perfil"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio || ""}
                />
              </Field>
              <Field>
                <FieldLabel>Quer alterar sua senha?</FieldLabel>
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
                    <UserRoundPen className="size-5" />
                    Atualizar
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

export { EditProfile };
