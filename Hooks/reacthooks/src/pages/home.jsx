import { useContext } from "react";
import { HookUseEffect } from "../components/hook-use-effect";
import { HookUseReducer } from "../components/hook-use-reducer";
import { HookUseState } from "../components/hook-use-state";
import { SomeContext } from "../components/hook-use-context";
import { HookUseRef } from "../components/hook-use-ref";
import { HookUseCallback } from "../components/hook-use-callback";
import { HookUseMemo } from "../components/hook-use-memo";
import { HookUseLayoutEffect } from "../components/hook-use-layout-effect";
import { HookUseImperativeHandle } from "../components/hook-use-imperative-handle";
import { HookCustom } from "../components/hook-custom";

function Home() {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
}

export { Home };
