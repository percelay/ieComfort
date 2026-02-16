import { DollarSign, Users, Cpu, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: DollarSign,
    title: "Day-One Savings",
    description:
      "Our unique combination of products, incentives, and auction platforms means you start saving immediately.",
  },
  {
    icon: Users,
    title: "Decades of Expertise",
    description:
      "Our team brings extensive experience supporting facilities of all sizes throughout the Northeast.",
  },
  {
    icon: Cpu,
    title: "Proprietary Technology",
    description:
      "The ieComfort CloudBox platform gives you unmatched visibility and control over your building systems.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "From the Ritz-Carlton to public school districts, our clients trust us to deliver measurable outcomes.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — Copy (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Why ieComfort
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main leading-tight font-[family-name:var(--font-header)]">
              Why Choose{" "}
              <span className="text-accent">Us?</span>
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              We don&apos;t just solve problems — we deliver savings that were
              thought to be impossible. Our holistic approach combines the best
              products, smart financing, and cutting-edge technology.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right — Cards (3 cols) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group bg-surface rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-main mb-2 font-[family-name:var(--font-header)]">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
