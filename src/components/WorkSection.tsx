import { motion } from "framer-motion";

const placeholderProjects = [
  { title: "Project One", category: "Documentary" },
  { title: "Project Two", category: "Fashion" },
  { title: "Project Three", category: "Commercial" },
  { title: "Project Four", category: "Branded" },
  { title: "Project Five", category: "Documentary" },
  { title: "Project Six", category: "Fashion" },
];

const WorkSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight uppercase text-foreground">
            Work
          </h2>
          <p className="mt-4 font-body text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            Selected films, campaigns and visual stories across documentary, fashion and branded work.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling work showcase placeholder */}
      <div className="mt-12 md:mt-16 overflow-x-auto">
        <div className="flex gap-4 md:gap-6 px-6 md:px-12 pb-4" style={{ minWidth: "max-content" }}>
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-72 md:w-96 group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-muted border border-border flex items-center justify-center group-hover:bg-accent transition-colors">
                <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
                  Project image
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground tracking-wide uppercase mt-1">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
