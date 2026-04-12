import SlideShell from "./SlideShell";
import Image from "next/image";

const team = [
  {
    name: "Hichem Frija",
    role: "Co-Founder",
    photo: "/Hichem_Square.jpg",
    bio: [
      "25+ years in capital markets (Morgan Stanley, Barclays, Carnegie).",
      "Built the number one ranked European special situations team. 40+ venture investments across tech and infrastructure.",
      "Board member and strategic advisor to growth-stage companies.",
    ],
  },
  {
    name: "Christian A. Hvamstad",
    role: "Co-Founder",
    photo: "/Christian_square.jpg",
    bio: [
      "Serial founder and former banker (Nordea, SEB, First Securities).",
      "Raised $30m+ across Wastefront (sustainable aviation fuel, backed by IAG and Vitol) and docStribute (RegTech for regulated document distribution).",
      "Board-level experience scaling ventures from inception to institutional scale.",
    ],
  },
  {
    name: "Line Hjartarson",
    role: "Head of Product Design and Delivery",
    photo: "/Line_Square.jpg",
    bio: [
      "Works in the space between design and engineering. Former Director of Design at Omny and Principal Designer at Cognite.",
      "Led design and delivery for industrial data and security platforms, building interfaces and design systems for engineers and data scientists.",
      "At PEVio, she leads product design, making Applied Specialised Intelligence understandable, secure, and trustworthy for investment teams.",
    ],
  },
  {
    name: "Andreas Larsson",
    role: "Technology and Customer Success Manager",
    photo: "/Andreas_Square.jpg",
    bio: [
      "20+ years delivering complex B2B SaaS in regulated enterprises.",
      "Built Symbrio Norway to 40 enterprise clients and multi-MNOK revenue, leading to acquisition.",
      "Led 50+ implementations, training 1,500+ users and driving adoption. Focused on tech management and executive rollouts.",
    ],
  },
];

export default function SlideTeam() {
  return (
    <SlideShell section="THE TEAM" slideNum={16}>
      <div className="px-[4%] py-[1.5%] h-full flex flex-col">
        <h2 className="text-[1.6vw] font-normal mb-3">
          Capital Markets Veterans + Deep Tech Experts.
        </h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {team.map((member) => (
            <div key={member.name} className="flex gap-[1vw] items-start">
              {/* Photo */}
              <div className="w-[4.5vw] h-[4.5vw] rounded-full overflow-hidden bg-gray-200 relative flex-shrink-0">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[0.85vw] font-bold leading-tight">{member.name}</h3>
                <p className="text-[0.7vw] text-[#0C8CE9] mb-1">{member.role}</p>
                <div className="space-y-1">
                  {member.bio.map((line, i) => (
                    <p key={i} className="text-[0.65vw] text-gray-600 leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
