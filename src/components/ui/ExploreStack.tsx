"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useLenis } from "lenis/react";
import ExploreSection, {
  featureIcons,
  type ExploreContent,
} from "./Explore";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Scroll glide duration between panels (s) */
const NAV_DURATION = 0.9;

// Direction-aware panel swap: incoming rises from the scroll direction,
// outgoing leaves the opposite way. Exit is faster than enter so the two
// never linger blended on screen.
const panelVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction * 90,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction * -90,
    scale: 0.98,
    transition: { duration: 0.35, ease: "easeIn" as const },
  }),
};

const childFade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  },
});

/** The single visible panel. Mounted/unmounted by AnimatePresence, so only
 *  one panel (plus a briefly exiting one) ever exists — a half-scrolled
 *  position can never show two panels blended together. */
function PanelContent({
  data,
  index,
  total,
  progress,
}: {
  data: ExploreContent;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reverse = index % 2 === 1;
  const snap = index / (total - 1);
  const gap = 1 / (total - 1);
  // Gentle parallax on the photos while the section glides
  const imageY = useTransform(progress, [snap - gap, snap + gap], [30, -30]);

  return (
    <div
      className={`mx-auto flex w-full max-w-7xl items-center gap-10 lg:gap-16 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <motion.div {...childFade(0.12)} className="w-1/2">
        {data.eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            {data.eyebrow}
          </span>
        )}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          {data.title}
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-400" />

        <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
          {data.description}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:text-base">
          {data.content}
        </p>

        {data.features && data.features.length > 0 && (
          <ul className="mt-6 grid grid-cols-2 gap-2.5">
            {data.features.map((feature, i) => {
              const Icon = featureIcons[feature.icon];
              return (
                <motion.li
                  key={feature.text}
                  {...childFade(0.18 + i * 0.04)}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-50 text-green-700">
                    <Icon size={16} aria-hidden />
                  </span>
                  <span className="text-xs leading-snug text-gray-700 lg:text-sm">
                    {feature.text}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        )}
      </motion.div>

      {/* Images */}
      <motion.div {...childFade(0.05)} className="relative w-1/2">
        <motion.div style={{ y: imageY }} className="relative">
          <div
            aria-hidden
            className={`absolute -top-10 h-48 w-48 rounded-full bg-green-300/30 blur-3xl ${
              reverse ? "-right-8" : "-left-8"
            }`}
          />
          <div
            aria-hidden
            className={`absolute -bottom-12 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl ${
              reverse ? "-left-4" : "-right-4"
            }`}
          />

          <div className="group relative h-[48vh] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 lg:h-[54vh]">
            <Image
              src={data.mainImage}
              alt={data.title}
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div
            className={`absolute -bottom-6 h-[16vh] w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-2xl lg:h-[18vh] ${
              reverse ? "left-6" : "right-6"
            }`}
          >
            <Image
              src={data.subImage}
              alt={`${data.title} — detail view`}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ExploreStack({
  sections,
}: {
  sections: ExploreContent[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const total = sections.length;

  const [active, setActive] = useState(0);
  // Refs mirror state so the wheel listener never works from a stale closure
  const activeRef = useRef(0);
  const directionRef = useRef(1);
  const navigatingRef = useRef(false);
  const graceRef = useRef<number | null>(null);
  const failsafeRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const applyActive = (index: number) => {
    if (index === activeRef.current) return;
    directionRef.current = index > activeRef.current ? 1 : -1;
    activeRef.current = index;
    setActive(index);
  };

  // Safety net: keeps `active` in sync for inputs the wheel handler doesn't
  // cover (touch scrub, keyboard scrolling, scrollbar drag).
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (navigatingRef.current) return;
    applyActive(Math.max(0, Math.min(total - 1, Math.round(v * (total - 1)))));
  });

  const panelOffset = (i: number) => {
    const el = ref.current;
    if (!el) return 0;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const spacing = (el.offsetHeight - window.innerHeight) / (total - 1);
    return Math.round(top + i * spacing);
  };

  /** Swap the panel immediately and glide the scroll position to match.
   *  `lock: true` makes Lenis ignore further user input during the glide, so
   *  trackpad inertia can't drag the page past the target. */
  const navigateTo = (index: number) => {
    if (navigatingRef.current) return;
    const clamped = Math.max(0, Math.min(total - 1, index));
    navigatingRef.current = true;
    applyActive(clamped);

    const clearNav = (delay: number) => {
      if (graceRef.current) window.clearTimeout(graceRef.current);
      graceRef.current = window.setTimeout(() => {
        navigatingRef.current = false;
      }, delay);
    };

    // Failsafe in case onComplete never fires (e.g. resize mid-glide)
    if (failsafeRef.current) window.clearTimeout(failsafeRef.current);
    failsafeRef.current = window.setTimeout(() => {
      navigatingRef.current = false;
    }, NAV_DURATION * 1000 + 800);

    if (lenis) {
      lenis.scrollTo(panelOffset(clamped), {
        duration: NAV_DURATION,
        easing: easeInOutCubic,
        lock: true,
        onComplete: () => clearNav(250),
      });
    } else {
      window.scrollTo({ top: panelOffset(clamped), behavior: "smooth" });
      clearNav(NAV_DURATION * 1000);
    }
  };

  // Instant wheel navigation — no debounce, no waiting for scroll position:
  // the swap animation and the glide both start on the gesture itself.
  useEffect(() => {
    if (prefersReducedMotion || total < 2) return;
    const mql = window.matchMedia("(min-width: 768px)");

    const onWheel = (e: WheelEvent) => {
      if (!mql.matches || navigatingRef.current) return;
      const el = ref.current;
      if (!el) return;

      // Normalize line-mode deltas (some mice) and skip micro-jitters
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      if (Math.abs(delta) < 6) return;
      const dir = delta > 0 ? 1 : -1;

      const first = panelOffset(0);
      const spacing = (el.offsetHeight - window.innerHeight) / (total - 1);
      const last = first + spacing * (total - 1);
      const scrollY = lenis ? lenis.scroll : window.scrollY;
      if (scrollY < first - 2 || scrollY > last + 2) return; // not pinned → free scroll

      const rel = (scrollY - first) / spacing;
      const nearest = Math.round(rel);
      const parked = Math.abs(rel - nearest) * spacing < 4;

      if (parked) {
        const target = nearest + dir;
        // First panel + up, or last panel + down: hands scrolling back to
        // the page so the user can leave the section freely.
        if (target < 0 || target > total - 1) return;
        navigateTo(target);
      } else {
        // Drifting into the section with momentum: arrest at the nearest
        // panel first, then subsequent gestures step one panel at a time.
        navigateTo(nearest);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (graceRef.current) window.clearTimeout(graceRef.current);
      if (failsafeRef.current) window.clearTimeout(failsafeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, prefersReducedMotion, total]);

  // Pinned scroll-jacking is pure motion — fall back to plain stacked
  // sections for users who prefer reduced motion.
  if (prefersReducedMotion) {
    return (
      <div>
        {sections.map((section, i) => (
          <ExploreSection
            key={section.title}
            {...section}
            reverse={i % 2 === 1}
            muted={i % 2 === 1}
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <AnimatePresence custom={directionRef.current} initial={false}>
          <motion.div
            key={active}
            custom={directionRef.current}
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 flex items-center px-8 pt-16 lg:px-20 ${
              active % 2 === 1 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <PanelContent
              data={sections[active]}
              index={active}
              total={total}
              progress={scrollYProgress}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-3 lg:right-10">
          {sections.map((section, i) => (
            <button
              key={section.title}
              type="button"
              aria-label={`Go to ${section.title}`}
              aria-current={i === active}
              onClick={() => navigateTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "h-8 w-2 bg-green-600"
                  : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Panel counter */}
        <div className="absolute bottom-8 left-8 z-10 font-mono text-sm text-gray-400 lg:left-20">
          0{active + 1} <span className="text-gray-300">/ 0{total}</span>
        </div>
      </div>
    </div>
  );
}
