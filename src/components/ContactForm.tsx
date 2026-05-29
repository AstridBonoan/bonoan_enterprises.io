import { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BRAND } from '../data/site';
import { Button } from './ui/Button';
import { PageShell } from './ui/PageShell';

interface ContactFormProps {
  subject?: string;
}

const FORMSPREE_FORM_ID = 'xwvyrdyq';

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-brand-400 dark:focus:ring-brand-400/20';

export function ContactForm({ subject = '' }: ContactFormProps) {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);
  const [formSubject, setFormSubject] = useState(subject);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setFormSubject(subject);
  }, [subject]);

  const handleSendAnother = () => {
    reset();
    formRef.current?.reset();
    setFormSubject(subject);
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Let&rsquo;s start your project"
      description="Tell us about your business and goals. We&rsquo;ll reply with clear next steps—no pressure, no jargon."
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p className="font-semibold text-slate-900 dark:text-white">Prefer email or social?</p>
            <p className="mt-1">Reach out directly—we respond within 1–2 business days.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Email
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Instagram
            </a>
            <a
              href={BRAND.calendlyPlaceholder}
              className="inline-flex rounded-xl border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-white/15 dark:text-slate-400"
              title="Replace with your Calendly URL"
            >
              Schedule (soon)
            </a>
          </div>
        </div>

        {state.succeeded ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800/50 dark:bg-emerald-950/30">
            <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
              Thank you! Your message was sent. We&rsquo;ll be in touch soon.
            </p>
            <Button variant="secondary" onClick={handleSendAnother} className="mt-5">
              Send another message
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:p-8"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Full Name
                </label>
                <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                  Email Address
                </label>
                <input type="email" id="email" name="email" required className={inputClass} placeholder="you@business.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
                required
                className={inputClass}
                placeholder="Website, automation, AI chatbot..."
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your business and what you'd like to improve..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
            </div>

            <ValidationError
              errors={state.errors}
              className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
            />

            <Button type="submit" disabled={state.submitting} className="w-full">
              {state.submitting ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
