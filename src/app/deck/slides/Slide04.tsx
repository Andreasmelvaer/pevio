export default function Slide04() {
  return (
    <div className="w-full h-full relative flex flex-col bg-white">
      {/* Curtain bg on right half */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center z-0 opacity-15"
        style={{ backgroundImage: "url(/deck/header.jpg)" }}
      />

      {/* Top accent bar */}
      <div className="h-[0.4%] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 z-20 relative" />

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
            Pevio &gt; 4. THE SOLUTION
          </span>
        </div>
        <span className="text-[0.9vw] text-[#0C8CE9]">2026</span>
      </div>

      {/* Content — two column layout */}
      <div className="flex-1 relative z-10 px-[3%] py-[1.5%] flex overflow-hidden">
        {/* LEFT column */}
        <div className="w-1/2 pr-[2%] flex flex-col">
          {/* Opening paragraph */}
          <p className="text-[0.8vw] text-gray-700 leading-relaxed mb-[1.5%]">
            When a fund onboards PEVio, it immediately uploads its investment
            thesis, sector focus, return targets, risk tolerances, and historical
            IC memos: both the deals it invested in and the ones it passed on.
            From the very first deal, PEVio is already operating with the fund DNA
            embedded. It does not start from zero.
          </p>

          {/* Three phase value arc */}
          <div className="flex gap-[1.5%] mb-[1.5%]">
            <div className="flex-1 bg-blue-50 rounded-lg p-[1%]">
              <h4 className="text-[0.7vw] font-bold text-[#0C8CE9] mb-1">
                Phase 1: Immediate Value
              </h4>
              <p className="text-[0.65vw] text-gray-600 leading-snug">
                Upload VDR, receive source linked analysis overnight. Covenant
                risks, revenue anomalies, missing consents: all flagged and
                explained with document references.
              </p>
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-[1%]">
              <h4 className="text-[0.7vw] font-bold text-[#0C8CE9] mb-1">
                Phase 2: Fund Customisation
              </h4>
              <p className="text-[0.65vw] text-gray-600 leading-snug">
                PEVio learns the fund decision patterns. Each completed deal
                refines the model. IC feedback loops sharpen risk weighting and
                sector expertise.
              </p>
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-[1%]">
              <h4 className="text-[0.7vw] font-bold text-[#0C8CE9] mb-1">
                Phase 3: Compounding Intelligence
              </h4>
              <p className="text-[0.65vw] text-gray-600 leading-snug">
                Cross deal pattern recognition. Portfolio monitoring intelligence.
                Exit readiness scoring. The system becomes the institutional memory
                of the fund.
              </p>
            </div>
          </div>

          {/* Compounding value callout */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-[1%] mb-[1.5%]">
            <p className="text-[0.7vw] font-semibold text-gray-900 mb-1">
              Compounding Value
            </p>
            <p className="text-[0.65vw] text-gray-600 leading-snug">
              Every deal makes PEVio smarter about the fund. Every IC decision
              refines the model. Every pass sharpens the filter. This is not a
              tool you use, it is a system that grows with you.
            </p>
          </div>

          {/* LP Loop callout */}
          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-[1%]">
            <p className="text-[0.7vw] font-semibold text-gray-900 mb-1">
              The LP Loop
            </p>
            <p className="text-[0.65vw] text-gray-600 leading-snug">
              LPs increasingly require explainable, auditable due diligence.
              PEVio provides source linked reporting that satisfies LP scrutiny
              and regulatory requirements. Better diligence quality leads to
              stronger LP confidence, which leads to faster fundraising cycles.
            </p>
          </div>
        </div>

        {/* RIGHT column — Why Investment Teams Trust PEVio + Product Pillars */}
        <div className="w-1/2 pl-[2%] flex flex-col">
          <h3 className="text-[0.9vw] font-bold text-gray-900 mb-[1.5%]">
            Why Investment Teams Trust PEVio
          </h3>

          {/* Four product pillar cards — 2x2 grid */}
          <div className="grid grid-cols-2 gap-[1%] mb-[1.5%]">
            <div className="bg-white border border-gray-200 rounded-lg p-[1%] shadow-sm">
              <p className="text-[0.65vw] font-bold text-[#0C8CE9] mb-0.5">
                Due Diligence Engine
              </p>
              <p className="text-[0.6vw] text-gray-500 leading-snug">
                Source linked analysis across financial, legal, commercial, ESG,
                and operational dimensions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-[1%] shadow-sm">
              <p className="text-[0.65vw] font-bold text-[#0C8CE9] mb-0.5">
                Deal Screening
              </p>
              <p className="text-[0.6vw] text-gray-500 leading-snug">
                Rapid initial assessment against fund thesis. Score and rank
                opportunities before committing resources.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-[1%] shadow-sm">
              <p className="text-[0.65vw] font-bold text-[#0C8CE9] mb-0.5">
                Portfolio Monitoring
              </p>
              <p className="text-[0.6vw] text-gray-500 leading-snug">
                Ongoing covenant tracking, performance alerts, and risk flag
                detection across the portfolio.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-[1%] shadow-sm">
              <p className="text-[0.65vw] font-bold text-[#0C8CE9] mb-0.5">
                Exit Readiness
              </p>
              <p className="text-[0.6vw] text-gray-500 leading-snug">
                Vendor DD preparation. Identify and resolve issues before buyer
                scrutiny begins.
              </p>
            </div>
          </div>

          {/* Key differentiators */}
          <div className="bg-[#0C8CE9]/5 border border-[#0C8CE9]/20 rounded-lg p-[1.2%] flex-1">
            <p className="text-[0.7vw] font-semibold text-[#0C8CE9] mb-2">
              Key Differentiators
            </p>
            <ul className="space-y-1.5 text-[0.65vw] text-gray-600 leading-snug">
              <li>&#8226; <strong>Source linked:</strong> Every insight traceable to the original document.</li>
              <li>&#8226; <strong>Fund DNA embedded:</strong> Configured to each fund thesis, not generic.</li>
              <li>&#8226; <strong>IC Decision Layer:</strong> Captures why decisions were made, not just what was found.</li>
              <li>&#8226; <strong>Audit ready:</strong> Full compliance trail for LP reporting and regulatory scrutiny.</li>
              <li>&#8226; <strong>Human in the loop:</strong> AI assists, investment professionals decide.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3%] py-[1%] z-20 relative">
        <span className="text-[0.6vw] text-gray-400">
          HMRC SEIS and EIS Advance Assurance granted February 2026
        </span>
        <span className="text-[0.9vw] text-[#0C8CE9] font-medium">4</span>
      </div>
    </div>
  );
}
