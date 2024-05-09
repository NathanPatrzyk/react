import Image from "./assets/img1.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import { useState } from "react";

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

  return (
    <>
      <h1 className="p-8 text-5xl text-normal text-center text-cyan-500">
        Avançando em React
      </h1>
      <div className="flex flex-col sm:flex-row justify-center">
        <img
          className="w-72 mx-auto sm:mx-0"
          src="/img2.jpg"
          alt="Relógio Steampunk"
        />
        <img
          className="w-72 mx-auto sm:mx-0"
          src={Image}
          alt="Paisagem Steampunk"
        />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <ShowUserName name="Nathan" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      <CarDetails branch="VW" km={100000} color="Azul" />
      <CarDetails branch="Toyota" km={120000} color="Vermelho" />
      <CarDetails branch="McLaren" km={40000} color="Laranja" />
    </>
  );
}

export default App;
