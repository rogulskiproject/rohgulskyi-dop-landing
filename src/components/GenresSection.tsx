import { motion } from "framer-motion";

const categories = [
  {
    title: "Fashion & culture",
    items: [
      "Fashion campaigns",
      "Fashion films",
      "Fashion show videography",
      "Editorial video content",
      "Social media content for fashion brands",
    ],
  },
  {
    title: "Sports & performance",
    items: [
      "Sports campaigns",
      "Athlete stories",
      "Performance-led brand films",
      "Branded sports content",
      "Fashion-sport collaborations",
    ],
  },
  {
    title: "Documentary & real stories",
    items: [
      "Documentary films",
      "Documentary cinematography",
      "Interview-led films",
      "Portrait documentaries",
      "Concert films and live performance",
    ],
  },
  {
    title: "Brand storytelling",
    items: [
      "Branded films",
      "Commercial campaigns",
      "Case study videos",
      "Customer testimonials",
      "Founder stories",
    ],
  },
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
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Best fit for
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-default"
            >
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground tracking-tight mb-5 transition-opacity duration-300 group-hover:opacity-80">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm font-normal text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-20 pt-10 border-t border-border"
        >
          <p className="font-body text-sm md:text-[15px] font-normal text-muted-foreground max-w-3xl leading-relaxed px-0 py-0 mx-0 my-0 pr-[43px] pb-[23px]">
            Bohdan is best suited to projects that combine real people, natural environments and a cinematic approach - delivering emotionally grounded work while keeping the production efficient, focused and well-paced
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GenresSection;
