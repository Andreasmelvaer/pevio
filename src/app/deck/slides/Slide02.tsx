import SlideShell from "./SlideShell";

export default function Slide02() {
  return (
    <SlideShell section="2. CORE USE CASE" slideNum={2}>
      <div className="px-[5%] py-[3%] h-full flex flex-col justify-center">
        <h3 className="text-[2.5vw] font-normal text-gray-900 mb-6">
          The Reality of Diligence
        </h3>

        <p className="text-[3.5vw] italic font-extralight font-serif leading-[1.2] mb-8 max-w-[70%] text-gray-800">
          Imagine you are a 2 billion mid market PE fund looking at a 150
          million carve out with a tight three week window. Instead of 800
          partner hours reviewing 5,000 documents, the team uploads the VDR to
          PEVio in the evening. By morning, they receive a source linked brief
          highlighting covenant risks, revenue anomalies, and missing consents,
          all explained, traceable, and audit ready.
        </p>

        <div className="space-y-4 max-w-[60%] text-[1.4vw] text-gray-700 leading-relaxed">
          <p>
            This is specialised intelligence that thinks the way PE
            professionals think. PEVio becomes the investment team right hand
            system, learning the fund decision DNA with every deal.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
