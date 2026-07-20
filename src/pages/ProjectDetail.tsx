import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CANONICAL = "https://bohdanrohulskyi.com/work/dylan-bachelet";
const OFFICIAL_URL = "https://imaginemagazine.co/article/dylan-bachelet-2/";
const ROSSO_STUDY_URL =
  "https://journals.sagepub.com/doi/10.1177/0170840613517600";
const CONTACT_EMAIL = "rogulskiproject@gmail.com";

const credits: Array<[string, string]> = [
  ["Subject", "Dylan Bachelet"],
  ["Writer", "Chris Saunders"],
  ["Photographer", "Bartek Szmigulski"],
  ["Videographer", "Bohdan Rohulskyi"],
  ["Stylist", "Justin Hamilton"],
  ["Stylist Assistant", "Lorna Lane"],
  ["Hair Stylist", "Lee Patrick Devlin"],
  ["Grooming", "Rosie McGinn"],
  ["Studio Manager", "Karolina Wielocha"],
  ["Studio", "The Nook"],
  ["Producer", "Emma Christopher"],
  ["Editor-in-Chief", "Olive Walton"],
];

const faqs: Array<{ q: string; a: string }> = [
  {
    q: "Can video be filmed alongside a fashion editorial photoshoot?",
    a: "Yes. Establish which department has priority, agree a few protected motion windows and build a lighting plan both teams can use. On this project, that let photography lead without reducing the film to behind-the-scenes coverage.",
  },
  {
    q: "What is the difference between an editorial film and behind-the-scenes video?",
    a: "Behind-the-scenes coverage records how a shoot happened. An editorial film has its own visual point of view and should stand beside the photographs as part of the finished story.",
  },
  {
    q: "How can motion be lit without rebuilding a stills setup?",
    a: "Start with the existing light. For the Dylan Bachelet portrait, a large frosted window provided broad fill and one fixture acted as the key. Moving that key closer gave me more exposure and shape without rebuilding the set.",
  },
  {
    q: "Why use a tripod for a short fashion film?",
    a: "A tripod made the limited shooting windows more deliberate. Choosing the frame first gave small movements more weight and helped the film sit naturally beside the editorial photography.",
  },
  {
    q: "Why does the film combine black-and-white and colour?",
    a: "Colour held the skin tone, clothes and atmosphere; black-and-white concentrated attention on expression, form and gesture. Moving between them gave the 31-second portrait rhythm without forcing a conventional plot.",
  },
  {
    q: "What was Bohdan Rohulskyi's role on the IMAGINE Magazine editorial?",
    a: "The official IMAGINE feature credits Bohdan Rohulskyi as Videographer. He developed the motion approach and filmed the editorial portrait of Dylan Bachelet.",
  },
];

