import SlideShell from "./SlideShell";

const markets = [
  {
    priority: "P1: Launch",
    markets: [
      { market: "UK / London", rationale: "Largest PE hub in Europe. Strong regulatory clarity, SEIS and EIS eligibility, English-language VDRs." },
      { market: "DACH", rationale: "Deep mid-market PE ecosystem. High compliance bar creates demand for structured, auditable diligence." },
    ],
  },
  {
    priority: "P2: Year 2 to 3",
    markets: [
      { market: "US Northeast", rationale: "Largest global PE market. New York and Boston concentrate fund headquarters and deal flow." },
      { market: "Nordics", rationale: "Founder network advantage. Active mid-market with strong governance culture and digital adoption." },
    ],
  },
  {
    priority: "P3: Year 3+",
    markets: [
      { market: "France / Benelux", rationale: "Growing mid-market PE activity. EU AI Act compliance becomes a differentiator for PEVio." },
      { market: "APAC", rationale: "Emerging PE markets in Singapore and Australia. English-language deal flow and regulatory alignment." },
    ],
  },
];

export default function SlideAppendixGeography() {
  return (
    <SlideShell section="APPENDIX B: GEOGRAPHIC ROLLOUT" slideNum={20}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.4vw] font-normal mb-4">Geographic Rollout Plan</h2>

        <table className="w-full text-[0.8vw] border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 px-3 text-gray-500 font-semibold w-[15%]">Priority</th>
              <th className="text-left py-2 px-3 text-gray-500 font-semibold w-[20%]">Market</th>
              <th className="text-left py-2 px-3 text-gray-500 font-semibold">Rationale</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {markets.map((group) =>
              group.markets.map((m, i) => (
                <tr key={m.market} className="border-b border-gray-100">
                  {i === 0 ? (
                    <td
                      className="py-2 px-3 font-bold text-[#0C8CE9] align-top"
                      rowSpan={group.markets.length}
                    >
                      {group.priority}
                    </td>
                  ) : null}
                  <td className="py-2 px-3 font-semibold">{m.market}</td>
                  <td className="py-2 px-3">{m.rationale}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
}
