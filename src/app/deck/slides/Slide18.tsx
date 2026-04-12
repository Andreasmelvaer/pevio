import SlideShell from "./SlideShell";
import Image from "next/image";

const terms = [
  { label: "Raising", value: "£2 million" },
  { label: "Instrument", value: "Equity, SEIS and EIS Advance Assurance granted February 2026" },
  { label: "Tax relief", value: "Up to 50 percent SEIS income tax relief and 30 percent EIS relief" },
  { label: "Cap table", value: "Concentrated, targeting 4 to 6 investors" },
  { label: "Runway", value: "24 months to profitability trigger" },
];

export default function Slide18() {
  return (
    <SlideShell section="THE ASK" slideNum={19}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        {/* Heading */}
        <h2 className="text-[1.8vw] font-normal mb-1">
          Build the <span className="text-[#0C8CE9] font-semibold">Harvey for Private Equity.</span>
        </h2>

        {/* Investment terms table */}
        <div className="bg-gray-50 rounded-xl p-[2%] mb-4">
          <h3 className="text-[0.95vw] font-bold mb-3">Investment Terms</h3>
          <table className="w-full text-[0.85vw]">
            <tbody>
              {terms.map((t) => (
                <tr key={t.label} className="border-b border-gray-100 last:border-0">
                  <td className="py-2 pr-4 font-semibold text-gray-500 w-[20%] align-top">
                    {t.label}
                  </td>
                  <td className="py-2 text-gray-800">{t.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Three closing stats */}
        <div className="flex items-center justify-center gap-[3vw] mb-5">
          <div className="text-center">
            <p className="text-[2vw] font-bold text-[#0C8CE9]">£27M</p>
            <p className="text-[0.75vw] text-gray-500">Exit ARR Year 5</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-[2vw] font-bold text-gray-900">15.2x</p>
            <p className="text-[0.75vw] text-gray-500">LTV/CAC Year 1</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-[2vw] font-bold text-[#0C8CE9]">£2M</p>
            <p className="text-[0.75vw] text-gray-500">Raise</p>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-[1.2vw] text-center italic font-serif text-gray-600 mb-5">
          Insight you can explain, defend, and trust.
        </p>

        {/* Founders */}
        <div className="flex items-center justify-center gap-[4vw]">
          <div className="flex items-center gap-3">
            <div className="w-[3vw] h-[3vw] rounded-full overflow-hidden bg-gray-200 relative">
              <Image
                src="/Hichem_Square.jpg"
                alt="Hichem Frija"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.85vw] font-bold">Hichem Frija</p>
              <p className="text-[0.7vw] text-gray-400">hichem@pevio.ai</p>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="w-[3vw] h-[3vw] rounded-full overflow-hidden bg-gray-200 relative">
              <Image
                src="/Christian_square.jpg"
                alt="Christian A. Hvamstad"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.85vw] font-bold">Christian A. Hvamstad</p>
              <p className="text-[0.7vw] text-gray-400">christian@pevio.ai</p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
