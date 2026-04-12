import SlideShell from "./SlideShell";

const stats = [
  { value: "3", label: "Pilot engagements secured including paid design partnerships", color: "bg-[#0C8CE9]" },
  { value: "4/5", label: "Would pilot PEVio within 6 to 12 months (survey of 20 PE funds)", color: "bg-green-500" },
  { value: "6/6", label: "Unanimous priorities from survey respondents", color: "bg-amber-500" },
  { value: "£500k", label: "Average annual external DD spend PEVio can displace per client", color: "bg-purple-400" },
];

const unanimousPriorities = [
  "Source linked analysis, not summaries",
  "Institutional memory that learns from every deal",
  "Fund specific configuration, not generic output",
  "Compliance and audit trail built in",
  "Integration with existing data rooms and workflows",
  "Human in the loop: AI assists, humans decide",
];

const surveyQuotes = [
  { text: "We would adopt this tomorrow if it is compliant and auditable.", source: "Partner, PE Respondent" },
  { text: "Most vendors do not get how our approvals and data flows work.", source: "Mid Market GP" },
  { text: "Need AI that learns and improves, not one that repeats the same mistakes.", source: "Lower Mid Market Fund" },
  { text: "If it does not plug into existing systems, no one is going to use it.", source: "VC Firm Partner" },
];

const externalQuotes = [
  { text: "PEVio is genuinely differentiated. The IC layer and institutional memory are what the market is missing.", source: "Copia Wealth" },
  { text: "The audit trail and compliance by design approach is exactly what regulated buyers need.", source: "EY" },
];

const pipeline = [
  { stage: "Surveyed", count: "20", color: "bg-gray-200 text-gray-700" },
  { stage: "Intent", count: "9", color: "bg-blue-100 text-[#0C8CE9]" },
  { stage: "Engaged", count: "5", color: "bg-[#0C8CE9]/20 text-[#0C8CE9]" },
  { stage: "Converting", count: "3", color: "bg-[#0C8CE9] text-white" },
];

export default function Slide10() {
  return (
    <SlideShell section="TRACTION AND VALIDATION" slideNum={11}>
      <div className="px-[4%] py-[2%] h-full flex flex-col">
        <h2 className="text-[1.6vw] font-normal mb-1">
          TRACTION AND VALIDATION
        </h2>
        <p className="text-[1vw] text-[#0C8CE9] mb-3">
          Clear signals: private markets investment teams are ready to deploy.
        </p>

        {/* Stat cards */}
        <div className="flex gap-[1.5%] mb-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className={`flex-1 ${s.color} rounded-xl p-[1.5%] text-white text-center`}
            >
              <p className="text-[2vw] font-bold">{s.value}</p>
              <p className="text-[0.65vw] font-medium leading-tight mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Unanimous priorities */}
        <div className="mb-3">
          <p className="text-[0.7vw] text-gray-500 uppercase tracking-wide mb-1.5 font-semibold">
            Six Unanimous Priorities
          </p>
          <div className="grid grid-cols-3 gap-2">
            {unanimousPriorities.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-lg px-3 py-1.5 text-[0.7vw] text-gray-700 flex items-center gap-2">
                <span className="w-[1.2vw] h-[1.2vw] rounded-full bg-[#0C8CE9] text-white flex items-center justify-center text-[0.55vw] font-bold shrink-0">
                  {i + 1}
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Bow tie pipeline */}
        <div className="mb-3">
          <p className="text-[0.7vw] text-gray-500 uppercase tracking-wide mb-1.5 font-semibold">
            Pipeline
          </p>
          <div className="flex gap-1">
            {pipeline.map((p) => (
              <div key={p.stage} className={`flex-1 ${p.color} rounded-lg py-2 text-center`}>
                <p className="text-[1.2vw] font-bold">{p.count}</p>
                <p className="text-[0.6vw] font-medium">{p.stage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes section */}
        <div className="flex gap-4 flex-1">
          {/* Survey quotes */}
          <div className="flex-1">
            <p className="text-[0.65vw] text-gray-500 uppercase tracking-wide mb-1 font-semibold">
              Survey Respondent Insights
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {surveyQuotes.map((q, i) => (
                <div
                  key={i}
                  className="border-l-2 pl-2 py-1"
                  style={{
                    borderColor: ["#0C8CE9", "#8b5cf6", "#0C8CE9", "#f59e0b"][i],
                  }}
                >
                  <p className="text-[0.7vw] italic text-gray-700">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <p className="text-[0.6vw] text-[#0C8CE9] mt-0.5">
                    {q.source}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External validation */}
          <div className="w-[35%]">
            <p className="text-[0.65vw] text-gray-500 uppercase tracking-wide mb-1 font-semibold">
              External Validation
            </p>
            <div className="space-y-1.5">
              {externalQuotes.map((q, i) => (
                <div
                  key={i}
                  className="border-l-2 border-green-500 pl-2 py-1"
                >
                  <p className="text-[0.7vw] italic text-gray-700">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <p className="text-[0.6vw] text-green-600 mt-0.5 font-semibold">
                    {q.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
