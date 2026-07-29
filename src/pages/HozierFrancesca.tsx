import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";
import bts1 from "@/assets/hozier/hozier-bts-1.jpg.asset.json";
import bts2 from "@/assets/hozier/hozier-bts-2.jpg.asset.json";

const anim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const meta = [
  { label: "Client", value: 'Hozier — "Francesca," directed by Anthony Byrne' },
  { label: "Category", value: "Music video" },
  { label: "My role", value: "Camera Operator" },
  { label: "Director of Photography", value: "Ilya Maksymenko" },
  { label: "Location", value: "London" },
  { label: "Year", value: "2023" },
];

const creditGroups: { items: string[] }[] = [
  {
    items: [
      "Producer — @alexhandschuh_",
      "Exec Producer — @jamesbyfield",
      "Prod Co — @afterpartystudios",
    ],
  },
  {
    items: [
      "@harrisonimogen for keeping me sane!",
      "DP — @maksymenko.ilya",
      "Steadicam — @Tommy.tcm",
      "CAM OP — @rogulskiproject",
      "CAM OP — @wouterverheuldp",
      "CAM OP — @ci770",
      "1AC — @finchy (the best of the best!)",
      "1AC — Jon Scaife",
      "1AC — Eliot Stone",
      "1AC — Sammy Johnson",
      "2AC — Liam Rough",
      "2AC — Rosie Rayner",
    ],
  },
  {
    items: [
      "Stylist — @juicylames",
      "HMU Artist — @charliemurray",
      "Designer — @ashkhalliburton",
    ],
  },
  {
    items: [
      "Editor — @betheditsldn",
      "Grade — @alexgregorycolour",
      "Post/Online — No.8 London",
    ],
  },
  {
    items: [
      "PM — @jvymeris",
      "1AD — @alcopland",
      "2AD — Harry Hough",
      "Loc M — John-Tore Eastmond",
      "Set Hand — @m.el1705",
      "Set Hand — @shotbyboh",
      "Runner — Tamzen Moulding",
      "Runner — Jess Emens",
    ],
  },
  {
    items: [
      "Gaffer — @prolight_davis",
      "Spark — Scott Heavy",
      "Spark — Barry Keegan",
      "Spark — Joe Hissey",
      "Spark — Richard Harrowing",
      "Key Grip — Johnny Donne",
      "Grip — Tom North",
      "Grip — Billy Smith",
      "Crane Tech — Ross Bainbridge",
      "Grip Trainee — Charlie Bainbridge",
      "DIT — Pete Banks",
      "Vid Op — Pete Hodgson",
    ],
  },
  {
    items: [
      "Hozier — Vocals",
      "Alex Ryan — Bass",
      "Rory Doyle — Drums",
      "Kristen Rogers — BV",
      "Melissa McMillan — BV",
      "Joy Morales — Keyboards",
      "Larissa Maestro-Scherer — Guitar",
      "Kellen Wenrich — Guitar",
      "Ryan Connors — Keyboards",
      "Duchess Iredale — Production Director",
      "Samantha Pauly — Tour Manager",
      "Murt Murphy — Guitar Tech",
      "Fred Burke — Backline Technician",
      "Bailey Griffith — Backline Tech",
      "Hunter Scoggins — Audio Engineer",
      "Mark Philips — Truck Driver",
    ],
  },
];

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8]">
    {children}
  </p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-xl md:text-[26px] font-semibold tracking-tight text-foreground leading-[1.15]">
    {children}
  </h2>
);

/* Editorial section: heading above the body, text flowing vertically in a long, readable column */
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    {...anim}
    className="space-y-6 max-w-[780px] mx-auto"
  >
    <H2>{title}</H2>
    <div className="space-y-6">{children}</div>
  </motion.section>
);

/* Full-width media block: frame on the left, its note on the right */
const MediaBlock = ({
  src,
  alt,
  caption,
  children,
}: {
  src: string;
  alt: string;
  caption: string;
  children?: React.ReactNode;
}) => (
  <motion.figure
    {...anim}
    className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 gap-x-10 xl:gap-x-16 items-center"
  >
    <div className="lg:col-span-7">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full aspect-[3/2] object-cover bg-card"
      />
    </div>
    <figcaption className="lg:col-span-4 lg:col-start-9 space-y-4">
      <span className="block font-body text-[11px] tracking-[0.06em] text-foreground/40 leading-relaxed">
        {caption}
      </span>
      {children}
    </figcaption>
  </motion.figure>
);


