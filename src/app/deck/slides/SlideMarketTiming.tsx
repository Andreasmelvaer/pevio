import SlideShell from "./SlideShell";
import { BarChart3, Bot, Banknote, Scale, Trophy, AlertTriangle } from "lucide-react";

const catalysts = [
  {
    Icon: BarChart3,
    desc: "$2.1 trillion in PE deals in 2025, a four year high. 28,000 unsold portfolio companies creating exit side urgency.",
  },
  {
    Icon: Bot,
    desc: "86 percent of PE and M and A teams have GenAI integrated. 88 percent of PE firms have invested $1 million or more in GenAI for M and A teams.",
  },
  {
    Icon: Banknote,
    desc: "$1 billion deployed by a16z, Index, GV, and Viking into AI for finance in 2024 and 2025. The category is validated.",
  },
  {
    Icon: Scale,
    desc: "EU AI Act, August 2026: audit trails, transparency, and human oversight become mandatory. PEVio is compliant by design.",
  },
  {
    Icon: Trophy,
    desc: "No category leader yet: Hebbia serves the top 50 only. Datasite is integrating three acquisitions. The mid market is open.",
  },
];

export default function SlideMarketTiming() {
  return (
    <SlideShell section="MARKET TIMING" slideNum={7}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-[2vw] font-normal">MARKET TIMING</h2>
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-[0.9vw] font-semibold">
            ON TIME: Entering the Deployment Window
          </div>
        </div>

        {/* Five catalyst cards */}
        <div className="flex gap-[1.5%] mb-6 flex-1 max-h-[50%]">
          {catalysts.map((c, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-50 rounded-xl p-[2%] flex flex-col"
            >
              <c.Icon className="w-[1.5vw] h-[1.5vw] text-[#0C8CE9] mb-2" />
              <p className="text-[0.8vw] text-gray-600 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Risk/urgency line */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-[2%] mb-4">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-[1.2vw] h-[1.2vw] text-amber-500" />
            <span className="text-[0.85vw] font-semibold text-amber-700">Risk</span>
          </div>
          <p className="text-[0.9vw] text-gray-800">
            Window is narrowing. Datasite triple acquisition in 2025 signals
            consolidation beginning. PEVio has 18 to 24 months to establish mid
            market position before category leaders lock in. This is the optimal
            entry point.
          </p>
        </div>

        {/* Decision layer callout */}
        <div className="bg-[#0C8CE9]/5 border border-[#0C8CE9]/20 rounded-xl p-[2%]">
          <p className="text-[0.9vw] text-gray-800">
            <strong>The decision layer</strong> is now where investors and buyers
            care most. Analysis is becoming a commodity. Accountability,
            auditability, and institutional memory are the new battleground, and
            PEVio owns that layer.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
