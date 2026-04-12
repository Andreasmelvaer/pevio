import SlideShell from "./SlideShell";
import Image from "next/image";

export default function Slide15() {
  return (
    <SlideShell section="13. THE TEAM" slideNum={15}>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[25%] px-[4%] py-[4%]">
          <h2 className="text-[1.6vw] font-normal leading-tight">
            Capital Markets Veterans + Deep Tech Experts.
          </h2>
        </div>

        {/* Team members */}
        <div className="w-[75%] flex">
          {/* Line */}
          <div className="flex-1 px-[3%] py-[4%] flex flex-col items-center">
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden mb-4 bg-gray-200 relative">
              <Image
                src="/Line_Square.jpg"
                alt="Line Hjartarson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.1vw] font-bold">Line Hjartarson</h3>
            <p className="text-[1vw] italic text-gray-500 mb-1">
              Head of Product Design & Delivery
            </p>
            <p className="text-[0.7vw] text-blue-500 mb-4">
              Connect on LinkedIn
            </p>
            <div className="text-[0.85vw] text-gray-600 leading-relaxed space-y-3 max-w-[85%]">
              <p>
                Line works in the &quot;messy middle&quot; between design and
                engineering. As Director of Design at Omny and Principal Designer
                at Cognite, she led design and delivery for industrial data and
                security platforms — building interfaces and design systems for
                engineers and data scientists.
              </p>
              <p>
                At PEVio, she&apos;s Head of Product Design & Delivery, making
                our Applied Specialised Intelligence understandable, secure, and
                trustworthy for investment teams.
              </p>
            </div>
          </div>

          {/* Andreas */}
          <div className="flex-1 px-[3%] py-[4%] flex flex-col items-center">
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden mb-4 bg-gray-200 relative">
              <Image
                src="/Andreas_Square.jpg"
                alt="Andreas Larsson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.1vw] font-bold">Andreas Larsson</h3>
            <p className="text-[1vw] italic text-gray-500 mb-1">
              Technology and Customer Success Manager
            </p>
            <p className="text-[0.7vw] text-blue-500 mb-4">
              Connect on LinkedIn
            </p>
            <div className="text-[0.85vw] text-gray-600 leading-relaxed space-y-3 max-w-[85%]">
              <p>
                20+ years delivering complex B2B SaaS in regulated enterprises
              </p>
              <p>
                Built Symbrio Norway to 40 enterprise clients and multi-MNOK
                revenue, leading to acquisition.
              </p>
              <p>
                Led 50+ implementations, training 1,500+ users and driving
                adoption. Focused on tech management and executive rollouts,
                including PEVio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
