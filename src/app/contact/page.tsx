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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {heading}
          </h1>
          <p className="text-lg text-gray-300">{description}</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Reach out directly.
            </h2>
            <div className="space-y-6">
              {contacts.map((contact, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <p className="mb-1 text-sm font-semibold text-gray-900">
                    {contact.label}
                  </p>
                  {contact.type === "email" ? (
                    <a
                      href={`mailto:${contact.value}`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {contact.value}
                    </a>
                  ) : contact.type === "linkedin" ? (
                    <a
                      href={contact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Connect on LinkedIn
                    </a>
                  ) : (
                    <p className="text-sm text-gray-500">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              {formHeading}
            </h2>
            <p className="mb-6 text-sm text-gray-500">{formDescription}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