const HozierFrancesca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        'Operating Camera on Hozier\'s "Francesca" — Behind the Scenes | Bohdan Rohulskyi',
      description:
        'Behind the scenes as camera operator on Hozier\'s "Francesca" music video, directed by Anthony Byrne, shot in London with five RED cameras and DP Ilya Maksymenko.',
      canonical: "/work/hozier-francesca",
      meta: [
        {
          property: "og:title",
          content:
            'Find Your Own Shot: Operating Camera on Hozier\'s "Francesca"',
        },
        {
          property: "og:description",
          content:
            'Behind the scenes on Hozier\'s "Francesca" music video, directed by Anthony Byrne — London, 2023.',
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "/work/hozier-francesca" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "hozier-francesca",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          'Find Your Own Shot: What I Learned Operating Camera on Hozier\'s "Francesca"',
        author: { "@type": "Person", name: "Bohdan Rohulskyi" },
        about: 'Hozier — "Francesca" music video',
        locationCreated: { "@type": "Place", name: "London, United Kingdom" },
      },
    });
  }, []);

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
          <iframe
            src="https://www.youtube.com/embed/K1u_hL11auM?rel=0&modestbranding=1"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Hozier - Francesca"
          />
        </div>
      </section>

      {/* Header block */}
      <section className="container py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-10 xl:gap-x-16"
        >
          <div className="lg:col-span-7">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-foreground/40">
              Camera Operator — Hozier, "Francesca" (dir. Anthony Byrne) —
              London, 2023
            </p>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Find Your Own Shot: What I Learned Operating Camera on Hozier's
              "Francesca"
            </h1>
            <p className="mt-5 font-body text-sm text-foreground/50 tracking-[0.04em]">
              By{" "}
              <Link to="/about" className="hover:text-foreground transition-colors underline underline-offset-4">
                Bohdan Rohulskyi
              </Link>
            </p>
          </div>

          <dl className="lg:col-span-4 lg:col-start-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-12 gap-y-6 border-t border-border pt-8 lg:pt-2 lg:border-t-0 lg:border-l lg:pl-10">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                  {m.label}
                </dt>
                <dd className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>


      {/* Body */}
      <article className="border-t border-border">
        <div className="container py-16 md:py-24 space-y-16 md:space-y-24">
          <div className="max-w-[780px] space-y-6">
            <P>
              I had just moved to the UK, and this was my first music video
              since arriving. My English was still shaky, and on a set with five
              RED cameras, a director I deeply respected, and a room full of
              people who knew exactly what they were doing, that felt like a
              real problem. I kept thinking: if I mishear one instruction, I
              could ruin someone else's shot.
            </P>
            <P>
              So before we rolled, I did what felt responsible. I went to the
              director, Anthony Byrne, and asked what he wanted from my camera
              in the next set-up. He looked at me and said: "Go find your own
              shot."
            </P>
            <P>I had no idea what to do with that.</P>
          </div>

          <MediaBlock
            src={bts1.url}
            alt="Bohdan Rohulskyi checking the frame on a RED camera with director Anthony Byrne on the set of Hozier's Francesca"
            caption="On set of 'Francesca,' checking the frame with Anthony Byrne."
          >
            <span className="block font-body text-[13px] text-foreground/60 leading-[1.7]">
              Five RED cameras running at once — coverage coordinated in real
              time rather than to a fixed shot list.
            </span>
          </MediaBlock>

          <Section title="The brief: what was actually there">
            <P>
              There was no shot list I could see, and no storyboard I was
              handed. What there was: a scene, a piece of music, and a visual
              reference Anthony had shared for tone and emotional temperature.
              Above me in the chain of command sat Anthony as director and Ilya
              Maksymenko as DP, each almost certainly working from their own
              plan for the wider coverage. My job, as I understood it in the
              moment, was to read the room — to sense what each set-up needed
              rather than wait to be told.
            </P>
            <P>
              With five cameras running at once, my instinct was caution. If I
              moved somewhere, I might drift into someone else's frame or step
              on a plan I couldn't see. So I stayed careful, watching for cues,
              trying not to be a problem on a set where everyone else looked
              completely certain.
            </P>
            <P>
              It didn't feel like confidence. It felt like walking on a set
              where I was the only one without the map — and the map, it turned
              out, wasn't the point.
            </P>
          </Section>

          <Section title="The moment that changed the shot">
            <P>
              I went back to Anthony a second time and asked more directly: what
              do you actually want from my camera here? His answer was the same,
              just quieter: "Feel the moment. Listen to the music. Find your own
              shot."
            </P>
            <P>
              At that point I stopped waiting for permission. I picked up the
              camera, handheld, and found a starting position I liked. The
              choice was simple once I stopped overthinking it: a handheld move,
              close, alive, going straight through the scene rather than sitting
              outside it. I didn't discuss it with anyone first. I just
              committed.
            </P>
            <P>
              When Anthony called action, I started moving. A few seconds in, I
              heard him over the radio: "Yes, yes — keep going, that's it." That
              was the moment I stopped operating from anxiety and started
              operating from instinct — reading the emotional beat of the music
              rather than any rulebook of coverage or convention.
            </P>
            <P>
              Afterwards he put a hand on my shoulder, said "well done, follow
              me," and had me help block moves for two of the other cameras
              while he and the wider team kept building the scene. Watching that
              unfold from the inside — being trusted with someone else's shot,
              not just my own — was one of the more striking moments of the day.
            </P>
          </Section>

          <MediaBlock
            src={bts2.url}
            alt="Director Anthony Byrne between set-ups on the Francesca shoot in London"
            caption="Anthony Byrne between set-ups."
          >
            <span className="block font-body text-[13px] text-foreground/60 leading-[1.7]">
              "Find your own shot" wasn't the absence of direction — it was a
              different kind of direction.
            </span>
          </MediaBlock>

          <Section title="What the decision actually protected">
            <P>
              The instinct behind it was simple: in a five-camera set-up built
              around one emotional beat, a handheld move that lives inside the
              scene reads differently to a locked-off or planned camera watching
              from outside it. It gave that particular set-up presence rather
              than polish — closer to how the moment actually felt than to how
              it might have been storyboarded. That contrast, not any single
              technical choice, is what Anthony was responding to on the radio.
            </P>
            <P>
              None of this came from remembering a rule about coverage or set
              etiquette. It came from putting the checklist down and trusting
              what the scene and the music were actually asking for.
            </P>
          </Section>

          <Section title="Behind the scenes">
            <P>
              This was a proper multi-camera music video shoot: five RED
              cameras, a full lighting and grip department, and three camera
              operators working alongside DP Ilya Maksymenko, coordinating in
              real time rather than to a fixed shot list. On a set that size, an
              operator's job isn't only to execute a frame — it's to know when to
              hold a plan and when a director is actually asking for a point of
              view.
            </P>
          </Section>

          <Section title="Reflection">
            <P>A few things I took from that day, beyond the video itself:</P>
            <ul className="space-y-4 pl-0">
              {[
                "Technical competence gets you hired. A point of view is what a director like Anthony is actually listening for. Camera handling and set discipline are assumed. What he kept asking me for was a decision.",
                "\"Find your own shot\" is not the absence of direction — it's a different kind of direction. It only works if you trust yourself enough to commit to an answer.",
                "The anxiety was real, and it nearly kept me cautious rather than useful. Worrying about getting it wrong is not the same as protecting the work; at a certain point it just gets in the way of it.",
                "Language wasn't the barrier I thought it was. Once I stopped translating instructions literally and started listening to the music and the scene, the communication that mattered was already there.",
                "That day changed how I show up on set since. I bring a point of view now rather than waiting to be told exactly where to stand.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Instagram endorsement card */}
          <motion.aside
            {...anim}
            className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-16"
          >
            <div className="lg:col-span-7 lg:col-start-6 border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 border border-border font-body text-[11px] tracking-[0.06em] text-foreground/50">
                  AB
                </span>
                <div className="leading-tight">
                  <a
                    href="https://www.instagram.com/p/CyGbtBKt7cw/?img_index=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-foreground/85 hover:text-foreground transition-colors"
                  >
                    @antobyrne75
                  </a>
                  <p className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/35 mt-1">
                    Instagram
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 font-body text-[15px] md:text-base text-foreground/85 leading-[1.7]">
                "Bohdan Rohulskyi is a very talented Ukrainian camera operator
                who has a great eye. Always paying attention and always adding
                value. I was very lucky to have hugely talented camera operators
                on this."
              </blockquote>
              <p className="mt-5 font-body text-[11px] tracking-[0.08em] uppercase text-foreground/40">
                — Anthony Byrne, director, on Instagram
              </p>
            </div>
          </motion.aside>

          {/* Credits */}
          <motion.div
            {...anim}
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-10 xl:gap-x-16 border-t border-border pt-12 md:pt-16"
          >
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <H2>Credits</H2>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
              {creditGroups.map((group, gi) => (
                <ul key={gi} className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[13px] text-foreground/60 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </motion.div>
        </div>
      </article>


      <SiteFooter />
    </div>
  );
};

export default HozierFrancesca;
