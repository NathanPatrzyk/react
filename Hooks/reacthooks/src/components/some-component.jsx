import { forwardRef, useImperativeHandle, useRef } from "react";

function SomeComponent(props, ref) {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
}

const ForwardedSomeComponent = forwardRef(SomeComponent);

export { ForwardedSomeComponent as SomeComponent };
