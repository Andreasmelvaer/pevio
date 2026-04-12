import SlideShell from "./SlideShell";
import { FileText, Search, CheckCircle, BarChart3, Shield } from "lucide-react";

const flowSteps = [
  { Icon: FileText, label: "Documents", competitor: true },
  { Icon: Search, label: "Analysis", competitor: true },
  { Icon: CheckCircle, label: "Decision Record", pevio: true },
  { Icon: BarChart3, label: "LP Reporting", pevio: true },
];

const tiers = [
  {
    tier: 1,
    borderColor: "border-red-300",
    bgColor: "bg-red-50/30",
    label: "Tier 1: Direct Overlap",
    competitors: [
      {
        name: "V7 Go",
        desc: "Document extraction for PE. Strong at parsing VDR content, but no decision layer or IC workflow.",
      },
      {
        name: "Datasite / Blueflame AI",
        desc: "VDR incumbents adding AI features. Deep distribution, but AI is bolted on, not native to diligence.",
      },
    ],
  },
  {
    tier: 2,
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50/30",
    label: "Tier 2: Adjacent",
    competitors: [
      {
        name: "Hebbia",
        desc: "Horizontal document AI. Powerful search, but no PE-specific logic, IC templates, or fund memory.",
      },
      {
        name: "AlphaSense",
        desc: "Market intelligence platform. Useful for research, not for structured deal diligence or decision capture.",
      },
    ],
  },
  {
    tier: 3,
    borderColor: "border-green-300",
    bgColor: "bg-green-50/30",
    label: "Tier 3: Legal / Compliance",
    competitors: [
      {
        name: "73 Strings",
        desc: "Valuation and portfolio analytics for LPs. Complementary, not competitive. No diligence workflow.",
      },
      {
        name: "Harvey / Kira / Luminance",
        desc: "Legal AI for contract review. Strong in law firms, but not built for PE investment committees.",
      },
    ],
  },
];

export default function Slide12() {
  return (
    <SlideShell section="COMPETITIVE POSITIONING" slideNum={14}>
      <div className="px-[4%] py-[1.5%] h-full flex flex-col">
        {/* Part A: Positioning map flow */}
        <div className="flex items-center justify-center gap-[0.6vw] mb-2">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-[0.6vw]">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-[4.5vw] h-[4.5vw] rounded-xl flex items-center justify-center ${
                    step.pevio
                      ? "bg-[#0C8CE9] text-white"
                      : "bg-gray-50 text-gray-400 border border-gray-200"
                  }`}
                >
                  <step.Icon className="w-[1.8vw] h-[1.8vw]" />
                </div>
                <span className="text-[0.65vw] text-gray-600 font-medium">
                  {step.label}
                </span>
                <span className="text-[0.55vw] text-gray-400">
                  {step.competitor ? "Competitors stop here" : "PEVio owns this"}
                </span>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="text-gray-300 text-[1vw] mb-6">&#8594;</div>
              )}
            </div>
          ))}
        </div>

        {/* Competitor labels */}
        <div className="flex justify-center gap-[6vw] mb-2">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/deck/thecompetition.png"
              alt="Competitors"
              className="h-[1.2vw] mx-auto"
            />
          </div>
        </div>

        {/* Part B: Tiered competitor cards */}
        <div className="flex gap-[1.5%] flex-1 min-h-0">
          {tiers.map((tier) => (
            <div
              key={tier.tier}
              className={`flex-1 ${tier.bgColor} border ${tier.borderColor} rounded-xl p-[1.2%] flex flex-col`}
            >
              <p className="text-[0.6vw] font-bold text-gray-500 mb-1 uppercase tracking-wide">
                {tier.label}
              </p>
              <div className="flex flex-col gap-[0.8vw] flex-1">
                {tier.competitors.map((c) => (
                  <div key={c.name} className="bg-white/70 rounded-lg p-[0.8vw]">
                    <p className="text-[0.75vw] font-bold text-gray-800 mb-0.5">
                      {c.name}
                    </p>
                    <p className="text-[0.65vw] text-gray-600 leading-snug">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gold moat callout */}
        <div className="mt-2 bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-300/40 rounded-xl px-[2%] py-[1%] flex items-center gap-[1.5%]">
          <div className="w-[2vw] h-[2vw] rounded-full bg-amber-200/50 flex items-center justify-center flex-shrink-0">
            <Shield className="w-[1vw] h-[1vw] text-amber-700" />
          </div>
          <p className="text-[0.7vw] text-gray-700 leading-snug">
            As document AI commoditises, the moat deepens. PEVio is not another extraction tool.
            It is the <span className="text-[#0C8CE9] font-semibold">system of record</span> for
            fund policy, investment judgement, and accountability. Every decision logged makes the
            platform harder to replace.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
