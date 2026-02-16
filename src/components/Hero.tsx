import Link from "next/link";
import { ArrowRight, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-20 bg-bg relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-accent text-sm font-semibold rounded-full mb-6">
              <Zap size={16} />
              <span>Energy Solutions Leader</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-text-main font-[family-name:var(--font-header)]">
              Energy Solutions by{" "}
              <span className="text-accent">ieComfort</span>
              <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-muted">
                HVAC & Lighting Experts
              </span>
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Innovative Building Solutions Aligned with Your Mission — delivering
              savings that were thought to be impossible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#core-functions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-text-main font-semibold rounded-xl hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>

            {/* Social proof mini */}
            <div className="mt-10 flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-accent" />
                <span>Decades of Experience</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <span>Serving the Northeast</span>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-50 aspect-[4/3]">
              {/* Decorative HVAC/Building visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      className="w-14 h-14 text-accent"
                    >
                      {/* Building icon */}
                      <rect x="10" y="20" width="24" height="50" rx="2" fill="currentColor" opacity="0.2" />
                      <rect x="46" y="10" width="24" height="60" rx="2" fill="currentColor" opacity="0.3" />
                      <rect x="14" y="26" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="24" y="26" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="14" y="38" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="24" y="38" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="14" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="24" y="50" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="50" y="16" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="60" y="16" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="50" y="28" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="60" y="28" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="50" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="60" y="40" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="50" y="52" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="60" y="52" width="6" height="6" rx="1" fill="currentColor" opacity="0.6" />
                      {/* Leaf / Green energy accent */}
                      <circle cx="40" cy="8" r="6" fill="#22c55e" opacity="0.5" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-primary/70 font-[family-name:var(--font-header)]">
                    Modern Facility Management
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    HVAC &bull; Lighting &bull; Energy Optimization
                  </p>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Energy Savings</p>
                  <p className="text-sm font-bold text-text-main">From Day 1</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Trusted By</p>
                  <p className="text-sm font-bold text-text-main">Major Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
