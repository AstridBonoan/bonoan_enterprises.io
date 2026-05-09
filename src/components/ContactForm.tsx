import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  subject?: string;
}

// Formspree form ID for the Bonoan Labs contact form. Submissions land in the
// inbox tied to this endpoint at https://formspree.io/forms/xwvyrdyq.
const FORMSPREE_FORM_ID = 'xwvyrdyq';

export function ContactForm({ subject = '' }: ContactFormProps) {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);
  const [formSubject, setFormSubject] = useState(subject);
  const formRef = useRef<HTMLFormElement>(null);

  // Keep the subject input in sync with the prop so navigating from a Pricing
  // card via "Keep In Touch" pre-fills "Website Creation: Basic" etc.
  useEffect(() => {
    setFormSubject(subject);
  }, [subject]);

  const handleSendAnother = () => {
    reset();
    formRef.current?.reset();
    setFormSubject(subject);
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing.
          </p>
        </div>

        {state.succeeded ? (
          <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
            <p className="text-green-800 dark:text-green-400 font-semibold text-lg mb-4">
              Thank you! Your message has been sent successfully. I&rsquo;ll get
              back to you soon.
            </p>
            <button
              type="button"
              onClick={handleSendAnother}
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-colors"
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-colors"
                  placeholder="your@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-colors"
                placeholder="What's this about?"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              />
            </div>

            {/* Form-level errors (non-field, e.g. network/server failures). */}
            <ValidationError
              errors={state.errors}
              className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-400 font-semibold"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
