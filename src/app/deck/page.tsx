"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Menu,
  Maximize,
  Download,
  ArrowLeft,
  ArrowRight,
  Loader2,
} from "lucide-react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

const PDF_URL = "/deck/PEVio_Investor_Deck.pdf";

const slideTitles = [
  "Cover",
  "Core Use Case",
  "The Problem",
  "The Solution",
  "How It Works",
  "Why PEVio Is Different",
  "Market Timing",
  "Beyond Due Diligence",
  "Market Opportunity",
  "Progressive Specialisation",
  "Traction and Validation",
  "What A Pilot Looks Like",
  "Financial Projections",
  "Competitive Positioning",
  "The Team",
  "Use of Funds",
  "Roadmap",
  "The Ask",
  "Appendix A: Glossary",
  "Appendix B: Geography",
  "Appendix C: Security",
];

export default function DeckViewer() {
  const [current, setCurrent] = useState(0);
  const [numPages, setNumPages] = useState<number>(slideTitles.length);
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const touchStart = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = numPages;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setCurrent(index);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Track viewport size for responsive PDF rendering */
  useEffect(() => {
    const updateSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        setNavOpen(false);
      } else if (e.key === "g" || e.key === "G") {
        setNavOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  /* Touch / swipe */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "PEVio_Investor_Deck.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* Calculate the PDF page width to fit 16:9 within the viewport */
  const computePageWidth = () => {
    const vw = viewportSize.width;
    const vh = viewportSize.height;
    if (!vw || !vh) return 960;

    const aspectRatio = 16 / 9;
    let width = vw;
    let height = vw / aspectRatio;

    if (height > vh) {
      height = vh;
      width = vh * aspectRatio;
    }

    return Math.round(width * 0.95);
  };

  const pageWidth = computePageWidth();

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center deck-viewer select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* PDF Slide display */}
      <div className="relative w-full h-full flex items-center justify-center">
        <PDFViewer
          url={PDF_URL}
          pageNumber={current + 1}
          width={pageWidth}
          onLoadSuccess={(pages: number) => {
            setNumPages(pages);
            setLoading(false);
          }}
        />
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-4">
          <Loader2 size={36} className="animate-spin text-[#0C8CE9]" />
          <span className="text-white/50 text-sm">Loading deck…</span>
        </div>
      )}

      {/* Slide navigator sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-[260px] bg-black/90 backdrop-blur-sm z-30 transform transition-transform duration-300 overflow-y-auto no-print ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              Slides
            </h3>
            <button
              onClick={() => setNavOpen(false)}
              className="text-white/40 hover:text-white/80 text-lg"
            >
              &times;
            </button>
          </div>
          <div className="space-y-1">
            {slideTitles.slice(0, totalSlides).map((title, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  setNavOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  i === current
                    ? "bg-[#0C8CE9]/20 text-[#0C8CE9]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <span className="text-xs font-mono opacity-50 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>
      {navOpen && (
        <div
          className="fixed inset-0 z-20 no-print"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Top-left controls */}
      <div className="fixed top-4 left-4 z-20 flex items-center gap-2 no-print">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90 flex items-center justify-center transition-colors"
          title="Slide navigator (G)"
        >
          <Menu size={16} />
        </button>
      </div>

      {/* Top-right controls */}
      <div className="fixed top-4 right-4 z-20 flex items-center gap-2 no-print">
        <button
          onClick={toggleFullscreen}
          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90 flex items-center justify-center transition-colors"
          title="Fullscreen"
        >
          <Maximize size={16} />
        </button>
        <button
          onClick={handleDownloadPDF}
          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90 flex items-center justify-center transition-colors"
          title="Download PDF"
        >
          <Download size={16} />
        </button>
      </div>

      {/* Invisible prev/next click zones */}
      <button
        onClick={prev}
        className="fixed left-0 top-0 w-1/4 h-full cursor-w-resize z-10 opacity-0 no-print"
        aria-label="Previous slide"
      />
      <button
        onClick={next}
        className="fixed right-0 top-0 w-1/4 h-full cursor-e-resize z-10 opacity-0 no-print"
        aria-label="Next slide"
      />

      {/* Bottom navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 no-print">
        <button
          onClick={prev}
          disabled={current === 0}
          className="text-white/40 hover:text-white/80 disabled:opacity-20 transition-colors text-sm"
        >
          <ArrowLeft size={14} />
        </button>
        <span className="text-white/50 text-sm font-mono tabular-nums">
          {current + 1} / {totalSlides}
        </span>
        <button
          onClick={next}
          disabled={current === totalSlides - 1}
          className="text-white/40 hover:text-white/80 disabled:opacity-20 transition-colors text-sm"
        >
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20 no-print">
        <div
          className="h-full bg-[#0C8CE9] transition-all duration-300"
          style={{
            width: `${((current + 1) / totalSlides) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
