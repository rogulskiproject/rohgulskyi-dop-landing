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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
      className="relative pt-20 md:pt-28 pb-32 md:pb-44 border-t border-border overflow-hidden"
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
        <div className="px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Work
            </h2>
            <p className="mt-3 font-body text-sm md:text-[15px] font-normal text-foreground/70 max-w-xl leading-[1.5]">
              Selected films, campaigns and visual stories across documentary, fashion and branded work.
            </p>
          </motion.div>
        </div>

        {/* Cinematic horizontal reel */}
        <div
          ref={scrollContainerRef}
          className="mt-10 md:mt-14 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex gap-3 md:gap-4 px-6 md:px-12 pb-2"
            style={{ minWidth: "max-content" }}
          >
            {placeholderProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-[calc(50vw-2rem)] md:w-[calc(50vw-4rem)] max-w-[640px] group cursor-pointer"
                onClick={() => project.link && navigate(project.link)}
              >
                <div className="aspect-[3/2] bg-muted/30 overflow-hidden relative">
                  {project.hasVideo ? (
                    <iframe
                      src="https://player.vimeo.com/video/1107691277?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]"
                      style={{ border: "none" }}
                      allow="autoplay"
                      title={project.title}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                      <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 font-normal">
                        Coming soon
                      </span>
                    </div>
                  )}
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                </div>
                <div className="mt-3">
                  <h3
                    className="font-display text-[13px] md:text-sm font-semibold tracking-tight text-foreground group-hover:text-foreground/70 transition-colors duration-300"
                    onClick={(e) => {
                      if (project.link) {
                        e.stopPropagation();
                        navigate(project.link);
                      }
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-body text-[11px] font-normal text-foreground/40 tracking-[0.04em] mt-0.5">
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
