import SlideShell from "./SlideShell";

export default function Slide06() {
  return (
    <SlideShell section="6. WHY PEVIO IS DIFFERENT" slideNum={6}>
      <div className="flex h-full">
        {/* Left column */}
        <div className="w-[50%] px-[5%] py-[3%]">
          <h2 className="text-[2vw] font-light leading-tight mb-8">
            Applied Specialised Intelligence
            <br />
            vs General AI Tools
          </h2>

          {/* Three column comparison */}
          <div className="grid grid-cols-3 gap-[1vw] mb-6">
            {/* Generic AI */}
            <div className="bg-gray-50 rounded-lg p-[0.8vw]">
              <h4 className="text-[0.85vw] font-bold text-gray-500 mb-2">
                Generic AI
              </h4>
              <ul className="space-y-2 text-[0.75vw] text-gray-600 leading-snug">
                <li>Broad but shallow</li>
                <li>Speed focused</li>
                <li>One size fits all analysis</li>
                <li>Static models</li>
                <li>No institutional memory</li>
              </ul>
            </div>

            {/* Point Solutions */}
            <div className="bg-gray-50 rounded-lg p-[0.8vw]">
              <h4 className="text-[0.85vw] font-bold text-gray-500 mb-2">
                Point Solutions
              </h4>
              <ul className="space-y-2 text-[0.75vw] text-gray-600 leading-snug">
                <li>Manage workflow steps, not decisions</li>
                <li>No institutional memory</li>
                <li>Single dimension analysis</li>
                <li>No cross deal learning</li>
                <li>Limited explainability</li>
              </ul>
            </div>

            {/* PEVio ASI */}
            <div className="bg-blue-50 border border-[#0C8CE9]/20 rounded-lg p-[0.8vw]">
              <h4 className="text-[0.85vw] font-bold text-[#0C8CE9] mb-2">
                PEVio ASI
              </h4>
              <ul className="space-y-2 text-[0.75vw] text-gray-700 leading-snug">
                <li>Deep PE expertise</li>
                <li>Trust and explainability focused</li>
                <li>Learns the fund decision DNA</li>
                <li>Gets smarter with every deal</li>
                <li>Multi model orchestration: specialised LLMs debate and
                  reach consensus, reducing hallucination risk</li>
              </ul>
            </div>
          </div>

          <p className="text-[1.1vw] text-gray-800 leading-relaxed mb-4">
            As general AI commoditises, specialised intelligence becomes more
            valuable.{" "}
            <strong>PEVio is the Harvey* for private equity.</strong>
          </p>

          <p className="text-[0.6vw] text-gray-400">
            *Harvey is the leading generative AI platform for legal
            professionals, used by over 1,000 law firms
          </p>
        </div>

        {/* Right - product screenshot */}
        <div className="w-[50%] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck/screenshot-dashboard.png"
            alt="PEVio Dashboard"
            className="absolute top-0 left-0 w-[110%] h-full object-cover object-left-top"
          />
        </div>
      </div>
    </SlideShell>
  );
}
