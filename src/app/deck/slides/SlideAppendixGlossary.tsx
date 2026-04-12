import SlideShell from "./SlideShell";

const glossary = [
  { term: "ASI", definition: "Applied Specialised Intelligence. Multi-model AI architecture purpose-built for PE diligence, not a single LLM wrapper." },
  { term: "IC", definition: "Investment Committee. The formal decision-making body within a fund that approves or rejects deals." },
  { term: "GP", definition: "General Partner. The fund manager responsible for sourcing, executing, and managing investments." },
  { term: "LP", definition: "Limited Partner. The institutional or individual investors who commit capital to a fund." },
  { term: "VDR", definition: "Virtual Data Room. Secure online repository where target companies share documents during due diligence." },
  { term: "DD", definition: "Due Diligence. The structured investigation of a target company before an investment decision." },
  { term: "ACV", definition: "Annual Contract Value. The annualised revenue from a single customer contract." },
  { term: "ARR", definition: "Annual Recurring Revenue. The total annualised value of all active subscription contracts." },
  { term: "CAC", definition: "Customer Acquisition Cost. The total cost of acquiring a new customer, including sales and marketing." },
  { term: "LTV", definition: "Lifetime Value. The total revenue expected from a customer over the duration of the relationship." },
  { term: "VDD", definition: "Vendor Due Diligence. Diligence commissioned by the seller rather than the buyer, typically to accelerate a sale process." },
];

export default function SlideAppendixGlossary() {
  return (
    <SlideShell section="APPENDIX A: GLOSSARY" slideNum={19}>
      <div className="px-[5%] py-[3%] h-full flex flex-col">
        <h2 className="text-[1.4vw] font-normal mb-4">Glossary of Terms</h2>

        <table className="w-full text-[0.8vw] border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 px-3 text-gray-500 font-semibold w-[12%]">Term</th>
              <th className="text-left py-2 px-3 text-gray-500 font-semibold">Definition</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {glossary.map((g) => (
              <tr key={g.term} className="border-b border-gray-100">
                <td className="py-2 px-3 font-bold text-[#0C8CE9]">{g.term}</td>
                <td className="py-2 px-3">{g.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
}
