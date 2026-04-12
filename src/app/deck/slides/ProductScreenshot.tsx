"use client";

import { useState } from "react";

export default function ProductScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[3vw] h-[3vw] rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[1.2vw] mb-3">
          P
        </div>
        <p className="text-[0.8vw] text-gray-400">{alt}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-start justify-end">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-w-none h-full object-cover object-left-top rounded-lg shadow-2xl"
        onError={() => setError(true)}
      />
    </div>
  );
}
