import { useState } from "react";
import Navigation from "./Navigation.jsx";
import HeaderActions from "./HeaderAction.jsx";
import Brand from "./Brands.jsx";
import Search from "./Search.jsx";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-8">
        <Brand name="Витрина" />

        <div className="hidden md:block">
          <Navigation />
        </div>
        </div>

        <div className="flex items-center gap-2">
          <HeaderActions />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Открыть меню</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 py-3 md:hidden">
          <Search className="mb-3 w-full" />
          <div onClick={() => setOpen(false)}> 
            <Navigation />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;