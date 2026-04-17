import { PhotoItem } from "@/components/photo-item";
import { getPhotos, like } from "@/slices/photoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

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
    <div>
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
          </div>
        ))}
      {photos.length === 0 && (
        <p className="text-muted-foreground leadssssssssssssssing-normal font-normal text-center">
          Ainda não há fotos publicadas{" "}
          <Link to={`/users/${user._id}`}>clique aqui</Link>
        </p>
      )}
    </div>
  );
}

export { Search };
