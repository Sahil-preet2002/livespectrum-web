import { useEffect, RefObject } from "react";
import gsap from "gsap";

// Sun faces ([data-sunny-face]) inside `rootRef` look at the cursor.
export function useSunFace(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const faces = Array.from(root.querySelectorAll<SVGElement>("[data-sunny-face]"));
    gsap.set(faces, { xPercent: -50, yPercent: -50 });
    const movers = faces.map((el) => ({
      el,
      setX: gsap.quickTo(el, "xPercent", { duration: 0.4, ease: "power3" }),
      setY: gsap.quickTo(el, "yPercent", { duration: 0.4, ease: "power3" }),
    }));

    const onMove = (e: MouseEvent) => {
      movers.forEach(({ el, setX, setY }) => {
        const r = el.getBoundingClientRect();
        let nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        let ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        const mag = Math.hypot(nx, ny);
        if (mag > 1) {
          nx /= mag;
          ny /= mag;
        }
        setX(-50 + nx * 66);
        setY(-50 + ny * 66);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rootRef]);
}
