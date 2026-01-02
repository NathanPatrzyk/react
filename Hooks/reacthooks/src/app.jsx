import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/home";
import { About } from "../src/pages/about";
import { HookUseContext } from "./components/hook-use-context";

function App() {
  return (
    <div>
      <HookUseContext>
        <h1>React Hooks</h1>

        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
