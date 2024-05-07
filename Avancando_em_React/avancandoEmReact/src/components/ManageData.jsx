import { useState } from "react";

const ManageData = () => {
  let someData = 10;
	const [number, setNumber] = useState(10);
  return (
    <div className="p-12 gap-12 flex flex-col sm:flex-row justify-center text-center text-slate-900">
			<div>
				<p>Valor: {someData}</p>
				<button className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2 mt-4" onClick={() => {someData = 15}}>Mudar variável</button>
			</div>
			<div>
				<p>Valor: {number}</p>
				<button className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2 mt-4" onClick={() => {setNumber(25)}}>Mudar variável</button>
			</div>
		</div>
  )
}

export default ManageData