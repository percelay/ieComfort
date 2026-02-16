import { Cloud, Wifi, BarChart3, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Wifi,
    title: "Real-Time Monitoring",
    description: "Track building systems performance live from anywhere.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Actionable insights with data-driven energy reports.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security for your building data.",
  },
];

export default function CloudBox() {
  return (
    <section id="cloudbox" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/5 to-blue-50 rounded-2xl p-10 md:p-14 border border-blue-100">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud size={40} className="text-accent" />
              </div>
              <h3 className="text-center text-xl font-bold text-text-main font-[family-name:var(--font-header)]">
                ieComfort CloudBox
              </h3>
              <p className="text-center text-sm text-text-muted mt-2">
                Cloud-Based Building Management
              </p>

              {/* Feature mini cards */}
              <div className="mt-8 space-y-4">
                {features.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-main">
                          {feat.title}
                        </p>
                        <p className="text-xs text-text-muted">{feat.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Our Technology
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main leading-tight font-[family-name:var(--font-header)]">
              Smart Building Management{" "}
              <span className="text-accent">in the Cloud</span>
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              The ieComfort CloudBox is our proprietary cloud-based platform that
              gives you full visibility and control over your building&apos;s HVAC,
              lighting, and energy systems — all from one unified dashboard.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Monitor performance in real time, identify inefficiencies, and make
              data-driven decisions that translate directly to cost savings and
              improved occupant comfort.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
