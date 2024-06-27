import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <form
      className="transition ease-in-out duration-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-between h-8 max-w-64 w-full mx-auto rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        className="transition ease-in-out duration-300 bg-transparent h-full w-full focus-visible:outline-none px-4 text-slate-50 placeholder:text-slate-500 hover:placeholder:text-slate-400"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="transition ease-in-out duration-300 bg-sky-500 hover:bg-sky-600 flex items-center justify-center size-8 rounded-full"
        type="submit"
      >
        <lord-icon
          src="https://cdn.lordicon.com/fkdzyfle.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={({ width: "24px" }, { height: "24px" })}
        ></lord-icon>
      </button>
    </form>
  );
};

export default SearchForm;