// Shared column widths — keep readable measure on desktop
const COL_GRID = "grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24";
const BODY_COL = "max-w-[800px] space-y-6";
const PARA =
  "font-body text-sm md:text-[15px] text-foreground/70 leading-[1.65]";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        "Filming Video Alongside a Fashion Editorial | Dylan Bachelet for IMAGINE",
      description:
        "London cinematographer Bohdan Rohulskyi explains how he filmed Dylan Bachelet for IMAGINE Magazine inside a stills-led editorial using one light and a tripod.",
      canonical: CANONICAL,
      meta: [
        {
          property: "og:title",
          content:
            "Filming Video Alongside a Fashion Editorial | Dylan Bachelet for IMAGINE",
        },
        {
          property: "og:description",
          content:
            "London cinematographer Bohdan Rohulskyi explains how he filmed Dylan Bachelet for IMAGINE Magazine inside a stills-led editorial using one light and a tripod.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: CANONICAL },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "dylan-bachelet",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Film Had to Fit Between the Stills",
          description:
            "London cinematographer Bohdan Rohulskyi on filming Dylan Bachelet for IMAGINE Magazine inside a stills-led editorial using one light and a tripod.",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "https://bohdanrohulskyi.com/about",
            jobTitle: "Cinematographer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "London",
              addressCountry: "GB",
            },
          },
          mainEntityOfPage: CANONICAL,
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Dylan Bachelet x IMAGINE Magazine — Editorial Portrait Film",
          description:
            "A short 4:3 editorial portrait of Dylan Bachelet filmed by Bohdan Rohulskyi for an IMAGINE Magazine feature.",
          duration: "PT30.88S",
          uploadDate: "2025-06-09",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
      ],
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
            src="https://player.vimeo.com/video/1107691277?title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Dylan Bachelet — IMAGINE Magazine editorial portrait film"
          />
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
              Dylan Bachelet
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Imagine Magazine
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Publication
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                IMAGINE Magazine
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Editorial portrait film / fashion and culture
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Role
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Videographer
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Location
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                The Nook, Hackney Central, London
              </p>
            </div>
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              View feature on IMAGINE
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...sectionAnim} className={BODY_COL}>
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-2">
            Introduction
          </h2>
          <p className={PARA}>
            The message came through Instagram. Producer Emma Christopher and IMAGINE Editor-in-Chief Olive Walton had seen my work and wanted a moving portrait to sit alongside an editorial with Dylan Bachelet.
          </p>
          <p className={PARA}>
            On paper, straightforward. On set, photography had first call.
          </p>
          <p className={PARA}>
            Bartek Szmigulski was shooting the stills, and the day quite rightly revolved around the photographs, styling and grooming. The film had no separate world to retreat into. I could observe while the stills were being made, then work quickly whenever Dylan and the set became available.
          </p>
          <p className={PARA}>
            That was the real brief: make something authored without behaving like a second production. Push too hard and video slows the day down. Hang back too far and you return with behind-the-scenes coverage rather than a film.
          </p>
          <p className={PARA}>
            The space between those two outcomes is where this portrait was made.
          </p>
        </motion.div>
      </section>

      {/* Overview: The Brief */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Overview: The Brief
              </h2>
            </div>
            <dl className={`${BODY_COL} !space-y-6 ${PARA}`}>
              <div>
                <dt className="text-foreground/90 font-medium">Publication</dt>
                <dd>IMAGINE Magazine, a fashion, entertainment and culture title.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">Collaboration</dt>
                <dd>A creative editorial made with the IMAGINE team.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">The motion brief</dt>
                <dd>
                  Develop a distinct idea and visual approach for a short portrait of Dylan Bachelet without turning the editorial into a separate film shoot.
                </dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">The working reality</dt>
                <dd>
                  Stills had priority. Motion shared the studio, lighting conditions and Dylan's time with the photography team.
                </dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">My contribution</dt>
                <dd>
                  I developed the motion approach around controlled 4:3 frames, small gestures, restrained colour and black-and-white imagery. I also recorded short interview responses between setups, which gave the portrait its voice without stopping the day for a formal interview.
                </dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">My role</dt>
                <dd>
                  I am publicly credited as Videographer on the{" "}
                  <a
                    href={OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
                  >
                    official IMAGINE feature
                  </a>
                  . I developed the motion approach and filmed the piece.
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Creative Approach */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Creative Approach
              </h2>
            </div>
            <div className="max-w-[800px] space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The photo set was the set
                </h3>
                <p className={PARA}>
                  Once I accepted the hierarchy, the day became much easier to read.
                </p>
                <p className={PARA}>
                  While Bartek was working, I used the time to watch how Dylan moved into and out of a pose, how the clothes behaved between still frames, where the light held and which angles were worth returning to. The moments around the photograph were often as useful as the photograph itself.
                </p>
                <p className={PARA}>
                  When a short motion window opened, I already knew where the tripod needed to go and what the frame was there to catch. Observation gave me behaviour; those protected minutes gave me precision.
                </p>
                <p className={PARA}>
                  There is a fair bit of restraint in that way of working. A good angle is only useful if stepping into it does not interrupt the photograph. On a shared set, timing is part of composition.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  A portrait made in borrowed minutes
                </h3>
                <p className={PARA}>
                  With limited access to the subject, a long shot list can become false reassurance. I planned the coverage by function instead:
                </p>
                <ul className={`${PARA} list-disc pl-5 space-y-1.5`}>
                  <li>a few frames that held Dylan's presence;</li>
                  <li>changes in scale from face and eyes to hands, clothes and posture;</li>
                  <li>small movements that did not require a reset;</li>
                  <li>enough contrast between looks to make the finished piece progress;</li>
                  <li>brief spoken material when the room went quiet enough to record it.</li>
                </ul>
                <p className={PARA}>
                  That structure meant I was never inventing a new film every time the set opened up. I was completing the same portrait in pieces.
                </p>
                <p className={PARA}>
                  The published film is just over 30 seconds. At that length, coverage has to earn its place quickly. A turn of the head can do more than a complicated camera move when the frame around it is right.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The person cannot become another item on the call sheet
                </h3>
                <p className={PARA}>
                  Dylan was used to being watched and photographed. Camera familiarity and trust are different things. In my experience, people who spend a lot of time in front of cameras notice very quickly whether a crew is interested in them or merely collecting material.
                </p>
                <p className={PARA}>
                  I kept the direction short and conversational. I explained what I needed, left space between takes and avoided making every second feel like a test. Dylan could relax, enjoy the process and give me variations without the room becoming heavy.
                </p>
                <p className={PARA}>
                  That ease is visible. It changes the shoulders, the glance after a pose and the willingness to try one more thing. Looking after the person is part of cinematography because it changes what there is to film.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematography */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Cinematography
              </h2>
            </div>
            <div className="max-w-[800px] space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  One fixture, one window
                </h3>
                <p className={PARA}>
                  I had one lighting fixture for the motion work. Rather than fighting the studio, I chose Dylan's position around a large nearby window that had been softened with frost.
                </p>
                <p className={PARA}>
                  The window gave me broad fill. My fixture became the key; when I needed more exposure or shape, I moved it closer rather than building a larger setup. The adjustment took seconds and kept the motion work inside the editorial's existing visual world.
                </p>
                <p className={PARA}>
                  The lamp count was incidental. What mattered was keeping the film in the same visual world, without making it look as though another crew had arrived.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The tripod kept the images intentional
                </h3>
                <p className={PARA}>
                  Tight timing often pushes people towards handheld coverage. I went the other way and used a tripod for much of the work.
                </p>
                <p className={PARA}>
                  The fixed camera made me choose the frame before asking Dylan to move. It also let small changes carry more weight: a glance, a hand entering the composition, the line of a vest, the pause before another pose. Those still-like holds connected naturally with the photography without turning the film into a slideshow.
                </p>
                <p className={PARA}>
                  The 4:3 frame helped as well. Its proportions sit naturally beside editorial photography and give a face, garment or fragment of the body enough graphic weight without needing a wide studio view.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Colour and black-and-white as two sides of the same person
                </h3>
                <p className={PARA}>
                  Colour described the editorial world: skin, clothes and the atmosphere of the room. Black-and-white cut closer to expression, shape and line.
                </p>
                <p className={PARA}>
                  I treated the shift as a change of register, never as decoration. In a film this short, moving between the two gave the portrait rhythm and allowed different sides of Dylan to coexist without forcing a conventional plot.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Interviews without building an interview set
                </h3>
                <p className={PARA}>
                  We recorded a couple of short responses during pauses in the main shoot. There was no formal talking-head reset; I kept the setup light and used the room as it was.
                </p>
                <p className={PARA}>
                  Those answers became the spine of the portrait. A small amount of voice gave the images something to orbit without making them explain everything.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Behind the Scenes
              </h2>
            </div>
            <div className="max-w-[800px] space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The practical setup
                </h3>
                <p className={PARA}>
                  The kit stayed compact because the camera needed to be ready when the set opened up. Every choice had to support quick positioning, a consistent image and a small footprint around the stills team.
                </p>
              </div>

              <dl className={`${PARA} space-y-4`}>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Camera</dt>
                  <dd>Blackmagic Pocket Cinema Camera 6K — BMPCC 6K</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Lenses</dt>
                  <dd>Sigma 18–35mm and Tokina 11–16mm</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Support</dt>
                  <dd>Tripod</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Frame</dt>
                  <dd>4:3</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Lighting</dt>
                  <dd>
                    One key fixture with a large frosted window providing broad fill
                  </dd>
                </div>
              </dl>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The finished film
                </h3>
                <p className={PARA}>
                  The{" "}
                  <a
                    href={OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
                  >
                    official IMAGINE page
                  </a>{" "}
                  hosts the 30.88-second 4:3 film. The collaboration was published on 9 June 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Reflection
              </h2>
            </div>
            <div className="max-w-[800px] space-y-6">
              <p className={PARA}>Constraints have no magic of their own.</p>
              <p className={PARA}>
                <a
                  href={ROSSO_STUDY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
                >
                  Brent Rosso's field study of four creative teams
                </a>{" "}
                found that constraints could help or hinder creativity depending on the team environment and how those constraints were understood. Teams benefited when the environment helped them treat limits as useful parameters; the same limits became damaging when the team dynamics worked against them.
              </p>
              <p className={PARA}>
                A fashion set is a different environment, though the distinction feels accurate. Photography having priority did not improve the film by itself. A clear hierarchy, a calm working relationship and short protected windows turned that restriction into a usable structure.
              </p>
              <p className={PARA}>
                For a producer planning stills and motion on the same day, I would protect three things:
              </p>
              <ol className={`${PARA} list-decimal pl-5 space-y-2`}>
                <li>
                  <span className="text-foreground/90 font-medium">One clear hierarchy.</span>{" "}
                  Decide who has priority, when it changes and who calls the handover.
                </li>
                <li>
                  <span className="text-foreground/90 font-medium">One compatible visual world.</span>{" "}
                  Give both departments a lighting plan they can work with rather than paying for repeated resets.
                </li>
                <li>
                  <span className="text-foreground/90 font-medium">A few genuinely protected minutes.</span>{" "}
                  Observation can find the film, but the subject still needs moments when motion has their full attention.
                </li>
              </ol>
              <p className={PARA}>
                This project worked inside the territory the day could give it: quick decisions, respect for the room and a clear idea of what the film was trying to notice. The real skill was knowing what not to ask for and still coming back with a film rather than coverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credits */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Credits
              </h2>
            </div>
            <dl className="max-w-[800px] divide-y divide-border/60">
              {credits.map(([role, name]) => (
                <div
                  key={role}
                  className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-4 py-3"
                >
                  <dt className="font-body text-[11px] tracking-[0.14em] uppercase text-foreground/40">
                    {role}
                  </dt>
                  <dd className="font-body text-sm md:text-[15px] text-foreground/80">
                    {name}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                FAQ
              </h2>
            </div>
            <div className="max-w-[800px] space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q} className="space-y-3">
                  <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                    {q}
                  </h3>
                  <p className={PARA}>{a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work With Bohdan */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Work With Bohdan
              </h2>
            </div>
            <div className="max-w-[800px] space-y-6">
              <p className={PARA}>
                Producing a fashion or culture editorial where motion has to work around a stills-led day?
              </p>
              <p className={PARA}>
                Send the treatment, schedule and visual references. I can help build a motion approach that belongs to the editorial, works inside the real production plan and gives the film its own point of view.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Editorial%20motion%20brief`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                >
                  Send a treatment or brief
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  View fashion &amp; culture work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
