import { uploads } from "@/utils/config";
import { Link } from "react-router-dom";

function PhotoItem({ photo }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      {photo.image && (
        <div className="overflow-hidden">
          <img
            className="mb-2 w-full aspect-square object-cover"
            src={`${uploads}/photos/${photo.image}`}
            alt={photo.title}
          />
        </div>
      )}
      <h2 className="text-primary text-xl font-bold text-center">
        {photo.title}
      </h2>
      <p>
        Publicada por:{" "}
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  );
}

export { PhotoItem };
