import SlideShell from "./SlideShell";

const industryQuotes = [
  {
    text: "Smart firms report reducing due diligence timelines from weeks to days with AI.",
    source: "Copia Wealth",
  },
  {
    text: "AI adoption is now a strategic competitive factor shaping private equity value creation.",
    source: "EY Private Equity AI report",
  },
  {
    text: "AI promises faster insight but depends on transparency and governance.",
    source: "Atlan AI governance article",
  },
];

export default function Slide11() {
  return (
    <SlideShell section="11. TRACTION & INSIGHT" slideNum={11}>
      <div className="flex h-full">
        {/* Left column */}
        <div className="w-[35%] px-[4%] py-[3%]">
          <h2 className="text-[1.8vw] font-normal mb-8">
            Clear signals from
            <br />
            the market
          </h2>

          <ul className="space-y-4 text-[1.2vw] text-gray-700 mb-8">
            <li>
              &#8226; Surveyed <strong>20+ funds</strong> in the last 8 weeks.
            </li>
            <li>
              &#8226; Secured <strong>3 Pilots</strong> with mid-market GPs
            </li>
          </ul>

          <h3 className="text-[1.4vw] font-normal mb-4">Key insight</h3>
          <p className="text-[1.1vw] text-gray-700 leading-relaxed">
            Funds don&apos;t want generic AI tools - they want specialised
            intelligence that becomes{" "}
            <strong>
              part of their firm&apos;s decision infrastructure.
            </strong>{" "}
            PEVio learns each fund&apos;s thesis, constraints, and historical
            success patterns.
          </p>
        </div>

        {/* Right column */}
        <div className="w-[65%] py-[3%] pr-[4%]">
          {/* Industry quote cards */}
          <div className="flex gap-[2%] mb-6">
            {industryQuotes.map((q, i) => (
              <div
                key={i}
                className="flex-1 bg-gray-50 rounded-xl p-[2.5%] flex flex-col justify-between"
              >
                <p className="text-[1vw] italic text-gray-700 leading-relaxed">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="text-[0.7vw] text-gray-500 mt-3">{q.source}</p>
              </div>
            ))}
          </div>

          {/* Article screenshots + Sequoia quote */}
          <div className="flex gap-[2%] items-start">
            <div className="flex-1 aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/deck/screenshot-article.png"
                alt="Industry Article"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[35%] bg-gray-50 rounded-xl p-[3%]">
              <p className="text-[1vw] italic text-gray-800 font-semibold leading-relaxed">
                &ldquo;Applied Specialised Intelligence will define the next
                generation of B2B software winners.&rdquo;
              </p>
              <p className="text-[0.7vw] text-gray-500 mt-2">
                Sequoia Capital
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
