import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";

const anim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const meta = [
  {
    label: "Client",
    value: "Orserio",
  },
  { label: "Category", value: "Brand Storytelling / Fashion & Culture" },
  {
    label: "Role",
    value: "Director, Director of Photography, Editor",
  },
  { label: "Location", value: "Portugal" },
  { label: "Year", value: "2026" },
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

/* Editorial two-column section: sticky heading left, copy right */
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    {...anim}
    className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-10 xl:gap-x-16 items-start"
  >
    <div className="lg:col-span-4">
      <div className="lg:sticky lg:top-32">
        <H2>{title}</H2>
      </div>
    </div>
    <div className="lg:col-span-7 lg:col-start-6 space-y-6 max-w-[640px]">
      {children}
    </div>
  </motion.section>
);

/*
  Empty image slot — drop a real frame/BTS file in later.
  Do NOT name the specific property or beach in any caption or alt text.
  Do NOT fill with stock or AI-generated imagery.
*/
const ImageSlot = ({
  alt,
  caption,
  src,
  videoSrc,
}: {
  alt: string;
  caption: string;
  src?: string;
  videoSrc?: string;
}) => (
  <motion.figure
    {...anim}
    className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 gap-x-10 xl:gap-x-16 items-center"
  >
    <div className="lg:col-span-7">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          className="w-full aspect-[3/2] object-cover bg-card"
        />
      ) : src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full aspect-[3/2] object-cover bg-card"
        />
      ) : (
        <div className="w-full aspect-[3/2] bg-card border border-border/60 flex items-center justify-center">
          <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/30 px-6 text-center">
            Image slot — {alt}
          </span>
        </div>
      )}
    </div>
    <figcaption className="lg:col-span-4 lg:col-start-9 space-y-3">
      <span className="block font-body text-[11px] tracking-[0.06em] text-foreground/40 leading-relaxed">
        {caption}
      </span>
    </figcaption>
  </motion.figure>
);

