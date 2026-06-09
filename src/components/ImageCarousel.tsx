"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSlot {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageSlot[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-lg bg-muted mb-8">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-contain"
          priority={current === 0}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-white shadow" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`スロット ${i + 1}`}
            />
          ))}
        </div>
      )}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="前へ"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="次へ"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
