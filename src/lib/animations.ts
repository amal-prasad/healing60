"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

interface AnimationOptions {
  mobile?: boolean;
}

export function fadeInUp(
  element: string | Element,
  trigger?: string | Element,
  options: AnimationOptions = {}
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.mobile ? 0.6 : 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function fadeInStagger(
  elements: string | Element[],
  trigger?: string | Element,
  options: AnimationOptions = {}
) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: options.mobile ? 0.5 : 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || (typeof elements === "string" ? elements : elements[0]),
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function parallaxDepth(
  elements: (string | Element)[],
  speeds: number[],
  trigger?: string | Element
) {
  elements.forEach((el, i) => {
    gsap.to(el, {
      y: speeds[i] * 100,
      ease: "none",
      scrollTrigger: {
        trigger: trigger || el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
}

export function counterUp(
  element: string | Element,
  target: number,
  trigger?: string | Element
) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: trigger || element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    onUpdate: () => {
      const el =
        typeof element === "string"
          ? document.querySelector(element)
          : element;
      if (el) {
        el.textContent = Math.round(obj.val).toString();
      }
    },
  });
}

export function colorBlockTransition(
  section: string | Element,
  fromBg: string,
  toBg: string
) {
  return gsap.fromTo(
    section,
    { backgroundColor: fromBg },
    {
      backgroundColor: toBg,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    }
  );
}

export function horizontalScroll(container: string | Element) {
  const el =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!el) return;

  const scrollWidth = el.scrollWidth - el.clientWidth;

  return gsap.to(el, {
    x: -scrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: `+=${scrollWidth}`,
      scrub: 1,
      pin: true,
    },
  });
}

// Cleanup helper
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
