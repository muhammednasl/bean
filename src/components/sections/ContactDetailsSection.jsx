
import { useState } from "react";
import { MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactDetailsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Frontend demonstration only; connect a backend to send the message.
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      location: "",
      number: "",
      message: "",
    });
  }

  return (
    <section className="bg-transparent px-4 py-20 text-[#c6a15b] sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Contact information */}
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-gold">GET IN TOUCH</p>

          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Let’s start a
            <span className="block italic text-[#c6a15b]">
              conversation.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7  sm:text-base">
            Have a question, planning a visit, or looking to make a special
            request? Send us a message. We’d love to hear from you.
          </p>

          <div className="mt-10 border-t border-white/15 pt-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-[#c6a15b]" size={22} />

              <div>
                <h3 className="font-display text-lg">Visit Us</h3>
                <p className="mt-2 text-sm leading-6 ">
                  Add your restaurant address here.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/15 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c6a15b]">
              We look forward to hearing from you
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="border rounded-[10px] border-white/10 bg-[#191916] p-6 sm:p-10">
          {submitted ? (
            <div
              className="flex min-h-80 flex-col items-center justify-center text-center"
              role="status"
            >
              <CheckCircle size={44} className="text-[#c6a15b]" />

              <h3 className="mt-5 font-display text-2xl">
                Thank you for reaching out!
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Your form was submitted in this demo. No message has been
                sent to the restaurant yet.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 border border-[#c6a15b] px-6 py-3 text-sm text-[#c6a15b] transition hover:bg-[#c6a15b] hover:text-black"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl">Send Us a Message</h3>

              <p className="mt-2 text-sm text-white/55">
                Fill in the details below and we’ll be happy to assist.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-white/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6a15b]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-white/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6a15b]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Location *
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Your city or location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-white/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6a15b]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="number"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="number"
                      name="number"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+971 ..."
                      value={formData.number}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-white/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6a15b]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[10px] resize-y border border-white/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6a15b]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#c6a15b] px-6 py-4 text-sm font-semibold tracking-wide text-[#11110f] transition rounded-[10px] hover:bg-[#d8b978] sm:w-auto"
                >
                  Submit Message
                  <Send size={16} />
                </button>

                <p className="text-xs leading-5 text-white/40">
                  * Required fields
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
