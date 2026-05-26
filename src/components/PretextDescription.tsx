"use client";

import { layout, prepare } from "@chenglou/pretext";
import { useLayoutEffect, useRef, useState } from "react";

const FONT = "400 14px Inter, ui-sans-serif, system-ui, sans-serif";
const LINE_HEIGHT = 20;

type PretextDescriptionProps = {
  text: string;
  className?: string;
  maxLines?: number;
};

export default function PretextDescription({
  text,
  className = "",
  maxLines,
}: PretextDescriptionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number | undefined>(() =>
    maxLines != null ? maxLines * LINE_HEIGHT : undefined
  );

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.offsetWidth;
      if (width <= 0) return;

      const prepared = prepare(text, FONT);
      const { height } = layout(prepared, width, LINE_HEIGHT);
      const reservedHeight =
        maxLines != null ? maxLines * LINE_HEIGHT : height;

      setMinHeight(reservedHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [text, maxLines]);

  const clampClass = maxLines === 2 ? "line-clamp-2" : "";

  return (
    <div ref={containerRef} style={minHeight != null ? { minHeight } : undefined}>
      <p className={[className, clampClass].filter(Boolean).join(" ")}>{text}</p>
    </div>
  );
}
