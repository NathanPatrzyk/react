import { LikeContainer } from "@/components/like-container";
import { PhotoItem } from "@/components/photo-item";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { getPhoto, like, comment } from "@/slices/photoSlice";
import { uploads } from "@/utils/config";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

function Photo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading } = useSelector((state) => state.photo);

  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(like(photo._id))
      .unwrap()
      .then(() => {
        toast.success("A foto foi curtida!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao curtir foto");
      });
  };

  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(comment(commentData))
      .unwrap()
      .then(() => {
        toast.success("O comentário foi adicionado com sucesso!");
      })
      .catch((err) => {
        toast.error(err || "Erro ao comentar foto");
      });

    setCommentText("");
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center pt-8">
        <Spinner className="size-6" />
      </div>
    );
  }

  return (
    <div className="max-w-sm bg-background flex flex-col items-center justify-center gap-6 p-6 md:p-10 mx-auto">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <Button className="mx-auto" asChild>
        <Link to={`/photos/${photo._id}`}>
          <Eye className="size-5" />
          Ver mais
        </Link>
      </Button>
      <div>
        {photo.comments && (
          <>
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
              <FieldGroup>
                <Field>
                  <Input
                    type="text"
                    placeholder="Insira o seu comentário..."
                    onChange={(e) => setCommentText(e.target.value)}
                    value={commentText || ""}
                  />
                </Field>
                <Field>
                  <Button type="submit">
                    <MessageCircle className="size-5" />
                    Enviar
                  </Button>
                </Field>
              </FieldGroup>
            </form>
            {photo.comments.length === 0 && <p>Não há comentários...</p>}
            {photo.comments.map((comment) => (
              <div key={comment.comment}>
                <div>
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={comment.userName}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export { Photo };
