"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import css from "@/app/page.module.css";

// three.js is heavy, so the badge is code-split and only requested on desktop.
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

const DESKTOP_QUERY = "(min-width: 1024px)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  window.addEventListener("resize", onChange);
  return () => {
    query.removeEventListener("change", onChange);
    window.removeEventListener("resize", onChange);
  };
};

// 0 on mobile/tablet; otherwise the page width, used to place the strap.
const getWidth = () =>
  window.matchMedia(DESKTOP_QUERY).matches
    ? document.documentElement.clientWidth
    : 0;

// The canvas spans the whole hero so a swinging badge is never clipped, but the
// strap stays centred in the right-hand column (the 1400px container minus
// its 2rem gutter, column width clamp(340px, 36vw, 520px)).
const anchorFor = (width: number) => {
  const gutter = Math.max(32, (width - 1400) / 2 + 32);
  const column = Math.min(520, Math.max(340, width * 0.36));
  return (width - gutter - column / 2) / width;
};

export default function HeroLanyard() {
  const width = useSyncExternalStore(subscribe, getWidth, () => 0);

  if (!width) return null;

  return (
    <div className={css["hero-lanyard"]}>
      <Lanyard
        frontImage="/images/lanyard-front.webp"
        strapImage="/images/lanyard-strap.png"
        strapColor="#1a1a18"
        cardColor="#ffffff"
        finish="glossy"
        metal="graphite"
        size={0.5}
        strapLength={0.45}
        anchor={anchorFor(width)}
      />
    </div>
  );
}
