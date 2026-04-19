import { useState, useEffect } from "react";
import { navigation } from "../../data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden flex items-center justify-center w-10 h-10" style={{ position: "relative", zIndex: 70 }} aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] bg-[#141c24]" : "bg-[#141c24]"}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "opacity-0" : "bg-[#141c24]"}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px] bg-[#141c24]" : "bg-[#141c24]"}`} />
        </div>
      </button>
      {open && (
        <div className="lg:hidden" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh", backgroundColor: "#ffffff", zIndex: 60, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: "1.25rem", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
          <a href="/" onClick={() => setOpen(false)} style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
            <img src="/logo.png" alt="Multiflex" style={{ height: "36px" }} />
          </a>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-3xl font-medium text-[#141c24] hover:text-[#1a8d4e] transition-colors" style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}>{item.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-6 bg-[#141c24] text-white font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#0c2134] transition-colors">
            Contacto
          </a>
        </div>
      )}
    </>
  );
}
