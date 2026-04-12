export default function Slide01() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/deck/header.jpg)" }}
      />
      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 40% 45%, transparent 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 text-center max-w-[80%] flex flex-col items-center">
        {/* PEVio logo */}
        <div className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo_white.png" alt="PEVio" className="h-[2.5vw]" />
        </div>

        <p className="text-[1.4vw] text-white/80 leading-relaxed mb-2">
          Applied Specialised Intelligence for Private Equity
        </p>

        <p className="text-[1.15vw] text-white/60 leading-relaxed mb-8">
          Private Equity &middot; Corporate M and A &middot; Investment Banking
        </p>

        {/* Proof points */}
        <div className="flex items-center gap-[1.5vw] text-[0.85vw] text-white/60 mb-4">
          <span>MVP live on real deal data</span>
          <span className="text-white/30">&#8226;</span>
          <span>3 LOIs signed</span>
          <span className="text-white/30">&#8226;</span>
          <span>SEIS and EIS Advance Assurance granted February 2026</span>
        </div>

        {/* Raise line */}
        <div className="text-[0.95vw] text-white/50">
          Raising £2 million
        </div>
      </div>

      <p className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-[0.9vw] text-white/30 z-10">
        2026
      </p>
    </div>
  );
}
