import { MapPin } from "lucide-react";

const projects = [
  {
    name: "Hudson County Community College",
    detail: "The Joseph A. Cundari Center",
    location: "NJ",
  },
  {
    name: "JFK Medical Center",
    detail: "Muhlenberg Hospital",
    location: "Plainfield, NJ",
  },
  {
    name: "Hebrew Home for The Aged",
    detail: "RiverSpring Assisted Living",
    location: "NY",
  },
  {
    name: "Chappaqua K-12 Schools",
    detail: "Full district coverage",
    location: "NY",
  },
  {
    name: "Eastchester Union Free School District",
    detail: "District-wide energy solutions",
    location: "NY",
  },
  {
    name: "NYC Department of Sanitation",
    detail: "Government facility optimization",
    location: "NYC",
  },
  {
    name: "New York University",
    detail: "J Street facility",
    location: "NYC",
  },
  {
    name: "Ritz-Carlton — Central Park",
    detail: "Premium hospitality HVAC",
    location: "NYC",
  },
  {
    name: "J. CREW",
    detail: "Retail environment solutions",
    location: "Northeast",
  },
  {
    name: "Warby Parker",
    detail: "Retail location management",
    location: "Northeast",
  },
  {
    name: "Hot Topic",
    detail: "Retail climate systems",
    location: "Northeast",
  },
  {
    name: "NJ Dept of Environmental Protection",
    detail: "State government facilities",
    location: "NJ",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Our Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main font-[family-name:var(--font-header)]">
            Projects & Services Spotlight
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            From world-class hotels to public institutions, we deliver energy
            solutions that make a measurable impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-text-main mb-1 font-[family-name:var(--font-header)]">
                {project.name}
              </h3>
              <p className="text-xs text-text-muted mb-3">{project.detail}</p>
              <div className="flex items-center gap-1.5 text-xs text-accent font-medium">
                <MapPin size={12} />
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
