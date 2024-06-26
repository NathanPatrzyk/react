import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-slate-50 text-3xl font-bold md:py-8 py-4">
        Mais informações sobre o produto: {id}
      </h1>
    </div>
  );
};

export default Info;
