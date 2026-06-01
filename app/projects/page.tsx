const projects = [
  {
    title: "European Soccer Analytics Research",
    description:
      "Predictive modeling and tactical clustering using data from 25,000+ European soccer matches.",
    tools: "RStudio, Statistical Modeling, Data Analysis, Data Visualization",
    highlights: [
      "Cleaned and analyzed a large European soccer dataset",
      "Built models to explore match outcomes and team momentum",
      "Used clustering to identify tactical league and team patterns",
    ],
  },
  {
    title: "Mental Wellness HCI Research Project",
    description:
      "User-centered design project exploring stress management, emotional reflection, and low-friction wellness tools.",
    tools: "HCI, UX Research, Prototyping, Accessibility",
    highlights: [
      "Defined user needs around student stress and emotional support",
      "Created personas, workflows, and design recommendations",
      "Focused on reducing friction in self-reflection tools",
    ],
  },
  {
    title: "Wellness & Productivity Dashboard",
    description:
      "Interactive dashboard application focused on tracking productivity, habits, wellness, and personal analytics through a modern user-centered interface.",

    tools: "Next.js, React, Tailwind CSS, JavaScript, UI/UX Design",

    highlights: [
      "Built a responsive dashboard layout using reusable React components",
      "Designed interactive productivity and wellness tracking features",
      "Focused on clean UI design, usability, and data visualization concepts",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <nav className="flex justify-between items-center mb-16">
        <h2 className="text-2xl font-bold">CF</h2>

        <div className="flex gap-6 text-white/70">
          <a href="/ ">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto">
        <p className="text-white/60 mb-3">Portfolio</p>

        <h1 className="text-5xl font-bold mb-4">Christian Forbes</h1>

        <p className="text-xl text-white/70 max-w-2xl mb-12">
          Informatics student focused on analytics, HCI, and human-centered
          technology.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/15 rounded-2xl p-6 bg-white/5"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-white/70 mb-5">{project.description}</p>

              <ul className="list-disc list-inside text-white/60 mb-5 space-y-1">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="text-sm text-white/45">{project.tools}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
