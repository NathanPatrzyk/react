const MyForm = () => {
  return (
    <>
        <form className="flex flex-col text-center px-32 py-8">
            <div className="flex flex-col">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </>
  )
}

export default MyForm