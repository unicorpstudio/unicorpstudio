import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand ${large ? "brand-large" : ""}`} aria-hidden="true">
      <img src="/brand/logo-symbol.svg" alt="" width="75" height="25" />
      <img src="/brand/logo-wordmark.svg" alt="" width="74" height="19" />
    </span>
  );
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <img
      className={`arrow ${diagonal ? "diagonal" : ""}`}
      src={`/brand/arrow-${diagonal ? "diagonal" : "right"}.svg`}
      width="22"
      height="16"
      alt=""
      aria-hidden="true"
    />
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
export function BookingLink({
  children = "Parlons de votre projet",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  return (
    <ButtonLink href={site.bookingUrl} variant={variant} className={className}>
      {children}
    </ButtonLink>
  );
}
export function Label({
  children,
  green = false,
}: {
  children: ReactNode;
  green?: boolean;
}) {
  return (
    <span className={`eyebrow ${green ? "eyebrow-green" : ""}`}>
      {children}
    </span>
  );
}
export function SectionHeading({
  label,
  title,
  text,
  centered = false,
}: {
  label: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <Label>{label}</Label>
      <div className="heading-copy">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <img
            src="/brand/check.svg"
            width="14"
            height="14"
            alt=""
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
export function ClosingCTA() {
  return (
    <section
      className="closing section container"
      aria-labelledby="closing-title"
    >
      <Label green>La suite commence par une conversation</Label>
      <h2 id="closing-title">
        Voyons ce que votre marque
        <br className="desktop-break" /> pourrait devenir.
      </h2>
      <div className="closing-bottom">
        <p>
          Parlez-nous de votre entreprise et de ce qui vous freine aujourd’hui.
          En 30 minutes, nous verrons ensemble si notre approche répond à votre
          besoin.
        </p>
        <BookingLink />
        <span className="small-note">30 minutes · sans engagement</span>
      </div>
    </section>
  );
}
