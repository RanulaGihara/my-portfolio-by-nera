import ProjectCard from "@/components/projectCard";

const projects = [
  {
    title: "Awesome App",
    description: "Built with Next.js and Tailwind",
    link: "https://github.com/you/awesome-app",
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
