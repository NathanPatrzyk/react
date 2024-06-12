import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div>
      <p>
        <span className="text-[#473626] font-bold">Pontuação: {score}</span>
      </p>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold  my-4 md:my-8">
        Adivinhe a palavra:
      </h1>
      <h3 className="text-[#473626]">
        Dica sobre a palavra:{" "}
        <span className="font-bold">{pickedCategory}</span>
      </h3>
      <p className="text-[#473626] font-bold mt-4 md:mt-8">
        Você ainda tem {guesses} tentativa(s)
      </p>
      <div className="flex justify-center items-center font-bold text-2xl md:text-5xl sm:text-5xl m-4 md:m-8 md:gap-4 gap-2">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span
              key={i}
              className="text-[#473626] sm:leading-[1.5] leading-[1] uppercase size-[8vw] max-w-20 max-h-20 border-4 border-[#473626] rounded-md"
            >
              {letter}
            </span>
          ) : (
            <span
              key={i}
              className="text-[#473626] sm:leading-[1.5] leading-[1] uppercase size-[8vw] max-w-20 max-h-20 border-4 border-[#473626] rounded-md"
            ></span>
          )
        )}
      </div>
      <div>
        <p className="mb-4 md:mb-8">Tente adivinhar uma letra da palavra:</p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-4"
        >
          <input
            className="bg-[#f6e4cc] text-center text-3xl border-4 border-[#473626] rounded-md md:size-1~6 size-12"
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button className="bg-[#473626] md:size-16 size-12 rounded-full hover:opacity-90">
            <img
              className="md:size-10 size-8 m-auto"
              src="/play.webp"
              alt="Jogar"
            />
          </button>
        </form>
      </div>
      <div className="mt-4 md:mt-8">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
