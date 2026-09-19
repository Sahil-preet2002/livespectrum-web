"use client";

import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export default function Meteors({ number = 20, className = "" }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: "-10px",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 2 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 5 + 3) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          style={style}
          className="pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-amber-400 shadow-[0_0_0_1px_#ffffff10]"
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-amber-400 to-transparent" />
        </span>
      ))}
    </div>
  );
}
