import { Heart } from "lucide-react";

function LikeContainer({ photo, user, handleLike }) {
  return (
    <>
      {photo.likes && user && (
        <div className="flex w-full gap-2 items-center justify-start">
          {photo.likes.includes(user._id) ? (
            <Heart className="fill-red-500 text-red-500 cursor-pointer transition" />
          ) : (
            <Heart
              className="cursor-pointer transition"
              onClick={() => handleLike(photo)}
            />
          )}
          <p>{photo.likes.length} like(s)</p>
        </div>
      )}
    </>
  );
}

export { LikeContainer };
