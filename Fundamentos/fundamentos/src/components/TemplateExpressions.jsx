const TemplateExpressions = () => {
  const name = "Nathan";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h3>Olá {name}, tudo bem?</h3>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
