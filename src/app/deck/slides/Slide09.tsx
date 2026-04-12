import SlideShell from "./SlideShell";
import { Info } from "lucide-react";

export default function Slide09() {
  return (
    <SlideShell section="10. INSTITUTIONAL LOCK IN" slideNum={10}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.8vw] mb-2">
          <span className="text-[#0C8CE9] font-semibold">
            PROGRESSIVE SPECIALISATION
          </span>
        </h2>
        <p className="text-[1.2vw] mb-4">
          Why PEVio Gets More Valuable Over Time
        </p>

        {/* Info callout */}
        <div className="bg-gray-100 rounded-xl p-[1.5%] mb-6 flex items-center gap-3 max-w-[65%]">
          <div className="w-[1.8vw] h-[1.8vw] rounded-full bg-gray-200 flex items-center justify-center text-[0.9vw] shrink-0">
            <Info size={16} />
          </div>
          <p className="text-[1vw] text-gray-700">
            <strong>Each fund instance of PEVio becomes unique.</strong> The same
            data room uploaded to two different funds produces different analysis,
            because the fund DNA is embedded in the system.
          </p>
        </div>

        {/* Three phases */}
        <div className="flex items-stretch gap-[2%] flex-1 max-h-[55%]">
          {/* Phase 1 */}
          <div className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[2.5%] bg-blue-50/30">
            <h3 className="text-[1.2vw] font-bold">Phase 1:</h3>
            <p className="text-[1vw] mb-4">Onboarding</p>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>&#8226; Upload investment thesis</li>
              <li>&#8226; Configure sector focus</li>
              <li>&#8226; Set return targets</li>
              <li>&#8226; Define risk tolerances</li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center text-[#0C8CE9] text-[2vw]">&rarr;</div>

          {/* Phase 2 */}
          <div className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[2.5%] bg-blue-50/30 relative">
            <span className="absolute -top-3 right-4 bg-white px-2 text-[0.7vw] text-amber-500 border border-amber-300 rounded-full py-0.5 font-semibold">
              AFTER 3 TO 5 DEALS
            </span>
            <h3 className="text-[1.2vw] font-bold">Phase 2:</h3>
            <p className="text-[1vw] mb-4">Learning</p>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>
                &#8226; Platform learns the IC decision patterns
              </li>
              <li>
                &#8226; Recognises what a good deal means for the fund
              </li>
              <li>
                &#8226; Understands which red flags are non negotiable for the
                fund thesis
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center text-[#0C8CE9] text-[2vw]">&rarr;</div>

          {/* Phase 3 */}
          <div className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[2.5%] bg-blue-50/30 relative">
            <span className="absolute -top-3 right-4 bg-white px-2 text-[0.7vw] text-amber-500 border border-amber-300 rounded-full py-0.5 font-semibold">
              12 MONTHS
            </span>
            <h3 className="text-[1.2vw] font-bold">Phase 3:</h3>
            <p className="text-[1vw] mb-4">Proprietary Intelligence</p>
            <ul className="space-y-2 text-[1vw] text-gray-600">
              <li>
                &#8226; Fund specific instance becomes proprietary decision
                infrastructure
              </li>
              <li>&#8226; Switching costs increase dramatically</li>
              <li>
                &#8226; Replacing PEVio means losing institutional knowledge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
