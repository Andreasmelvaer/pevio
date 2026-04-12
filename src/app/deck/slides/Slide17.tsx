import SlideShell from "./SlideShell";

const horizons = [
  {
    id: "H1",
    period: "Now to 12 months",
    title: "Deploy ASI for Due Diligence",
    items: [
      "Convert paid LOIs into first 3 to 5 paying funds.",
      "Harden ASI architecture, security, and audit trail for IC and LP scrutiny.",
      "Deepen the decision engine by codifying PE-specific business logic into the model.",
      "Achieve SOC 2 Type II certification.",
    ],
    geo: "UK and London, DACH region.",
    color: "border-[#0C8CE9]",
    bg: "bg-[#0C8CE9]/5",
  },
  {
    id: "H2",
    period: "12 to 24 months",
    title: "From Deals to Portfolios",
    items: [
      "Extend from single-deal diligence to portfolio monitoring and anomaly detection across funds.",
      "Deepen fund-specific learning to embed each fund decision DNA and increase switching costs.",
      "Launch LP reporting module with audit-ready decision trails.",
    ],
    geo: "US Northeast, Nordics.",
    color: "border-amber-400",
    bg: "bg-amber-50/30",
  },
  {
    id: "H3",
    period: "24 months plus",
    title: "Full Lifecycle Decision Infrastructure",
    items: [
      "Add exit readiness and valuation modules to cover the complete investment lifecycle.",
      "Integrate with core GP systems so PEVio becomes the system of record for IC decisions and LP reporting.",
      "Marketplace for specialised diligence templates and third-party data connectors.",
    ],
    geo: "France, Benelux, APAC.",
    color: "border-green-400",
    bg: "bg-green-50/30",
  },
];

export default function Slide17() {
  return (
    <SlideShell section="ROADMAP: NEXT 24 MONTHS" slideNum={18}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.8vw] font-normal mb-6">
          <span className="text-[#0C8CE9] font-semibold">Roadmap:</span> Next 24 Months
        </h2>

        {/* Three horizons */}
        <div className="flex items-stretch gap-[2%] flex-1 min-h-0">
          {horizons.map((h, i) => (
            <div key={h.id} className="flex items-stretch gap-[1%]">
              <div
                className={`flex-1 border-2 ${h.color} rounded-xl p-[1.5vw] ${h.bg} flex flex-col`}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[1vw] font-bold text-[#0C8CE9]">{h.id}</span>
                  <span className="text-[0.7vw] text-gray-500">{h.period}</span>
                </div>
                <h3 className="text-[0.95vw] font-bold mb-3">{h.title}</h3>
                <ul className="space-y-2 text-[0.75vw] text-gray-600 leading-snug flex-1">
                  {h.items.map((item, j) => (
                    <li key={j}>&#8226; {item}</li>
                  ))}
                </ul>
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <p className="text-[0.65vw] text-gray-500">
                    <span className="font-semibold">Geography:</span> {h.geo}
                  </p>
                </div>
              </div>
              {i < horizons.length - 1 && (
                <div className="flex items-center text-gray-300 text-[1.5vw]">&#8594;</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