const Orserio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        "Orserio Launch Film in Portugal | Director & DoP Bohdan Rohulskyi",
      description:
        "A storm wiped out a location mid-shoot. How the Orserio menswear launch film was cast, shot and cut on a fixed deadline — with a lean crew in Portugal.",
      canonical: "/work/orserio",
      meta: [
        {
          property: "og:title",
          content:
            "How the Orserio Launch Film Got Made Before the Deadline — Through a Storm",
        },
        {
          property: "og:description",
          content:
            "A new menswear label needed a launch film with the release date fixed. A storm wiped out a location mid-shoot. It still shipped on time.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "/work/orserio" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "orserio",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "How the Orserio Launch Film Got Made Before the Deadline — Through a Storm",
          description:
            "A new menswear label needed a launch film with the release date fixed. A storm wiped out a location mid-shoot. It still shipped on time.",
          datePublished: "2026-04-11",
          dateModified: "2026-04-11",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "/about",
          },
          mainEntityOfPage: "/work/orserio",
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Orserio — Launch Film",
          description:
            "Launch film for menswear label Orserio, shot in Portugal. Directed, shot and edited by Bohdan Rohulskyi.",
          uploadDate: "2026-04-11",
          embedUrl: "https://player.vimeo.com/video/1172857771",
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Video — unchanged */}
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
            src="https://player.vimeo.com/video/1172857771?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Orserio — Launch Film"
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
              Brand Storytelling — Orserio — Portugal, 2026
            </p>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              How the Orserio Launch Film Got Made Before the Deadline — Through
              a Storm
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-foreground/70 leading-[1.6] max-w-[640px]">
              A new menswear label needed a launch film with the release date
              already fixed. A storm wiped out a location mid-shoot. It still
              shipped on time. Here's how.
            </p>
            <p className="mt-6 font-body text-sm text-foreground/50 tracking-[0.04em]">
              By{" "}
              <Link
                to="/about"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                Bohdan Rohulskyi
              </Link>{" "}
              — London-based cinematographer and Director of Photography
            </p>
            <p className="mt-2 font-body text-[11px] tracking-[0.06em] text-foreground/40">
              Published:{" "}
              <time dateTime="2026-04-11">11 April 2026</time> · Last updated:{" "}
              <time dateTime="2026-04-11">11 April 2026</time>
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
        <div className="container py-12 md:py-16 lg:py-20 space-y-12 md:space-y-14 lg:space-y-12">
          {/* Opening */}
          <motion.section
            {...anim}
            className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-16"
          >
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 max-w-[640px]">
              <p className="font-display text-lg md:text-xl text-foreground leading-[1.5]">
                Day two, and the beach was gone.
              </p>
              <P>
                We'd landed in Portugal into a storm. The coastline the shoot
                was built around — sand, access, the whole plan for that half of
                the film — had been stripped out overnight. Launch date fixed.
                No slack in the schedule. On most productions this is where you
                lose a day: someone calls the producer, the producer calls the
                client, options get costed, everyone waits.
              </P>
              <P>
                Our local producer, who knew the area, had an alternative on the
                table fast — a harder-to-reach beach he'd scouted as a backup. I
                hiked down with the gear, checked it against the sun, and
                rebuilt the day's plan on the spot. We shot everything we
                needed.
              </P>
              <P>
                Two things made that possible. A producing team that had options
                ready instead of panicking — and the fact that the person
                holding the camera was also the person who wrote the concept and
                would cut it, so the plan could be redrawn in minutes rather
                than sent up a chain for approval.
              </P>
              <P>
                That combination — a team that runs the ground tightly and a
                director-DoP-editor who can turn on a coin — is the whole reason
                this film shipped on time. It's what this piece is about.
              </P>
            </div>
          </motion.section>

          <Section title="The problem this film had to survive">
            <P>
              Orserio was launching a new menswear line — physique-focused
              t-shirts, but positioned as <em>quiet luxury</em>, not activewear.
              Smart casual for a man who trains and would rather not advertise
              it. Their brand book said it plainly:{" "}
              <strong className="text-foreground/90 font-normal">
                style, not spectacle.
              </strong>
            </P>
            <P>Two things made this hard:</P>
            <P>
              <strong className="text-foreground/90 font-normal">
                The tone is easy to get wrong.
              </strong>{" "}
              Point a camera at a fitted t-shirt on a built model and the
              default result is a gym advert — hard light, low angle, chest out.
              That's the exact category Orserio spent months positioning{" "}
              <em>against</em>. Get the register wrong and the film contradicts
              the website it's sitting on top of.
            </P>
            <P>
              <strong className="text-foreground/90 font-normal">
                The deadline was immovable.
              </strong>{" "}
              Launch was locked. A film that's beautiful but two weeks late is
              worthless to a launch. The real risk wasn't quality. It was a job
              disappearing into a hand-off — concept approved, then a DoP
              misreads it, then the edit doesn't match the intent, then you're
              re-shooting with no time left.
            </P>
            <P>
              So the client didn't just need someone who could shoot fashion.
              They needed someone who could hold the concept, the visuals and
              the execution in one head and move fast enough to guarantee
              delivery.
            </P>
          </Section>

          {/* Do not name the specific property or beach in caption or alt text */}
          <ImageSlot
            alt="Model in a white Orserio t-shirt in a restrained interior"
            caption="Frame from the film. [ADD IMAGE]"
          />

          <Section title="Why one person, not three">
            <P>
              I directed, shot and edited this. On a project this size that
              isn't a budget compromise — it's the mechanism that made the
              deadline safe.
            </P>
            <P>
              When concept, camera and cut live in separate people, every stage
              is a translation, and every translation is a place the intent can
              leak out and a place the schedule can stall. I removed all of
              them. I wrote the treatment knowing exactly how I'd shoot each
              beat. I shot knowing which frames would survive the edit. I cut
              knowing what I'd captured and why.
            </P>
            <P>
              That's the thing I actually sell: not three job titles on a call
              sheet, but{" "}
              <strong className="text-foreground/90 font-normal">
                fast, clean decisions between concept, visual and execution
              </strong>{" "}
              — which is what gets a sharp result out the door in a short
              window. On a launch, that reliability is worth more than any
              single shot.
            </P>
          </Section>

          <Section title="The team that made speed possible">
            <P>
              None of this works without producers who set it up to work. I can
              be as fast on my feet as I like — without a team I trust, holding
              the ground, I've got nothing to be fast <em>about</em>.
            </P>
            <P>
              Serafima Kutsenko ran the project. She pulled every element
              together and held the coordination and communication between the
              client, the crew and me. That's the job that lets a director stop
              managing and start directing — when a producer owns the line to
              the client and the flow of the shoot, decisions land faster and
              nothing gets lost between people.
            </P>
            <P>
              Emil Shkulskiy was our local producer, and he was the reason the
              ground moved smoothly. Locations, agreements and payments, the
              logistics — all his. He built the location lists, and because he
              knew the area, he's the one who had an alternative beach ready
              when the storm took the first. The fastest decision in the world
              doesn't help if there's no good option to decide between; Emil
              made sure there always was.
            </P>
            <P>
              What made this shoot fast wasn't one person doing everything. It
              was a small, trusted team where the producing was tight enough
              that I could keep concept, camera and edit moving without
              friction. Both halves are load-bearing.
            </P>
          </Section>

          <Section title="Reading the brand book properly">
            <P>
              Most clients send a mood board. Orserio sent a real document —
              vision, values, tone-of-voice, art direction — and it did half the
              directing for me before we spoke.
            </P>
            <P>Four things in it made every decision that followed:</P>
            <ul className="space-y-4 pl-0">
              {[
                '"Modern, quiet masculinity" and "confidence not arrogance" — no posturing, no camera looking up at the model.',
                "The art direction chapter names its enemy directly: cringe stock and over-stylised images, with the focus on the people wearing the product. That's a brief for documentary framing.",
                "Tone-of-voice: restraint, weight without force — so the cut and the music had to feel that way too. No trailer energy.",
                '"Whether you\'re heading to brunch, the office or the gym" — smart casual, not sportswear. That decided the wardrobe and put us in a real interior, not a studio.',
              ].map((item, i) => (
                <li
                  key={i}
                  className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
            <P>
              I turned that into a film built around presence rather than a
              story: a man in his own rooms and his own landscape, filmed close
              enough that the cut of the shirt reads without anyone pointing at
              it. The physique is there — including tight, tactile detail shots
              — but as shape and structure, never as a flex.
            </P>
            <P>
              Understanding this tone is a specific skill. Selling{" "}
              <em>quiet luxury</em> to a male audience is a narrow lane, and
              it's where a lot of otherwise good directors overcook it.
            </P>
          </Section>

          <Section title="Why the crew stayed small — and lived on location">
            <P>Here's a production decision that shaped the whole film.</P>
            <P>
              I'm based in London; we shot in Portugal. Rather than fly and
              house a large crew, we kept it to a small group — never more than
              four of us. That did two things.
            </P>
            <P>
              First, it freed budget to spend on the screen rather than on
              logistics. What you don't spend moving and accommodating a big
              team, you can put into a stronger location and better light.
            </P>
            <P>
              Second, and this mattered more than I expected: a small group let
              us stay on location with the model, in the same space we were
              shooting. No extra bodies on set to break the atmosphere or bring
              an energy that pulls a quiet film off-tone. We lived in the
              environment, spent real time with the lead, found a shorthand, and
              got him properly relaxed on camera — which is most of the job when
              half the film is unperformed, everyday moments. A lean crew didn't
              lower the ceiling here. It raised it.
            </P>
          </Section>

          <Section title="Prep that made the shoot fast and the budget honest">
            <P>Speed on the day comes from decisions made before it.</P>
            <P>
              Because I was shooting on my own camera, I already knew how it
              would behave in each space — where I'd move, how I'd light, what
              each frame needed. On location I used Sun Seeker to fix exactly
              where and when the sun would land, and worked out how much light I
              actually needed to add. That let us build a light pre-production
              previs — a real sense of the final image before rolling, so I
              wasn't guessing.
            </P>
            <P>
              That precision is what keeps a budget honest. When you can say
              exactly what you need and what you don't, you stop paying for
              insurance kit and contingency time. Nothing gets rented "just in
              case." The estimate reflects the film, not the fear.
            </P>
          </Section>

          {/* Do not name the specific property or beach in caption or alt text */}
          <ImageSlot
            alt="Camera assistant holding a frost frame beside the subject on location"
            caption="Behind the scenes — reflector and frost frame. [ADD IMAGE]"
          />

          <Section title="When the storm hit, the prep held">
            <P>
              So when day two's beach washed out, I wasn't starting from
              nothing.
            </P>
            <P>
              I found the alternative, hiked in, scouted it, and re-ran the sun
              for the new position and access. Because the days were planned
              around <em>light</em> — not around a specific address — losing the
              location cost us a location, not the film. Harder to reach, more
              beautiful, and reachable at all only because the person making the
              call was already on the ground with the camera, not on the phone.
            </P>
            <P>
              We couldn't carry a full lighting package down a hiking route, so
              we didn't. We worked with the sun, a reflector and a frost frame —
              three people, moving light, repositioning in under a minute. On a
              shortened day we got through more setups than a truck of fixtures
              would have allowed. It was faster <em>and</em> it was the better
              light. I'd shoot it the same way with three times the budget.
            </P>
          </Section>

          {/* Do not name the specific property or beach in caption or alt text */}
          <ImageSlot
            videoSrc={climbAsset.url}
            alt="Crew climbing back up the cliff path after the shoot"
            caption="Behind the scenes — climbing back up the cliff after wrapping. The beach was hard to reach; everything went in and out on our backs."
          />


          <Section title="What the client got">
            <ul className="space-y-4 pl-0">
              {[
                "A launch film delivered on time, on a fixed deadline, through a storm.",
                "Hero video for the homepage plus footage across the range pages, from one shoot.",
                "A tone that matched the brand book instead of fighting it.",
                "A budget spent on the screen — better location, better light — not on logistics and hand-offs.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
            <P>
              Then they came back. We're now doing a run of three studio shoots
              for their e-commerce and model imagery — a different, more
              repeatable discipline that I'll write up separately.
            </P>
          </Section>

          <Section title="Behind the scenes">
            <ul className="space-y-4 pl-0">
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">
                  Producing:
                </strong>{" "}
                Serafima Kutsenko (producer) and Emil Shkulskiy (local
                producer).
              </li>
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">
                  Crew:
                </strong>{" "}
                me, a gaffer, a camera assistant.
              </li>
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">Kit:</strong>{" "}
                my own camera. No electric fixtures on the beach — reflector and
                frost frame.
              </li>
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">
                  Prep:
                </strong>{" "}
                Sun Seeker for sun position; light previs before shooting.
              </li>
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">
                  Schedule:
                </strong>{" "}
                two days, an interior/exterior block and a coastal block.
              </li>
              <li className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border">
                <strong className="text-foreground/90 font-normal">
                  Post:
                </strong>{" "}
                edited by me.
              </li>
            </ul>
          </Section>

          {/* Credits */}
          <motion.div
            {...anim}
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-10 xl:gap-x-16 items-start border-t border-border pt-10 md:pt-12"
          >
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <H2>Credits</H2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {[
                  { role: "Director, DoP, Editor", name: "Bohdan Rohulskyi" },
                  { role: "Client", name: "Orserio" },
                  { role: "Producer", name: "Serafima Kutsenko" },
                  { role: "Local Producer", name: "Emil Shkulskiy" },
                ].map((c) => (
                  <li
                    key={c.role}
                    className="flex items-baseline justify-between gap-4 font-body text-[13px] text-foreground/70 leading-relaxed border-b border-border/40 pb-2"
                  >
                    <span className="text-foreground/45">{c.role}</span>
                    <span className="text-right">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Work with Bohdan */}
          <motion.section
            {...anim}
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-10 xl:gap-x-16 items-start border-t border-border pt-10 md:pt-12"
          >
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <H2>Work with Bohdan</H2>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 max-w-[640px]">
              <P>
                Launching a product on a fixed date and need a film that lands
                the tone without becoming an advert? Because I develop the
                concept, shoot it and cut it myself — working with a producing
                team that keeps the ground tight — you get a faster, cleaner
                result with fewer places for it to stall. See more{" "}
                <Link
                  to="/work?filter=Commercial"
                  className="text-foreground/90 underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  documentary-led brand films
                </Link>
                .
              </P>
              <P>
                Send the brand guidelines, the dates and the location — I'll
                come back with the visual approach and what it'll actually take.
              </P>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="mailto:hello@bohdanrohulskyi.com"
                  className="inline-flex items-center border border-foreground/80 px-6 py-3 font-body text-[11px] tracking-[0.14em] uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  Discuss a project
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center border border-border px-6 py-3 font-body text-[11px] tracking-[0.14em] uppercase text-foreground/70 hover:text-foreground hover:border-foreground/60 transition-colors"
                >
                  View related work
                </Link>
              </div>
            </div>
          </motion.section>

        </div>
      </article>

      <SiteFooter hideCta />
    </div>
  );
};

export default Orserio;
