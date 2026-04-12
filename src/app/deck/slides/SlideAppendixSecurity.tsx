import SlideShell from "./SlideShell";

const items = [
  {
    heading: "ISO 27001 Certification",
    detail: "Information security management system. Targeted for completion within 12 months of funding.",
  },
  {
    heading: "SOC 2 Type II",
    detail: "Independent audit of security, availability, and confidentiality controls. Budgeted within engineering allocation.",
  },
  {
    heading: "EU AI Act Compliance",
    detail: "PEVio is designed to meet the transparency, explainability, and human oversight requirements of the EU AI Act.",
  },
  {
    heading: "Encryption at Rest and in Transit",
    detail: "AES-256 encryption for stored data. TLS 1.3 for all data in transit. Zero plaintext persistence.",
  },
  {
    heading: "Role-Based Access Control (RBAC)",
    detail: "Granular permissions by fund, deal, and user role. Full audit logging of every access event.",
  },
  {
    heading: "On-Premises Deployment Option",
    detail: "Available for clients with strict data residency requirements. No data leaves the client environment.",
  },
  {
    heading: "Data Ownership",
    detail: "Clients retain full ownership of all uploaded documents, generated analyses, and decision records. PEVio does not train on client data.",
  },
];

export default function SlideAppendixSecurity() {
  return (
    <SlideShell section="APPENDIX C: SECURITY AND COMPLIANCE" slideNum={21}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.4vw] font-normal mb-4">Security and Compliance</h2>

        <div className="space-y-3 flex-1">
          {items.map((item) => (
            <div key={item.heading} className="flex gap-[1.5%] items-start">
              <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#0C8CE9] mt-[0.35vw] flex-shrink-0" />
              <div>
                <p className="text-[0.85vw] font-semibold text-gray-800">{item.heading}</p>
                <p className="text-[0.75vw] text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
