import { Building2 } from "lucide-react";

const clients = [
  "Hudson County Community College",
  "JFK Medical Center",
  "Hebrew Home for The Aged",
  "Eastchester Union Free School District",
  "NYC Department of Sanitation",
  "NJ Dept of Environmental Protection",
  "New York University",
  "J. CREW",
  "Hot Topic",
  "Warby Parker",
  "Ritz-Carlton (Central Park)",
  "Middlesex County College",
  "Staten Island Skating Pavilion",
  "The Corcoran Group",
  "Jersey City Housing Authority",
  "Teachers College",
  "Chappaqua K-12 Schools",
  "Principal Academy Charter School",
];

export default function ClientMarquee() {
  return (
    <section className="py-16 md:py-20 bg-surface border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted">
          Trusted by leading organizations across the Northeast
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 w-max">
          {/* Duplicate the list for seamless looping */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-gray-100 shrink-0 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Building2 size={18} className="text-accent shrink-0" />
              <span className="text-sm font-medium text-text-main whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
