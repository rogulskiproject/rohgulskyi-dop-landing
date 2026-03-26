import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import workBg from "@/assets/work-bg.png";

const placeholderProjects = [
  { title: "Dylan Bachelet", category: "Imagine Magazine", hasVideo: true, link: "/work/dylan-bachelet" },
  { title: "Project Two", category: "Fashion" },
  { title: "Project Three", category: "Commercial" },
  { title: "Project Four", category: "Branded" },
  { title: "Project Five", category: "Documentary" },
  { title: "Project Six", category: "Fashion" },
];

const WorkSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [12, 2, 0, 2, 12]
  );

  const filterStyle = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 border-t border-border overflow-hidden"
    >
      {/* Background image with scroll-driven blur */}
      <motion.img
        src={workBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: filterStyle }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Work
            </h2>
            <p className="mt-4 font-body text-sm md:text-[15px] font-normal text-foreground/70 max-w-xl leading-[1.5]">
              Selected films, campaigns and visual stories across documentary, fashion and branded work.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrolling work showcase */}
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
                onClick={() => project.link && navigate(project.link)}
              >
                <div className="aspect-[3/4] bg-muted/40 border border-border/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/40 transition-colors overflow-hidden">
                  {project.hasVideo ? (
                    <iframe
                      src="https://player.vimeo.com/video/1107691277?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                      className="w-full h-full object-cover pointer-events-none scale-[1.5]"
                      allow="autoplay"
                      title={project.title}
                    />
                  ) : (
                    <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/40 font-normal">
                      Project image
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <h3
                    className="font-display text-sm font-semibold tracking-tight text-foreground hover:text-foreground/70 transition-colors"
                    onClick={(e) => {
                      if (project.link) {
                        e.stopPropagation();
                        navigate(project.link);
                      }
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-body text-[11px] font-normal text-foreground/50 tracking-[0.04em] mt-1">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
