import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Déclenche trackSlideView(slideName) la **première** fois que
 * la slide devient visible (par défaut ≥ 50 % de surface visible).
 */
export function useTrackSlideView(
  slideName: string,
  options: Parameters<typeof useInView>[1] = {}
) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    amount: 0.5, // 50 %
    once: true,  // pas de double-comptage
    ...options,
  });

  useEffect(() => {
    if (isInView) {
      trackSlideView(slideName);
    }
  }, [isInView, slideName]);

  return ref;
}
