import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-header)]">
          Ready to Start Saving on{" "}
          <span className="text-accent">Energy Costs?</span>
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Let our team show you how we deliver savings from day one. Get in touch
          for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="mailto:info@iecomfort.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
            <ArrowRight size={18} />
          </Link>
          <Link
            href="tel:+1"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            <Phone size={18} />
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
