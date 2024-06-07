const GameOver = ({ retry }) => {
  return (
    <div>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold pt-8 md:pt-16">
        Game Over
      </h1>
      <p className="text-[#473626] my-4 md:my-8">
        Clique no botão abaixo para resetar o jogo
      </p>
      <button
        className="bg-[#473626] size-[4.5rem] rounded-full hover:opacity-90"
        onClick={retry}
      >
        <img className="size-12 m-auto" src="/retry.webp" alt="Resetar" />
      </button>
    </div>
  );
};

export default GameOver;
