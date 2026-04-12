export default function Slide03() {
  return (
    <div className="w-full h-full relative flex flex-col bg-white">
      {/* Blue circle */}
      <div
        className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full z-0 flex flex-col items-center justify-center text-white"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #7dd3fc, #38bdf8 25%, #0ea5e9 55%, #0284c7 100%)",
        }}
      >
        <span className="text-[7vw] font-serif italic leading-none">
          <span className="font-bold">£1</span> to{" "}
          <span className="font-bold">5</span>
        </span>
        <span className="text-[5.5vw] font-serif italic leading-none mt-1">
          million
        </span>
        <span className="text-[1.3vw] mt-4 font-normal">
          per year just checking documents
        </span>
      </div>

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
            Pevio &gt; 3. THE PROBLEM
          </span>
        </div>
        <span className="text-[0.9vw] text-[#0C8CE9]">2026</span>
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10 px-[5%] py-[2%] flex flex-col">
        <h2 className="text-[2.2vw] font-normal mb-6">THE PROBLEM</h2>

        <div className="space-y-5 text-[1.2vw] text-gray-700 leading-relaxed max-w-[45%]">
          <p>
            &#8226; <strong>Cost:</strong> £1 to 5 million per year spent on
            manual diligence by mid market GPs.
          </p>

          <p>
            &#8226; <strong>Time:</strong> 500 to 1,100 or more hours spent on
            due diligence per deal. 75% of this workflow is still manual.
          </p>

          <p>
            &#8226; <strong>Fear:</strong> 73% of investors fear AI
            hallucinations. 66% worry about data privacy.
          </p>

          <p>
            &#8226; <strong>Limited Institutional Memory:</strong> Insights
            trapped in individual knowledge, lost when teams transition. No
            systematic way to learn from past IC decisions.
          </p>

          <p>
            <strong className="text-[#0C8CE9]">Conclusion:</strong> Investment
            teams across private markets need specialised intelligence they can
            trust and explain, a system that becomes smarter with every deal.
          </p>
        </div>

        {/* Sequoia quote callout */}
        <div className="mt-6 max-w-[50%] bg-gray-50 border-l-4 border-[#0C8CE9] rounded-r-lg px-[2%] py-[1.5%]">
          <p className="text-[1vw] italic text-gray-700 leading-relaxed">
            &ldquo;Applied Specialised Intelligence will define the next
            generation of B2B software winners.&rdquo;
          </p>
          <p className="text-[0.75vw] text-gray-500 mt-2 font-medium">
            &mdash; Konstantine Buhler, Partner, Sequoia Capital
          </p>
        </div>

        <div className="mt-auto max-w-[55%]">
          <p className="text-[0.5vw] text-gray-400 leading-relaxed">
            Sources: Preqin (2026), Novalsio (2026), Carta (2026).
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-[3%] py-[1%] z-20 relative">
        <span className="text-[0.6vw] text-gray-400">
          HMRC SEIS and EIS Advance Assurance granted February 2026
        </span>
        <span className="text-[0.9vw] text-[#0C8CE9] font-medium">3</span>
      </div>
    </div>
  );
}
