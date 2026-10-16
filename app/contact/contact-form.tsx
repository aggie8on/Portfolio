"use client";
import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/hi@toothless.design", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: "New project enquiry — Toothless Studio",
          _template: "table",
          _captcha: "true",
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") {
        const message = String(result.message || "");
        if (/activat/i.test(message)) {
          throw new Error("One-time setup: check hi@toothless.design for FormSubmit’s activation email and confirm the form. Then submissions will arrive here.");
        }
        throw new Error(message || "The message could not be sent.");
      }
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error && error.message
        ? error.message
        : "We couldn’t send your message just now. Please email hi@toothless.design directly.");
    }
  }

  return <form className="studio-contact-form" onSubmit={handleSubmit}>
    <div className="contact-form-heading"><p className="section-label">A few details <span>— 01</span></p><p>Tell us a little about the project. Fields marked * are required.</p></div>
    <div className="contact-form-grid">
      <label><span>Your name *</span><input autoComplete="name" name="name" placeholder="Name" required /></label>
      <label><span>Email address *</span><input autoComplete="email" name="email" type="email" placeholder="you@company.com" required /></label>
      <label><span>Company / brand</span><input autoComplete="organization" name="company" placeholder="Your company" /></label>
      <label><span>What do you need?</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Logo design</option><option>Brand identity</option><option>Identity system</option><option>Brand refresh</option><option>Something else</option></select></label>
      <label className="contact-form-message"><span>Tell us about the project *</span><textarea name="message" placeholder="What are you building, and what would you like help with?" rows={5} required /></label>
    </div>
    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="contact-form-honey" aria-hidden="true" />
    <div className="contact-form-submit"><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span></button><p aria-live="polite" className={"contact-form-feedback " + status}>{feedback}</p></div>
    <p className="contact-form-privacy">Your details are used only to respond to this enquiry.</p>
  </form>;
}
