const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold pt-8 md:pt-16">
        Game
      </h1>
      <p className="text-[#473626] my-4 md:my-8 mb-3 md:mb-6">
        Clique no botão abaixo para finalizar o jogo
      </p>
      <button
        className="text-[#f6e4cc] font-semibold hover:opacity-90"
        onClick={verifyLetter}
      >
        <img
          className="size-[5.4rem] m-auto"
          src="/finish.webp"
          alt="Finalizar"
        />
      </button>
    </div>
  );
};

export default Game;
