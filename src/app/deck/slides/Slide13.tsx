import SlideShell from "./SlideShell";

export default function Slide13() {
  return (
    <SlideShell section="12. B - COMPARISON" slideNum={15} bg="#f0f7ff">
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.8vw] font-normal mb-8">
          PEVio Owns the
          <br />
          <span className="text-[#0C8CE9]">Decision Layer</span>
        </h2>

        {/* Comparison table */}
        <div className="flex justify-center">
          <table className="text-[1vw] w-[80%]">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-4 px-6 text-left w-[30%]"></th>
                <th className="py-4 px-6 text-center w-[35%]">
                  <p className="text-gray-600 mb-2">Execution tools</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/deck/thecompetition.png" alt="V7, Harvey, 73 Strings, Beam" className="h-[1vw] mx-auto" />
                </th>
                <th className="py-4 px-6 text-center w-[35%]">
                  <span className="text-[1.6vw] font-bold">
                    PEV<span className="text-[#0C8CE9]">i</span>o
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "What Gets Audited",
                  them: "AI outputs",
                  us: "Investment decisions",
                },
                {
                  label: "Captures",
                  them: "What was found",
                  us: "Why it was approved",
                },
                {
                  label: "Institutional Memory",
                  them: "Single deal",
                  us: "Multi-deal, longitudinal",
                },
                {
                  label: "LP Defensibility",
                  them: "Weak",
                  us: "Strong",
                },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-5 px-6 font-medium text-gray-700">
                    {row.label}
                  </td>
                  <td className="py-5 px-6 text-center text-gray-500">
                    {row.them}
                  </td>
                  <td className="py-5 px-6 text-center text-[#0C8CE9] font-semibold">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideShell>
  );
}
