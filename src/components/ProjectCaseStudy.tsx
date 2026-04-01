import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface ProjectData {
  title: string;
  subtitle: string;
  category: string;
  role: string;
  year?: string;
  vimeoId?: string;
  youtubeId?: string;
  externalUrl?: string;
  introduction: string;
  overview: string[];
  approach: string[];
  reflection: string;
}

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ProjectCaseStudy = ({ project }: { project: ProjectData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderVideo = () => {
    if (project.vimeoId) {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=ffffff`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${project.title} — ${project.subtitle}`}
        />
      );
    }
    if (project.youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`${project.title} — ${project.subtitle}`}
        />
      );
    }
    return (
      <div className="w-full h-full flex items-center justify-center bg-card">
        <span className="font-body text-sm text-muted-foreground">Video coming soon</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Video */}
      <section className="pt-24 md:pt-32">
        <div className="container">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>

        <div className="w-full aspect-video bg-card">
          {renderVideo()}
        </div>
      </section>

      {/* Project Header */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24"
        >
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                {project.subtitle}
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                {project.category}
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Role
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                {project.role}
              </p>
            </div>
            {project.year && (
              <div>
                <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                  Year
                </span>
                <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                  {project.year}
                </p>
              </div>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors"
              >
                Watch on {project.vimeoId ? "Vimeo" : "YouTube"}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...sectionAnim} className="max-w-2xl">
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
            Introduction
          </h2>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            {project.introduction}
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            {...sectionAnim}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Overview
              </h2>
            </div>
            <div className="space-y-6">
              {project.overview.map((p, i) => (
                <p key={i} className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            {...sectionAnim}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Approach
              </h2>
            </div>
            <div className="space-y-6">
              {project.approach.map((p, i) => (
                <p key={i} className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stills Gallery */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim}>
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-12">
              Stills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-muted/40 border border-border/40 flex items-center justify-center"
                >
                  <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30">
                    Still {i}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="max-w-2xl">
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
              Reflection
            </h2>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              {project.reflection}
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProjectCaseStudy;
