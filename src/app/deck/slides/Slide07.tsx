import SlideShell from "./SlideShell";

export default function Slide07() {
  return (
    <SlideShell section="8. BEYOND DUE DILIGENCE" slideNum={8}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.8vw] font-normal mb-2">
          BEYOND DUE DILIGENCE
        </h2>
        <p className="text-[1.2vw] text-[#0C8CE9] mb-6">
          ASI Across the Complete Investment Lifecycle
        </p>

        {/* Three phases */}
        <div className="flex items-stretch gap-[2%] flex-1 max-h-[50%]">
          {/* Phase 1 */}
          <div className="flex-1 border border-gray-200 rounded-xl p-[2%] flex flex-col">
            <h3 className="text-[1.3vw] font-bold mb-4">Due Diligence</h3>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>&#8226; Source linked briefs in hours, not weeks</li>
              <li>&#8226; Anomaly detection across financial and operational data</li>
              <li>&#8226; Investment Score calibrated to fund thesis</li>
              <li>&#8226; IC ready materials with full audit trail</li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center text-[#0C8CE9] text-[2vw]">&rarr;</div>

          {/* Phase 2 */}
          <div className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[2%] flex flex-col">
            <h3 className="text-[1.3vw] font-bold mb-4">Portfolio Monitoring</h3>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>&#8226; Real time performance tracking against deal thesis</li>
              <li>&#8226; ESG compliance monitoring</li>
              <li>&#8226; Cross portfolio thematic analysis</li>
              <li>&#8226; Value creation opportunity identification</li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center text-[#0C8CE9] text-[2vw]">&rarr;</div>

          {/* Phase 3 */}
          <div className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[2%] flex flex-col">
            <h3 className="text-[1.3vw] font-bold mb-4">Exit Planning</h3>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>&#8226; Exit readiness assessment</li>
              <li>&#8226; Valuation optimisation based on historical patterns</li>
              <li>&#8226; Buyer matching and engagement support</li>
              <li>&#8226; VDD preparation with institutional memory</li>
            </ul>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-6 bg-gray-100 rounded-xl p-[2%]">
          <p className="text-[1vw] text-gray-700">
            <strong>PEVio value compounds.</strong> It learns from every deal,
            monitors every portfolio company, and optimises every exit. This is
            institutional lock in, not vendor dependency. Cross portfolio thematic
            analysis and portfolio monitoring are being validated in active pilots
            now, not roadmap promises.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
