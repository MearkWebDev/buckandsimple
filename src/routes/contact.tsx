import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — buck&simple. Architects" },
      { name: "description", content: "If you have any questions or are interested in designing your new home, don't hesitate to reach out." },
      { property: "og:title", content: "Contact — buck&simple." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="container-editorial pt-40 pb-16">
        <p className="eyebrow mb-8">— Contact</p>
        <h1 className="font-display font-light leading-[0.98] text-[clamp(3rem,8vw,7rem)] max-w-5xl">
          Begin a <span className="italic">conversation.</span>
        </h1>
        <p className="text-stone mt-10 max-w-xl">
          We accept a limited number of high-calibre projects each year. Tell us about your site, your
          brief and your timing — we'll be in touch.
        </p>
      </section>

      <section className="container-editorial py-16 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          {submitted ? (
            <div className="border-t border-border pt-12">
              <p className="eyebrow mb-4">— Thank you</p>
              <h2 className="font-display font-light text-4xl md:text-5xl leading-tight">
                Your enquiry has been received.
              </h2>
              <p className="text-stone mt-6 max-w-md">
                A member of the studio will be in touch shortly. In the meantime, you can reach us
                directly at info@buckandsimple.com.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-10 border-t border-border pt-10"
            >
              <Field label="Full Name" required>
                <input required type="text" className="form-input" />
              </Field>
              <Field label="Email" required>
                <input required type="email" className="form-input" />
              </Field>
              <Field label="Phone Number">
                <input type="tel" className="form-input" />
              </Field>
              <Field label="Message (optional)">
                <textarea rows={5} className="form-input resize-none" />
              </Field>
              <Field label="Anticipated budget range">
                <select className="form-input">
                  <option>$1M — $3M</option>
                  <option>$3M or more</option>
                  <option>Not sure of budget</option>
                </select>
              </Field>
              <Field label="How did you hear about us?">
                <select className="form-input">
                  <option>Google</option>
                  <option>Editorial</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
              </Field>
              <button
                type="submit"
                className="nav-link link-underline pt-4"
              >
                Send Enquiry →
              </button>
            </form>
          )}
          <style>{`
            .form-input {
              width: 100%;
              border: 0;
              border-bottom: 1px solid var(--border);
              background: transparent;
              padding: 0.75rem 0;
              font-family: var(--font-sans);
              font-size: 1rem;
              color: var(--foreground);
              outline: none;
              transition: border-color 0.3s ease;
            }
            .form-input:focus { border-color: var(--foreground); }
            select.form-input { appearance: none; }
          `}</style>
        </div>

        <aside className="md:col-span-5 md:pl-12 md:border-l border-border space-y-12">
          <div>
            <p className="eyebrow mb-4">Studio</p>
            <p className="font-display font-light text-2xl leading-snug">
              Studio 7, 35 East Esplanade<br />
              Manly NSW 2095<br />
              Australia
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Direct</p>
            <p className="font-display font-light text-2xl leading-snug">
              <a className="link-underline" href="tel:+61283135443">(02) 8313 5443</a><br />
              <a className="link-underline" href="mailto:info@buckandsimple.com">info@buckandsimple.com</a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Follow</p>
            <p className="font-display font-light text-2xl">
              <a className="link-underline" href="https://www.instagram.com/buckandsimple/">Instagram</a>
            </p>
          </div>
          <p className="text-xs text-stone leading-relaxed pt-8 border-t border-border">
            We acknowledge the 29 clans of the Eora Nation, the Traditional Owners of the land on which
            we work, live & play.
          </p>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && " *"}</span>
      {children}
    </label>
  );
}
