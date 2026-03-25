import { motion } from "framer-motion";

const NotesSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Notes / FAQ
          </h2>
          <p className="mt-6 font-body text-sm font-normal text-foreground/55 max-w-xl leading-[1.55]">
            A future space for articles, thoughts, process notes and practical answers around cinematography, directing and production.
          </p>
          <div className="mt-10 h-32 border border-dashed border-border flex items-center justify-center">
            <span className="font-body text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-normal">
              Coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotesSection;
