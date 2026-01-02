import { Sparkles } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-950 text-slate-100 selection:bg-fuschia-500/30">
        <header className="sticky top-0 z-40 border-b border-white/5">
          <div>
            <a href="#">
              <Sparkles />
              <span>Minha Marca</span>
            </a>

            <nav>
              {navLinks.map((l) => {
                <a>{l.label}</a>;
              })}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export { App };
