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
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight uppercase text-foreground">
            Notes / FAQ
          </h2>
          <p className="mt-6 font-body text-sm text-muted-foreground max-w-xl leading-relaxed">
            A future space for articles, thoughts, process notes and practical answers around cinematography, directing and production.
          </p>
          <div className="mt-10 h-32 border border-dashed border-border flex items-center justify-center">
            <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
              Coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotesSection;
