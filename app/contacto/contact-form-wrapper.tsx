import { Suspense } from "react";
import ContactForm from "./contact-form";

export default function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="min-h-[400px]" />}>
      <ContactForm />
    </Suspense>
  );
}
