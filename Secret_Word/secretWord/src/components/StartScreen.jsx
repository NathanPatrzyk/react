const StartScreen = ({ startGame }) => {
  return (
    <div>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold">
        Secret Word
      </h1>
      <p className="text-[#473626] my-4 md:my-8">
        Clique no botão abaixo para começar a jogar
      </p>
      <button
        className="bg-[#473626] size-[4.5rem] rounded-full hover:opacity-90"
        onClick={startGame}
      >
        <img className="size-12 m-auto" src="/play.webp" alt="Começar" />
      </button>
    </div>
  );
};

export default StartScreen;
