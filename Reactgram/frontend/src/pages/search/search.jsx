import { LikeContainer } from "@/components/like-container";
import { PhotoItem } from "@/components/photo-item";
import { Spinner } from "@/components/ui/spinner";
import { useQuery } from "@/hooks/useQuery";
import { searchPhotos, like } from "@/slices/photoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  const handleLike = (photo) => {
    dispatch(like(photo._id));
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
      <h2 className="text-primary text-xl font-bold text-center">
        Você está buscando por: {search}
      </h2>
      {photos &&
        photos.map((photo) => (
          <div
            className="w-full flex flex-col items-center justify-center gap-6 mx-auto"
            key={photo._id}
          >
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
          </div>
        ))}
      {photos.length === 0 && (
        <p className="text-muted-foreground leading-normal font-normal text-center">
          Não foram encontrados resultados para sua busca...
        </p>
      )}
    </div>
  );
}

export { Search };
