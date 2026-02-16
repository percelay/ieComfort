import { Fan, Lightbulb, Cloud, TrendingUp, Gavel } from "lucide-react";

const functions = [
  {
    icon: Fan,
    title: "HVAC Solutions",
    description:
      "Comprehensive heating, ventilation, and air conditioning services. We optimize your systems for peak performance and energy efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Experts",
    description:
      "Modern lighting retrofits and smart controls that dramatically reduce energy consumption while improving occupant comfort.",
  },
  {
    icon: Cloud,
    title: "ieComfort CloudBox",
    description:
      "Our proprietary cloud-based building management platform — monitor, control, and optimize your facility systems in real time.",
  },
  {
    icon: TrendingUp,
    title: "Energy Improvement",
    description:
      "National Energy Improvement Fund upgrades that unlock incentives and flexible financing for your building modernization projects.",
  },
  {
    icon: Gavel,
    title: "Utility Auction Platform",
    description:
      "One of the only live utility auction platforms available — driving competitive rates and delivering savings from day one.",
  },
];

export default function CoreFunctions() {
  return (
    <section id="core-functions" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main font-[family-name:var(--font-header)]">
            ieComfort Core Functions
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            A full suite of energy solutions designed to reduce costs, improve
            comfort, and modernize your facilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, idx) => {
            const Icon = func.icon;
            return (
              <div
                key={func.title}
                className={`group bg-surface rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  idx >= 3 ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3 font-[family-name:var(--font-header)]">
                  {func.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {func.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
