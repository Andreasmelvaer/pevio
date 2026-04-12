export default function SlideShell({
  children,
  section,
  slideNum,
  bg = "white",
  fullBleed = false,
}: {
  children: React.ReactNode;
  section: string;
  slideNum: number;
  bg?: string;
  fullBleed?: boolean;
}) {
  return (
    <div
      className="w-full h-full relative flex flex-col"
      style={{ backgroundColor: bg }}
    >
      {/* Top accent bar */}
      <div className="h-[0.4%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 z-20" />

      {/* Header */}
      <div className="flex items-center justify-between px-[3%] py-[1.2%] z-20 relative">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck/miniP.png"
            alt="P"
            className="w-[1.8vw] h-[1.8vw]"
          />
          <span className="text-[0.9vw] text-[#0C8CE9] font-medium">
            Pevio &gt; {section}
          </span>
        </div>
        <span className="text-[0.9vw] text-[#0C8CE9]">2026</span>
      </div>

      {/* Content - fullBleed allows children to overflow behind header/footer */}
      {fullBleed ? (
        <div className="flex-1 relative">{children}</div>
      ) : (
        <div className="flex-1 relative overflow-hidden">{children}</div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between px-[3%] py-[1%] z-20 relative">
        <span className="text-[0.6vw] text-gray-400">
          HMRC SEIS and EIS Advance Assurance granted February 2026
        </span>
        <span className="text-[0.9vw] text-[#0C8CE9] font-medium">
          {slideNum}
        </span>
      </div>
    </div>
  );
}
