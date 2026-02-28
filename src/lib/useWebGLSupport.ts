"use client";

import { useState, useEffect } from "react";

type WebGLTier = "full" | "reduced" | "none";

export function useWebGLSupport(): WebGLTier {
  const [tier, setTier] = useState<WebGLTier>("none");

  useEffect(() => {
    // Check prefers-reduced-motion first
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setTier("none");
      return;
    }

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setTier("none");
        return;
      }

      // Check if mobile — default to reduced on mobile for battery
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        setTier("reduced");
        return;
      }

      setTier("full");
    } catch {
      setTier("none");
    }
  }, []);

  return tier;
}
