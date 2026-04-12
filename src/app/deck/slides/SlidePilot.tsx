import SlideShell from "./SlideShell";
import { Users, TestTube, CheckSquare } from "lucide-react";

const steps = [
  {
    Icon: Users,
    num: "1",
    title: "Onboard",
    desc: "The fund uploads its investment thesis, historical IC decisions, and live deal data. PEVio is configured to the fund DNA from Day 1.",
  },
  {
    Icon: TestTube,
    num: "2",
    title: "Test",
    desc: "2 to 5 live transactions and or portfolio companies over 12 weeks. Iterative builds with fortnightly senior team reviews.",
  },
  {
    Icon: CheckSquare,
    num: "3",
    title: "Decide",
    desc: "Structured evaluation against agreed success criteria. Production decision within 30 days of pilot completion.",
  },
];

export default function SlidePilot() {
  return (
    <SlideShell section="12. WHAT A PILOT LOOKS LIKE" slideNum={12}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[2vw] font-normal mb-8">
          WHAT A PILOT LOOKS LIKE
        </h2>

        {/* Three step cards */}
        <div className="flex gap-[2%] flex-1 max-h-[55%]">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex-1 border-2 border-[#0C8CE9] rounded-xl p-[3%] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#0C8CE9] text-white flex items-center justify-center text-[1vw] font-bold shrink-0">
                  {s.num}
                </div>
                <s.Icon className="w-[1.5vw] h-[1.5vw] text-[#0C8CE9]" />
              </div>
              <h3 className="text-[1.3vw] font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-[0.9vw] text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-[2%]">
          <p className="text-[0.9vw] text-gray-700 leading-relaxed">
            Pilots are structured commercial engagements with clear scope and
            agreed success criteria. Design partner pilots include a pilot fee,
            which reflects commercial commitment rather than a free trial.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
