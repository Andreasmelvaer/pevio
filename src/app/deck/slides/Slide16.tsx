import SlideShell from "./SlideShell";

const allocations = [
  {
    label: "Product and Engineering",
    detail: "Backend, frontend, ASI architecture hardening, security",
    pct: "40 to 45%",
    width: "42.5%",
  },
  {
    label: "Go-to-Market",
    detail: "Founder sales, 1 to 2 senior BD / customer success hires, conferences",
    pct: "30 to 35%",
    width: "32.5%",
  },
  {
    label: "Domain Experts",
    detail: "1 to 2 PE diligence specialists, IC workflows, content",
    pct: "15 to 20%",
    width: "17.5%",
  },
  {
    label: "G and A / Contingency",
    detail: "Operations, legal, insurance, buffer",
    pct: "5 to 10%",
    width: "7.5%",
  },
];

export default function Slide16() {
  return (
    <SlideShell section="USE OF FUNDS" slideNum={17}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.8vw] font-normal mb-2">
          Raising £2 million for{" "}
          <span className="text-[#0C8CE9]">24 month runway.</span>
        </h2>

        <p className="text-[1vw] text-gray-500 mb-8">
          SEIS and EIS Advance Assurance granted February 2026.
        </p>

        {/* Allocation bars */}
        <div className="space-y-5 flex-1">
          {allocations.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[0.9vw] font-semibold text-gray-800">
                  {item.label}
                </span>
                <span className="text-[0.85vw] text-[#0C8CE9] font-bold">
                  {item.pct}
                </span>
              </div>
              <div className="w-full h-[1.2vw] bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0C8CE9] to-[#0C8CE9]/70 rounded-full"
                  style={{ width: item.width }}
                />
              </div>
              <p className="text-[0.7vw] text-gray-500 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* SOC 2 / ISO note */}
        <div className="mt-4 bg-gray-50 rounded-xl px-[2%] py-[1.2%]">
          <p className="text-[0.8vw] text-gray-600">
            Includes SOC 2 Type II and ISO 27001 certification costs within the engineering allocation.
            Security and compliance are built into the product roadmap, not treated as afterthoughts.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
