const ExecuteFunction = ({myFunction}) => {
  return (
    <div className="text-center m-12">
        <button className="text-normal text-slate-50 bg-cyan-500 hover:opacity-90 rounded-md px-4 py-2 mx-auto" onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecuteFunction