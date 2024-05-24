import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Sou um advogado",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
