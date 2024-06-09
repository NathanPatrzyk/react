const Game = ({ verifyLetter }) => {
  return (
    <div>
      <p>
        <span className="font-bold">Pontuação: 000</span>
      </p>
      <h1 className="text-[#473626] text-3xl md:text-5xl font-bold  my-4 md:my-8">Adivinhe a palavra:</h1>
      <h3>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div>
        <span>A</span>
        <span></span>
      </div>
      <div>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button className="bg-[#473626] size-[4.5rem] rounded-full hover:opacity-90">
            <img className="size-12 m-auto" src="/play.webp" alt="Jogar" />
          </button>
        </form>
      </div>
      <div>
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
};

export default Game;
