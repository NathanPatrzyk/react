import Image from './assets/img1.jpg'

function App() {
  return (
    <>
      <h1 className="p-8 text-5xl text-normal text-cyan-500">
        Avançando em React
      </h1>
      <div className="w-full">
        <img src="/img2.jpg" alt="Relógio Steampunk" />
      </div>
      <div className="w-full">
        <img src={Image} alt="Paisagem Steampunk" />
      </div>
    </>
  );
}

export default App;
