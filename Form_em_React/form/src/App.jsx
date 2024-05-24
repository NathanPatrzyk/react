import MyForm from "./components/MyForm";

function App() {
  return <div className="flex justify-center items-center h-screen bg-zinc-900">
    <MyForm user={{name: "Josias", email: "josias@gmail.com"}}/>
  </div>;
}

export default App;
