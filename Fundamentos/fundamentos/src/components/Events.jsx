const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if(x) {
      return <h1>Rendenizando isso!</h1>
    }
    else {
      return <h1>Também posso rendenizar isso!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => {console.log("Clicou!")}}>Clique aqui também!</button>
        <button onClick={() => {
            if (true) {
                console.log("Isso não deveria existir =)")
            }
        }}>Clica aqui, por favor.</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
