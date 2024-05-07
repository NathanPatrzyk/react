import Image from "./assets/img1.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";

function App() {
  return (
    <>
      <h1 className="p-8 text-5xl text-normal text-center text-cyan-500">
        Avançando em React
      </h1>
      <div className="flex flex-col sm:flex-row justify-center">
        <img className="w-72 mx-auto sm:mx-0" src="/img2.jpg" alt="Relógio Steampunk" />
        <img className="w-72 mx-auto sm:mx-0" src={Image} alt="Paisagem Steampunk" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
    </>
  );
}

export default App;
