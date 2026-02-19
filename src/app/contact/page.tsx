import { getContactPageData } from "@/sanity/queries";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PEVio",
  description: "Start a conversation with the PEVio team.",
};

export const revalidate = 60;

const defaultData = {
  heading: "Start a conversation.",
  description:
    "Whether you are exploring how AI fits into your diligence process, evaluating PEVio for your fund, or interested in learning more about what we are building, we welcome the opportunity to speak. All conversations are treated as confidential.",
  contacts: [
    { label: "Hichem Frija", value: "hichem@pevio.ai", type: "email" },
    {
      label: "Christian A. Hvamstad",
      value: "christian@pevio.ai",
      type: "email",
    },
  ],
  formHeading: "Request a walkthrough.",
  formDescription:
    "Tell us about your fund and where you are in your evaluation. We will arrange a confidential session tailored to your firm's context.",
};

export default async function ContactPage() {
  const data = await getContactPageData();

  const heading = data?.heading || defaultData.heading;
  const description = data?.description || defaultData.description;
  const contacts = data?.contacts?.length
    ? data.contacts
    : defaultData.contacts;
  const formHeading = data?.formHeading || defaultData.formHeading;
  const formDescription =
    data?.formDescription || defaultData.formDescription;

  return (
    <>
      {/* Hero */}
      <section className="hero-dark noise-overlay px-6 py-28 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-blue-300">
              Contact
            </span>
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {heading}
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-5">
          {/* Sidebar */}
          <div className="md:col-span-2">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Reach out directly.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              All conversations are treated as confidential.
            </p>

            <div className="space-y-4">
              {contacts.map((contact, i) => (
                <div
                  key={i}
                  className="card-hover rounded-2xl border border-gray-100 bg-gray-50/50 p-6"
                >
                  <p className="mb-1.5 text-sm font-semibold text-gray-900">
                    {contact.label}
                  </p>
                  {contact.type === "email" ? (
                    <a
                      href={`mailto:${contact.value}`}
                      className="text-sm text-blue-600 transition-colors hover:text-blue-800"
                    >
                      {contact.value}
                    </a>
                  ) : contact.type === "linkedin" ? (
                    <a
                      href={contact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 transition-colors hover:text-blue-800"
                    >
                      Connect on LinkedIn
                    </a>
                  ) : (
                    <p className="text-sm text-gray-500">{contact.value}</p>
                  )}
                </div>
              ))}

              {/* LinkedIn */}
              <div className="card-hover rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                <p className="mb-1.5 text-sm font-semibold text-gray-900">
                  Follow us
                </p>
                <a
                  href="https://www.linkedin.com/company/pev-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 transition-colors hover:text-blue-800"
                >
                  LinkedIn &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {formHeading}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              {formDescription}
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
