"use client";

import { useState } from "react";
import Image from "next/image";

interface Banner {
  id: string;
  title: string;
  image: { url: string; alt?: string };
  link?: string | null;
}

interface BannerSlotProps {
  banners: Banner[];
  variant: "sidebar" | "top";
  title?: string;
}

export function BannerSlot({ banners, variant, title }: BannerSlotProps) {
  const [current, setCurrent] = useState(0);

  if (banners.length === 0) return null;

  const currentBanner = banners[current];

  const inner = (
    <div className="relative overflow-hidden rounded-lg bg-muted">
      {variant === "sidebar" ? (
        <div className="relative aspect-square w-full">
          <Image
            src={currentBanner.image.url}
            alt={currentBanner.image.alt || currentBanner.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={currentBanner.image.url}
            alt={currentBanner.image.alt || currentBanner.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <p className="text-white text-xs font-bold">{title}</p>
        </div>
      )}
      {banners.length > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  if (currentBanner.link) {
    return (
      <a href={currentBanner.link} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
