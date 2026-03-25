import { motion } from "framer-motion";

const genres = [
  "Documentary films",
  "Fashion campaigns",
  "Commercial campaigns",
  "Branded storytelling",
  "Product and launch films",
  "Portrait-led stories",
  "Agile productions that need both story and cinematography",
];

const GenresSection = () => {
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
            Best fit for
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-0">
          {genres.map((genre, i) => (
            <motion.div
              key={genre}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t border-border py-5 md:py-6 pr-8"
            >
              <span className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                {genre}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 font-body text-sm text-muted-foreground max-w-2xl leading-relaxed"
        >
          Bohdan is particularly well suited to projects that need visual sophistication, emotional realism and a strong sense of narrative without overcomplicating the production.
        </motion.p>
      </div>
    </section>
  );
};

export default GenresSection;
