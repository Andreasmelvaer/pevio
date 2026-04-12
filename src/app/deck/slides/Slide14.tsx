import SlideShell from "./SlideShell";
import Image from "next/image";

export default function Slide14() {
  return (
    <SlideShell section="13. THE TEAM" slideNum={14}>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[25%] px-[4%] py-[4%]">
          <h2 className="text-[1.6vw] font-normal leading-tight mb-8">
            Capital Markets Veterans + Deep Tech Experts.
          </h2>

          {/* ASI badge */}
          <div className="mb-6 mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/deck/badge.png" alt="ASI Powered" className="w-[5vw] h-[5vw]" />
          </div>

          <h3 className="text-[1.1vw] font-bold text-center mb-3">
            ASI Architecture
          </h3>
          <ul className="space-y-2 text-[0.75vw] text-gray-600">
            <li>&#8226; Multi-model orchestration (not single LLM wrapper)</li>
            <li>
              &#8226; Consensus-based accuracy (specialised models debate
              findings)
            </li>
            <li>
              &#8226; Bounded, supervised learning (every pattern validated)
            </li>
            <li>&#8226; Complete audit trail for governance</li>
          </ul>
        </div>

        {/* Team members */}
        <div className="w-[75%] flex">
          {/* Hichem */}
          <div className="flex-1 px-[3%] py-[4%] flex flex-col items-center">
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden mb-4 bg-gray-200 relative">
              <Image
                src="/Hichem_Square.jpg"
                alt="Hichem Frija"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.1vw] font-bold">Hichem Frija</h3>
            <p className="text-[1vw] italic text-gray-500 mb-1">Founder</p>
            <p className="text-[0.7vw] text-[#0C8CE9] mb-4">
              Connect on LinkedIn
            </p>
            <div className="text-[0.9vw] text-gray-600 leading-relaxed space-y-3 max-w-[85%]">
              <p>
                25+ years in capital markets (Morgan Stanley, Barclays,
                Carnegie).
              </p>
              <p>
                Built the #1 ranked European special situations team. 40+
                venture investments across tech and infrastructure.
              </p>
              <p>
                Board member and strategic advisor to growth-stage companies.
              </p>
            </div>
          </div>

          {/* Christian */}
          <div className="flex-1 px-[3%] py-[4%] flex flex-col items-center">
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden mb-4 bg-gray-200 relative">
              <Image
                src="/Christian_square.jpg"
                alt="Christian A. Hvamstad"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.1vw] font-bold">Christian A. Hvamstad</h3>
            <p className="text-[1vw] italic text-gray-500 mb-1">Founder</p>
            <p className="text-[0.7vw] text-[#0C8CE9] mb-4">
              Connect on LinkedIn
            </p>
            <div className="text-[0.9vw] text-gray-600 leading-relaxed space-y-3 max-w-[85%]">
              <p>
                Serial founder and former banker (Nordea, SEB, First
                Securities)
              </p>
              <p>
                Raised $30m+ across Wastefront (sustainable aviation fuel,
                backed by IAG and Vitol) and docStribute (RegTech for regulated
                document distribution for fex HSBC).
              </p>
              <p>
                Board-level experience scaling ventures from inception to
                institutional scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
