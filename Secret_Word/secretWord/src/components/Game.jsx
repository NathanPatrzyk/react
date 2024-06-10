const Game = ({ verifyLetter }) => {
  return (
    <div>
      <p>
        <span className="text-[#473626] font-bold">Pontuação: 000</span>
      </p>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold  my-4 md:my-8">
        Adivinhe a palavra:
      </h1>
      <h3>
        Dica sobre a palavra:{" "}
        <span className="text-[#473626] font-bold">Dica...</span>
      </h3>
      <p className="text-[#473626] font-bold mt-4 md:mt-8">Você ainda tem XXX tentativa(s)
      </p>
      <div className="flex justify-center items-center font-bold  text-3xl md:text-5xl m-4 md:m-8 md:gap-4 gap-2">
        <span className="text-[#473626] md:leading-[1.8] leading-[1.3] uppercase md:size-24 size-12 border-4 border-[#473626] rounded-md">a</span>
        <span className="text-[#473626] md:leading-[1.8] leading-[1.3] uppercase md:size-24 size-12 border-4 border-[#473626] rounded-md"></span>
      </div>
      <div>
        <p className="mb-4 md:mb-8">Tente adivinhar uma letra da palavra:</p>
        <form className="flex justify-center items-center gap-4">
          <input className="bg-[#f6e4cc] text-center text-3xl border-4 border-[#473626] rounded-md md:size-14 size-10" type="text" name="letter" maxLength="1" required />
          <button className="bg-[#473626] md:size-16 size-12 rounded-full hover:opacity-90">
            <img className="md:size-10 size-8 m-auto" src="/play.webp" alt="Jogar" />
          </button>
        </form>
      </div>
      <div className="mt-4 md:mt-8">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
};

export default Game;
