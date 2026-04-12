import SlideShell from "./SlideShell";

export default function Slide08() {
  return (
    <SlideShell section="MARKET OPPORTUNITY" slideNum={9}>
      <div className="flex h-full">
        {/* Left side */}
        <div className="w-[55%] px-[5%] py-[2%]">
          <h2 className="text-[1.8vw] font-normal mb-1">MARKET OPPORTUNITY</h2>
          <p className="text-[1.2vw] text-[#0C8CE9] mb-4">
            $15 to 29 billion TAM. Validated by confirmed buyer spend.
          </p>

          {/* Three market tiers */}
          <div className="space-y-3 mb-4">
            <div className="bg-white border border-gray-200 rounded-xl p-[2.5%]">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[1.3vw] font-bold text-[#0C8CE9]">TAM</span>
                <span className="text-[1.3vw] font-bold">$29B</span>
              </div>
              <p className="text-[0.85vw] text-gray-600 leading-relaxed">
                Global AI enabled due diligence. Bottom up validated:
                AlphaSense $500M ARR, Datasite $500M revenue, Hebbia $13M ARR growing 15x in 18 months.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-[2.5%]">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[1.3vw] font-bold text-[#0C8CE9]">SAM</span>
                <span className="text-[1.3vw] font-bold">$3 to 5B</span>
              </div>
              <p className="text-[0.85vw] text-gray-600 leading-relaxed">
                PE and IB financial and commercial DD only. Legal DD
                excluded (Harvey, Kira, Luminance). Sweet spot: 3,000
                mid market PE firms plus 2,000 boutique IBs.
              </p>
            </div>

            <div className="bg-white border-2 border-[#0C8CE9] rounded-xl p-[2.5%]">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[1.3vw] font-bold text-[#0C8CE9]">SOM</span>
                <span className="text-[1.3vw] font-bold">$50 to 200M</span>
                <span className="text-[0.8vw] text-gray-500">(Year 5)</span>
              </div>
              <p className="text-[0.85vw] text-gray-600 leading-relaxed">
                Base case $60M (350 PE plus 150 IB at $120k ACV).
                Bull case $200M including VDD and monitoring adjacencies.
              </p>
            </div>
          </div>

          {/* Wallet share callout */}
          <p className="text-[0.8vw] text-[#0C8CE9] font-semibold mb-4">
            Observable competitor spend from buyers already in the PEVio target market exceeds $1B annually.
          </p>

          {/* Pricing tier labels */}
          <div className="flex gap-3">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[0.75vw] font-semibold">
              IC Layer
            </span>
            <span className="bg-[#0C8CE9]/10 text-[#0C8CE9] px-3 py-1 rounded-full text-[0.75vw] font-semibold">
              Platform
            </span>
            <span className="bg-[#0C8CE9] text-white px-3 py-1 rounded-full text-[0.75vw] font-semibold">
              Enterprise
            </span>
          </div>
        </div>

        {/* Right - product screenshots */}
        <div className="w-[45%] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck/screenshot-arr.png"
            alt="PEVio ARR Analysis"
            className="absolute top-[8%] left-[5%] w-[110%] drop-shadow-lg"
          />
        </div>
      </div>
    </SlideShell>
  );
}
