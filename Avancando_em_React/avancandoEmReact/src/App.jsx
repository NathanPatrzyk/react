import { useState } from "react";
import Image from "./assets/img1.jpg";

import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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

      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      <CarDetails brand="Toyota" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="McLaren" km={40000} color="Laranja" newCar={false} />
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={40000} color="Branco" newCar={false} />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      <Fragment propFragment="teste" />
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
