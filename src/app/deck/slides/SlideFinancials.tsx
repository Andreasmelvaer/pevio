import SlideShell from "./SlideShell";

export default function SlideFinancials() {
  return (
    <SlideShell section="FINANCIAL PROJECTIONS" slideNum={13}>
      <div className="px-[5%] py-[2%] h-full flex flex-col">
        <h2 className="text-[1.8vw] font-normal mb-4">
          £27 million ARR by Year 5.{" "}
          <span className="text-[#0C8CE9]">Profitable from Year 3.</span>
        </h2>

        {/* Five-year table */}
        <div className="mb-4">
          <table className="w-full text-[0.85vw] border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 px-3 text-gray-500 font-medium"></th>
                <th className="py-2 px-3 text-center font-semibold">Y1</th>
                <th className="py-2 px-3 text-center font-semibold">Y2</th>
                <th className="py-2 px-3 text-center font-semibold bg-amber-100/60 text-amber-800 rounded-t relative">
                  Y3
                  <span className="absolute -top-[1.6vw] left-1/2 -translate-x-1/2 text-[0.6vw] text-amber-600 font-medium whitespace-nowrap">
                    First Profitable Year
                  </span>
                </th>
                <th className="py-2 px-3 text-center font-semibold">Y4</th>
                <th className="py-2 px-3 text-center font-semibold">Y5</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Revenue</td>
                <td className="py-2 px-3 text-center">£286k</td>
                <td className="py-2 px-3 text-center">£1.99M</td>
                <td className="py-2 px-3 text-center bg-amber-50/40">£7.24M</td>
                <td className="py-2 px-3 text-center">£14.8M</td>
                <td className="py-2 px-3 text-center">£23.3M</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Exit ARR</td>
                <td className="py-2 px-3 text-center">£490k</td>
                <td className="py-2 px-3 text-center">£3.5M</td>
                <td className="py-2 px-3 text-center bg-amber-50/40">£10.6M</td>
                <td className="py-2 px-3 text-center">£18.5M</td>
                <td className="py-2 px-3 text-center font-semibold">£27.2M</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Clients</td>
                <td className="py-2 px-3 text-center">7</td>
                <td className="py-2 px-3 text-center">25</td>
                <td className="py-2 px-3 text-center bg-amber-50/40">70</td>
                <td className="py-2 px-3 text-center">117</td>
                <td className="py-2 px-3 text-center">157</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Gross Margin</td>
                <td className="py-2 px-3 text-center">72%</td>
                <td className="py-2 px-3 text-center">82%</td>
                <td className="py-2 px-3 text-center bg-amber-50/40">87%</td>
                <td className="py-2 px-3 text-center">91%</td>
                <td className="py-2 px-3 text-center">94%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">EBITDA</td>
                <td className="py-2 px-3 text-center text-red-500">Loss</td>
                <td className="py-2 px-3 text-center text-red-500">Loss</td>
                <td className="py-2 px-3 text-center bg-amber-50/40 text-green-600 font-semibold">Profitable</td>
                <td className="py-2 px-3 text-center text-green-600">40%</td>
                <td className="py-2 px-3 text-center text-green-600">47%</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">YoY Growth</td>
                <td className="py-2 px-3 text-center text-gray-400">n/a</td>
                <td className="py-2 px-3 text-center">+595%</td>
                <td className="py-2 px-3 text-center bg-amber-50/40">+264%</td>
                <td className="py-2 px-3 text-center">+104%</td>
                <td className="py-2 px-3 text-center">+57%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom row: Unit Economics + Funding */}
        <div className="flex gap-[2%] flex-1">
          {/* SaaS Unit Economics */}
          <div className="flex-[2] bg-gray-50 rounded-xl p-[2%]">
            <h3 className="text-[0.95vw] font-bold mb-3">Unit Economics</h3>
            <div className="grid grid-cols-2 gap-x-[3%] gap-y-2 text-[0.85vw] text-gray-700">
              <div className="flex justify-between">
                <span>LTV/CAC</span>
                <span className="font-semibold text-[#0C8CE9]">15.2x</span>
              </div>
              <div className="flex justify-between">
                <span>CAC Payback</span>
                <span className="font-semibold">6.8 months</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Churn</span>
                <span className="font-semibold">5%</span>
              </div>
              <div className="flex justify-between">
                <span>Burn Multiple</span>
                <span className="font-semibold">0.3x</span>
              </div>
              <div className="flex justify-between">
                <span>LTV Blended</span>
                <span className="font-semibold">£350k</span>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div className="flex-[1] bg-[#0C8CE9]/5 border border-[#0C8CE9]/20 rounded-xl p-[2%] flex flex-col justify-center">
            <p className="text-[0.9vw] text-gray-800 leading-relaxed">
              <span className="font-semibold text-[#0C8CE9]">Now:</span> £2 million seed round, SEIS and EIS eligible, 24 months to profitability trigger.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
