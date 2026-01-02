import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SomeComponent } from "./some-component";

function HookUseImperativeHandle() {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
}

export { HookUseImperativeHandle };
