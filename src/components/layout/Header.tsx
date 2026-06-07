"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Início", href: "/#inicio", value: "inicio" },
  { label: "Sobre", href: "/#sobre", value: "sobre" },
  { label: "Contos", href: "/#contos", value: "contos" },
  { label: "Contato", href: "/#contato", value: "contato" },
];

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setActiveSection(hash);
        return;
      }

      if (pathname === "/") {
        setActiveSection("inicio");
      }
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 sm:px-12 lg:px-20">
        <Link
          href="/#inicio"
          className="font-heading text-3xl tracking-[0.18em] text-zinc-950 transition-colors hover:text-[#A95633]"
          onClick={() => setActiveSection("inicio")}
        >
          CABRAL CORREIA
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
                activeSection === item.value ? "text-[#A95633]" : "text-zinc-950"
              }`}
              onClick={() => setActiveSection(item.value)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Abrir menu de navegação"
            >
              <span className="h-0.5 w-6 bg-zinc-950" />
              <span className="h-0.5 w-6 bg-zinc-950" />
              <span className="h-0.5 w-6 bg-zinc-950" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />

            <Dialog.Content className="fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white px-8 py-8 shadow-xl">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-heading text-2xl tracking-[0.18em] text-zinc-950">
                  MENU
                </Dialog.Title>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="text-3xl leading-none text-zinc-950"
                    aria-label="Fechar menu de navegação"
                  >
                    ×
                  </button>
                </Dialog.Close>
              </div>

              <nav className="mt-12 flex flex-col gap-8" aria-label="Menu mobile">
                {navigationItems.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-lg font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
                        activeSection === item.value
                          ? "text-[#A95633]"
                          : "text-zinc-950"
                      }`}
                      onClick={() => setActiveSection(item.value)}
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}