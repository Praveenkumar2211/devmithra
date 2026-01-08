const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <span className="text-muted-foreground text-sm font-medium">
            Powered by Modern Technologies
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-5 py-2.5 bg-card rounded-full border border-border/50 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
