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
import {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
} from "@/slices/photoSlice";
import { getUserDetails } from "@/slices/userSlice";
import { uploads } from "@/utils/config";
import { Camera, Eye, Pencil, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const { photos, loading: loadingPhoto } = useSelector((state) => state.photo);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [editId, setEditId] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const newPhotoForm = useRef();
  const editPhotoForm = useRef();

  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  const handleFile = (e) => {
    const image = e.target.files[0];

    setImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image);

    dispatch(publishPhoto(formData))
      .unwrap()
      .then(() => {
        toast.success("Foto publicada com sucesso!");
        setTitle("");
        setImage(null);
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err || "Erro ao publicar foto");
      });
  };

  const handleDelete = (id) => {
    dispatch(deletePhoto(id))
      .unwrap()
      .then(() => {
        toast.success("Foto excluída com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao excluir foto");
      });
  };

  const hideOrShowForms = () => {
    newPhotoForm.current.classList.toggle("hidden");
    editPhotoForm.current.classList.toggle("hidden");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const photoData = {
      title: editTitle,
      id: editId,
    };

    dispatch(updatePhoto(photoData))
      .unwrap()
      .then(() => {
        toast.success("Foto editada com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao editar foto");
      });
  };

  const handleEdit = (photo) => {
    if (editPhotoForm.current.classList.contains("hidden")) {
      hideOrShowForms();
    }

    setEditId(photo._id);
    setEditTitle(photo.title);
    setEditImage(photo.image);
  };

  const handleCancelEdit = (e) => {
    hideOrShowForms();
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center pt-8">
        <Spinner className="size-6" />
      </div>
    );
  }

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex gap-6 max-w-sm w-full">
        <Avatar className="size-28">
          {user.profileImage && (
            <AvatarImage
              src={`${uploads}/users/${user.profileImage}`}
              alt={user.name}
            />
          )}
          <AvatarFallback className="text-lg">N/A</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h2 className="text-primary text-xl font-bold mb-1.5">{user.name}</h2>
          <p className="text-muted-foreground leading-normal font-normal">
            {user.bio}
          </p>
        </div>
      </div>
      {id === userAuth._id && (
        <>
          <div className="w-full max-w-sm" ref={newPhotoForm}>
            <div className="flex flex-col gap-6 mt-4">
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <FieldDescription className="text-primary text-xl font-bold mb-1.5">
                      Compartilhe algum momento seu:
                    </FieldDescription>
                  </div>
                  <Field>
                    <FieldLabel>Título para a foto:</FieldLabel>
                    <Input
                      type="text"
                      placeholder="Insira um título"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title || ""}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Imagem:</FieldLabel>
                    <Input type="file" onChange={handleFile} />
                  </Field>
                  <Field>
                    {loadingPhoto ? (
                      <Button type="submit" disabled>
                        <Spinner />
                        Aguarde...
                      </Button>
                    ) : (
                      <Button type="submit">
                        <Camera className="size-5" />
                        Postar
                      </Button>
                    )}
                  </Field>
                </FieldGroup>
              </form>
            </div>
          </div>
          <div className="w-full max-w-sm hidden" ref={editPhotoForm}>
            <div className="flex flex-col gap-6 mt-4">
              <form onSubmit={handleUpdate}>
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <FieldDescription className="text-primary text-xl font-bold mb-1.5">
                      Editando:
                    </FieldDescription>
                  </div>
                  <div className="w-full flex justify-center">
                    {editImage && (
                      <div className="overflow-hidden w-56">
                        <img
                          className="mb-2 w-full aspect-square object-cover"
                          src={`${uploads}/photos/${editImage}`}
                          alt={editTitle}
                        />
                      </div>
                    )}
                  </div>
                  <Field>
                    <Input
                      type="text"
                      onChange={(e) => setEditTitle(e.target.value)}
                      value={editTitle || ""}
                    />
                  </Field>
                  <Field className="grid grid-cols-2 gap-4">
                    <Button type="submit">
                      <Camera className="size-5" />
                      Atualizar
                    </Button>
                    <Button
                      type="reset"
                      onClick={handleCancelEdit}
                      variant="secondary"
                    >
                      <X className="size-5" />
                      Cancelar edição
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </div>
          </div>
        </>
      )}
      <div className="w-full flex flex-col gap-6 mt-4 max-w-2xl">
        <h2 className="text-primary text-xl font-bold text-center">
          Fotos publicadas:
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {photos &&
            photos.map((photo) => (
              <div
                className="w-full flex flex-col justify-center"
                key={photo._id}
              >
                {photo.image && (
                  <div className="overflow-hidden">
                    <img
                      className="mb-2 w-full aspect-square object-cover"
                      src={`${uploads}/photos/${photo.image}`}
                      alt={photo.title}
                    />
                  </div>
                )}
                {id === userAuth._id ? (
                  <div className="flex justify-around">
                    <Button asChild variant="ghost" size="icon">
                      <Link to={`/photos/${photo._id}`}>
                        <Eye className="size-5" />
                      </Link>
                    </Button>
                    <Button
                      onClick={() => handleEdit(photo)}
                      variant="ghost"
                      size="icon"
                    >
                      <Pencil className="size-5" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(photo._id)}
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 className="size-5" />
                    </Button>
                  </div>
                ) : (
                  <Button className="mx-auto" asChild>
                    <Link to={`/photos/${photo._id}`}>
                      <Eye className="size-5" />
                      Ver
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          {photos.length === 0 && (
            <p className="text-muted-foreground leading-normal font-normal text-center">
              Ainda não há fotos publicadas
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export { Profile };
