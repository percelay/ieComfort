import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Decades of experience in facility management",
  "Serving organizations throughout the Northeast",
  "Proprietary CloudBox technology platform",
  "Flexible financing and incentive programs",
  "Live utility auction platform for best rates",
  "Savings delivered from day one",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              About ieComfort
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main leading-tight font-[family-name:var(--font-header)]">
              Innovative Building Solutions{" "}
              <span className="text-accent">Aligned with Your Mission</span>
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Our team has decades of experience supporting facilities throughout
              the Northeast. Customers reach out for help in solving their HVAC
              problems, that drain not just their operations budget, but their
              entire balance sheet.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              We&apos;re delivering savings that were thought to be impossible, with
              the best blend of products, unlocking incentives, flexible
              financing, and one of the only live utility auction platforms;
              we&apos;re able to deliver savings from day 1.
            </p>
          </div>

          {/* Right — Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-main">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
