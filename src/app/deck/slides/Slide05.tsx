import SlideShell from "./SlideShell";

export default function Slide05() {
  return (
    <SlideShell section="5. HOW IT WORKS" slideNum={5}>
      <div className="flex h-full">
        {/* Left column */}
        <div className="w-[55%] px-[5%] py-[3%]">
          <h2 className="text-[2vw] font-normal mb-8">
            Consensus-Based ASI
            <br />
            Architecture
          </h2>

          <ul className="space-y-5 text-[1.25vw] text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">&#8226;</span>
              <span>
                <strong>Specialised models orchestrated</strong> through a
                consensus layer: Financial, Legal, ESG, Tech, and Operational
                LLMs work independently, then debate findings
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">&#8226;</span>
              <span>
                Cross-references data{" "}
                <strong>
                  and tests against institutional DD frameworks
                </strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">&#8226;</span>
              <span>
                Consensus architecture{" "}
                <strong>minimises hallucinations</strong> and enables full
                explainability
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">&#8226;</span>
              <span>
                Secure deployment, including{" "}
                <strong>private and on-prem environments</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 mt-1">&#8226;</span>
              <span>
                Progressive learning: becomes more valuable with each deal,
                tuned to the fund decision history
              </span>
            </li>
          </ul>

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-[1.2vw]">
            <p className="text-[1.15vw] text-gray-900">
              <strong>PEVio</strong> is Applied Specialised Intelligence. The
              more you use it, the smarter it gets about your fund.
            </p>
          </div>
        </div>

        {/* Right - product screenshot */}
        <div className="w-[45%] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck/screenshot-workspaces.png"
            alt="PEVio Workspaces"
            className="absolute top-[12%] left-[8%] w-[110%] drop-shadow-lg"
          />
        </div>
      </div>
    </SlideShell>
  );
}
