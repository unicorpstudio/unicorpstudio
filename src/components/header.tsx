"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Brand, BookingLink } from "./ui";
import { navigation } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand-link"
          href="/"
          aria-label="Unicorp Studio, accueil"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <BookingLink>Discutons de votre projet</BookingLink>
        </div>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navigation mobile"
        hidden={!open}
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/audit" onClick={() => setOpen(false)}>
          Évaluer ma marque
        </Link>
        <BookingLink />
      </nav>
    </header>
  );
}
