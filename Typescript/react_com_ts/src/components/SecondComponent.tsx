import type { ReactElement } from "react";

interface Props {
  name: string;
}

function SecondComponent(props: Props): ReactElement {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
}

export default SecondComponent;
