"use client";

import { Button } from "@/components/ui/Button";
import { useState, type FormEvent } from "react";

interface FormState {
  name: string;
  practice: string;
  feedback: string;
}

interface FormErrors {
  name?: string;
  practice?: string;
  feedback?: string;
}

const initialState: FormState = {
  name: "",
  practice: "",
  feedback: "",
};

export function FeedbackForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data: FormState): FormErrors {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.practice.trim()) next.practice = "Please enter your practice name.";
    if (!data.feedback.trim()) {
      next.feedback = "Please share your feedback.";
    } else if (data.feedback.trim().length < 20) {
      next.feedback = "Please write at least 20 characters.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Static site: no backend. Ready for future form endpoint integration.
    setSubmitted(true);
    setValues(initialState);
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10">
      <div className="mb-6 max-w-2xl">
        <h3 className="mb-2 text-xl font-bold text-navy sm:text-2xl">
          Share your feedback
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
          Worked with us? Tell us about your experience. We ask permission before
          publishing anything.
        </p>
      </div>

      {submitted ? (
        <div
          className="rounded-xl border border-blue/20 bg-light-blue p-5"
          role="status"
          aria-live="polite"
        >
          <p className="font-semibold text-navy">Thanks for your feedback.</p>
          <p className="mt-1 text-sm text-text-secondary">
            This form is client-side only for now. Your message was validated
            locally and is ready to connect to a backend when available.
          </p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-blue hover:underline"
            onClick={() => setSubmitted(false)}
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              id="feedback-name"
              label="Your name"
              value={values.name}
              error={errors.name}
              onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
            />
            <Field
              id="feedback-practice"
              label="Practice name"
              value={values.practice}
              error={errors.practice}
              onChange={(value) =>
                setValues((prev) => ({ ...prev, practice: value }))
              }
            />
          </div>

          <div>
            <label
              htmlFor="feedback-message"
              className="mb-1.5 block text-sm font-semibold text-navy"
            >
              Your feedback
            </label>
            <textarea
              id="feedback-message"
              name="feedback"
              rows={5}
              value={values.feedback}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, feedback: event.target.value }))
              }
              className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-text-secondary/70 focus:border-blue focus:ring-2 focus:ring-blue/20"
              placeholder="Tell us what stood out about working with Expentra Health…"
              aria-invalid={Boolean(errors.feedback)}
              aria-describedby={errors.feedback ? "feedback-message-error" : undefined}
            />
            {errors.feedback ? (
              <p id="feedback-message-error" className="mt-1.5 text-sm text-red-600">
                {errors.feedback}
              </p>
            ) : null}
          </div>

          <Button type="submit" size="lg">
            Submit feedback
          </Button>
        </form>
      )}
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

function Field({ id, label, value, error, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-text-secondary/70 focus:border-blue focus:ring-2 focus:ring-blue/20"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
