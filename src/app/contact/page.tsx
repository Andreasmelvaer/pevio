import { getContactPageData } from "@/sanity/queries";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PEVio",
  description: "Get in touch with the PEVio team. Request a demo.",
};

export const revalidate = 60;

const defaultData = {
  heading: "Get in Touch",
  description:
    "Interested in seeing how PEVio can transform your due diligence? We'd love to hear from you.",
  contacts: [
    { label: "Hichem Frija", value: "hichem@pevio.ai", type: "email" },
    { label: "Christian Hvamstad", value: "christian@pevio.ai", type: "email" },
  ],
  formHeading: "Request a Demo",
  formDescription: "Tell us about your fund and we'll show you how PEVio works.",
};

export default async function ContactPage() {
  const data = await getContactPageData();

  const heading = data?.heading || defaultData.heading;
  const description = data?.description || defaultData.description;
  const contacts = data?.contacts?.length ? data.contacts : defaultData.contacts;
  const formHeading = data?.formHeading || defaultData.formHeading;
  const formDescription = data?.formDescription || defaultData.formDescription;

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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Reach Out Directly</h2>
            <div className="space-y-6">
              {contacts.map((contact, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <p className="mb-1 text-sm font-semibold text-gray-900">{contact.label}</p>
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
                      Connect on LinkedIn &rarr;
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
            <h2 className="mb-2 text-2xl font-bold text-gray-900">{formHeading}</h2>
            <p className="mb-6 text-sm text-gray-500">{formDescription}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
