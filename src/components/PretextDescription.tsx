"use client";

import { layout, prepare } from "@chenglou/pretext";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

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
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
  const prepared = useMemo(() => prepare(text, FONT), [text]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.offsetWidth;
      if (width <= 0) return;

      const { height } = layout(prepared, width, LINE_HEIGHT);
      const reservedHeight =
        maxLines != null ? maxLines * LINE_HEIGHT : height;

      setMinHeight(reservedHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [prepared, maxLines]);

  const clampClass = maxLines === 2 ? "line-clamp-2" : "";

  return (
    <div ref={containerRef} style={minHeight != null ? { minHeight } : undefined}>
      <p className={[className, clampClass].filter(Boolean).join(" ")}>{text}</p>
    </div>
  );
}
