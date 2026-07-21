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

const CANONICAL =
  "https://bohdanrohulskyi.com/work/dylan-bachelet";
const OFFICIAL_URL = "https://imaginemagazine.co/article/dylan-bachelet-2/";
const BAKEOFF_URL =
  "https://thegreatbritishbakeoff.co.uk/bakers/series-15-dylan/";
const CONTACT_EMAIL = "rogulskiproject@gmail.com";
const PUBLISHED_ISO = "2025-06-09";
const PUBLISHED_LABEL = "9 June 2025";

const meta: Array<[string, React.ReactNode]> = [
  ["Publication", "IMAGINE Magazine — editorial feature on Dylan Bachelet"],
  ["Category", "Fashion & Culture — editorial fashion film"],
  [
    "Role",
    "Filmed and edited by Bohdan Rohulskyi (official page credit: Videographer)",
  ],
  ["Location", "The Nook, Hackney Central, London"],
  ["Year", "2025"],
];

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
  ["Studio", "The Nook, Hackney Central, London"],
  ["Producer", "Emma Christopher"],
  ["Editor-in-Chief", "Olive Walton"],
  ["Film edited by", "Bohdan Rohulskyi"],
];

const faqs: Array<{ q: string; a: string }> = [
  {
    q: "What was Bohdan Rohulskyi's role on the IMAGINE Magazine film of Dylan Bachelet?",
    a: "He filmed and edited the piece; the official IMAGINE feature page credits him as Videographer. Photography was led by Bartek Szmigulski, and styling direction by Justin Hamilton. The film was shot at The Nook studio in Hackney, London.",
  },
  {
    q: "What does a videographer need from a stills-led editorial day?",
    a: "Four things, agreed before the shoot: clarity that photography leads and film adapts; a sense of where the natural gaps between setups will fall; a position on set to observe without interfering; and a subject who isn't asked to switch into a separate \"video mode\". Given those, a lean setup can deliver a film with its own identity without costing the photographer time.",
  },
  {
    q: "When is it worth recording interview audio on a fashion shoot?",
    a: "When the film needs to stand on its own rather than sit silently under other content. A few minutes of conversation, recorded in the day's natural pauses, can give a fragment-built edit a continuous spine — and it captures the subject speaking naturally, in the same room and mood as the pictures, which a separate session rarely does.",
  },
];

const COL_GRID = "grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24";
const BODY_COL = "max-w-[800px] space-y-6";
const PARA =
  "font-body text-sm md:text-[15px] text-foreground/70 leading-[1.65]";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        "Filming Dylan Bachelet for IMAGINE Magazine — Editorial Fashion Film | Bohdan Rohulskyi",
      description:
        "How an editorial fashion film of Dylan Bachelet was shot and edited around a stills-led day at a Hackney studio — one light, window fill and interview audio, by London cinematographer Bohdan Rohulskyi.",
      canonical: CANONICAL,
      meta: [
        {
          property: "og:title",
          content:
            "Filming Dylan Bachelet for IMAGINE Magazine — Editorial Fashion Film | Bohdan Rohulskyi",
        },
        {
          property: "og:description",
          content:
            "How an editorial fashion film of Dylan Bachelet was shot and edited around a stills-led day at a Hackney studio — one light, window fill and interview audio, by London cinematographer Bohdan Rohulskyi.",
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
          headline:
            "One Light and a Window: Filming Dylan Bachelet for IMAGINE Magazine",
          description:
            "How an editorial fashion film of Dylan Bachelet was shot and edited around a stills-led day at a Hackney studio — one light, window fill and interview audio, by London cinematographer Bohdan Rohulskyi.",
          datePublished: PUBLISHED_ISO,
          dateModified: PUBLISHED_ISO,
          mainEntityOfPage: CANONICAL,
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "https://bohdanrohulskyi.com/about",
            jobTitle: "Cinematographer / Director of Photography",
          },
          about: [
            { "@type": "Person", name: "Dylan Bachelet" },
            { "@type": "Organization", name: "IMAGINE Magazine" },
          ],
          video: {
            "@type": "VideoObject",
            name: "IMAGINE Magazine fashion film of Dylan Bachelet",
            description:
              "Editorial fashion film of Dylan Bachelet for IMAGINE Magazine, filmed and edited by Bohdan Rohulskyi.",
            duration: "PT30.88S",
            width: 1280,
            height: 960,
            uploadDate: PUBLISHED_ISO,
            embedUrl: "https://player.vimeo.com/video/1107691277",
          },
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
            title="Dylan Bachelet — IMAGINE Magazine editorial fashion film"
          />
        </div>
      </section>

      {/* Article Header — H1, deck, byline, metadata */}
      <section className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[800px]"
        >
          <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            One Light and a Window: Filming Dylan Bachelet for IMAGINE Magazine
          </h1>
          <p className="mt-6 font-body text-base md:text-lg text-foreground/70 leading-[1.5]">
            A stills-led editorial day, a fashion film built in the gaps —
            shot and edited by Bohdan Rohulskyi for IMAGINE Magazine's feature
            on Dylan Bachelet.
          </p>
          <p className="mt-6 font-body text-sm text-foreground/60">
            By{" "}
            <Link
              to="/about"
              className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
            >
              Bohdan Rohulskyi
            </Link>{" "}
            — London-based cinematographer and Director of Photography
            <span className="text-foreground/40"> · Published {PUBLISHED_LABEL}</span>
          </p>

          <dl className="mt-10 border-t border-border/60 divide-y divide-border/40">
            {meta.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 py-3"
              >
                <dt className="font-body text-[11px] tracking-[0.14em] uppercase text-foreground/40">
                  {k}
                </dt>
                <dd className="font-body text-sm text-foreground/80">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors"
          >
            View the official IMAGINE Magazine feature page
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </section>

      {/* Lede paragraph */}
      <section className="container pb-12 md:pb-20">
        <motion.div {...sectionAnim} className={BODY_COL}>
          <p className={PARA}>
            In 2025, IMAGINE Magazine published a short editorial fashion film
            of Dylan Bachelet as part of its feature on him — a portrait
            piece of just over thirty seconds, in a 4:3 frame, filmed and
            edited by London cinematographer Bohdan Rohulskyi and shot at The
            Nook studio in Hackney alongside photography by Bartek Szmigulski.
            The{" "}
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
            >
              official IMAGINE Magazine feature page
            </a>{" "}
            credits Bohdan as Videographer. This is how the film was made —
            and what the day can tell anyone planning a shoot where stills
            lead and film has to earn its place.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Introduction
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                On most fashion shoots, the camera department owns the floor.
                On this one, it didn't. The day existed to make photographs.
                The full editorial team — photographer, stylist, hair,
                grooming, studio — was built around the stills set, and the
                film had to come from whatever the day allowed: angles found
                while the photographer worked, and short windows between
                setups when the floor was briefly mine.
              </p>
              <p className={PARA}>
                The obvious approach would have been to hang back and collect
                b-roll — moving wallpaper to sit under the interview on the
                page. That wasn't enough. IMAGINE runs its films as their own
                editorial objects, alongside the photography and the written
                piece, not underneath them. The film needed its own identity
                while staying inside the same visual world the stills team was
                building.
              </p>
              <p className={PARA}>
                This case is for brand and editorial creative leads planning
                a combined stills-and-motion day. The decision it should help
                with: what you can realistically ask of film when photography
                leads.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Brief */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                The Brief
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                <span className="text-foreground/90 font-medium">
                  Publication:
                </span>{" "}
                IMAGINE Magazine — a London title where fashion, entertainment
                and culture converge.
              </p>
              <p className={PARA}>
                <span className="text-foreground/90 font-medium">
                  How it reached me:
                </span>{" "}
                producer Emma Christopher and IMAGINE Editor-in-Chief Olive
                Walton contacted me through Instagram. They had seen my work,
                liked the way I filmed people, and asked whether I could
                create a moving-image piece for an editorial featuring Dylan
                Bachelet.
              </p>
              <p className={PARA}>
                <span className="text-foreground/90 font-medium">The ask:</span>{" "}
                develop the idea and the approach for the film myself, within
                the day's real conditions — photography was the primary
                output, with a well-known subject on set, and the film had to
                be conceived and captured around the stills schedule.
              </p>
              <p className={PARA}>
                <span className="text-foreground/90 font-medium">
                  What I gave back:
                </span>{" "}
                an approach built for exactly those conditions — a one-light
                plan that used the studio's existing daylight, a tripod-based
                visual language matching the editorial tone, and a shooting
                method that treated the photographer's set as my location
                rather than competing with it.
              </p>
              <p className={PARA}>
                <span className="text-foreground/90 font-medium">My role:</span>{" "}
                I filmed and edited the piece. The official IMAGINE feature
                page credits me as Videographer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The subject */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                The subject: reframing a public identity
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                Dylan Bachelet became known through{" "}
                <a
                  href={BAKEOFF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
                >
                  The Great British Bake Off
                </a>
                , where he was a Series 15 finalist — and almost immediately,
                the press paid as much attention to how he dressed and
                carried himself as to what he baked. At the time of the
                IMAGINE interview he was working as Chef de Partie at The
                Five Fields in London and talking about building his own
                image after television. IMAGINE's feature leaned into that
                shift: no baking, no props, no television context — a fashion
                and culture subject, full stop. For the film, that meant one
                job: presence. Face, gesture, voice, texture, attitude.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative approach */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Creative approach
              </h2>
            </div>
            <div className="max-w-[800px] space-y-10">
              <div className="space-y-5">
                <p className={PARA}>
                  The first assumption on a day like this is that video needs
                  its own setups to have any identity — its own lighting
                  states, its own blocking, its own time. On this shoot that
                  assumption had to go. Every minute I claimed for video was
                  a minute taken from photography, and photography was the
                  point of the day.
                </p>
                <p className={PARA}>
                  So the organising idea became: film the person between the
                  photographs. The moments when a subject resets — looks
                  away, adjusts a chain, turns into the light, drops the
                  pose for half a second — are often more alive than the
                  pose itself. My job was to be ready for them, in the right
                  position, with an exposure I trusted, without asking
                  anyone to wait for me.
                </p>
                <p className={PARA}>Three decisions carried that idea:</p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Stillness as a visual language
                </h3>
                <p className={PARA}>
                  I shot from a tripod and built composed, held frames —
                  closer to moving portraiture than to reportage. On a
                  hybrid day, handheld coverage is the easy default, and it
                  usually reads as exactly what it is: a video camera
                  chasing a photo shoot. Locked frames gave the film the
                  same considered, graphic quality as the stills, so the
                  two outputs feel like one editorial world rather than a
                  main event and its making-of.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Colour and black-and-white as punctuation
                </h3>
                <p className={PARA}>
                  I shot with a mix of colour and monochrome in mind —
                  monochrome for the sculpted, classic portrait register;
                  colour for warmth and texture in skin against the darker
                  styling. Cutting between them lets a short film feel like
                  several distinct chapters of one person rather than a
                  single continuous setup. It's a way of showing range —
                  the character and the different sides of the subject —
                  without needing locations, narrative or time we didn't
                  have.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Voice as the spine
                </h3>
                <p className={PARA}>
                  Between looks, we recorded short interview passages with
                  Dylan. Those recordings became the foundation of the
                  film — his own voice carrying the piece, so the portrait
                  speaks rather than simply poses. A film assembled from
                  fragments needs something continuous running underneath,
                  and a person's voice does that more honestly than a music
                  track alone.
                </p>
                <p className={PARA}>
                  Editing the film myself closed the loop. Because I knew
                  I'd be the one in the timeline, I shot punctuation rather
                  than safety coverage — the changes of scale, pose and
                  texture the cut would need. The finished piece alternates
                  black-and-white and colour over Dylan's voice, with
                  IMAGINE's hand-drawn mark carried inside extreme
                  close-ups at the open and close.
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
                Cinematography: one light, one window
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                The lighting package was one fixture. That was the reality of
                the day, and rather than fight it, I built the plan around
                the room.
              </p>
              <p className={PARA}>
                I positioned Dylan so that a large window — softened with
                frost — sat close to him. That window became my fill: broad,
                soft, consistent ambience I didn't have to rig, power or
                move. The single fixture worked as the key, shaping the face
                and separating him from the darker backdrop. Where I needed
                more exposure, I didn't reach for a second light that didn't
                exist — I brought the key closer to the subject, using
                distance as my dimmer.
              </p>
              <p className={PARA}>What this changed in practice:</p>
              <ul className={`${PARA} list-disc pl-5 space-y-2`}>
                <li>
                  <span className="text-foreground/90 font-medium">
                    For the schedule:
                  </span>{" "}
                  my entire lighting footprint could move in about a minute.
                  When the photographer needed the floor, I was never the
                  reason anyone waited.
                </li>
                <li>
                  <span className="text-foreground/90 font-medium">
                    For the image:
                  </span>{" "}
                  window fill plus a close key gives directional, sculpted
                  light with soft falloff — contrast that suits monochrome
                  portraiture and keeps colour frames feeling natural
                  rather than lit.
                </li>
                <li>
                  <span className="text-foreground/90 font-medium">
                    For the subject:
                  </span>{" "}
                  no wall of equipment and no re-rigging around him — the
                  set stayed calm.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working with Dylan */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Working with Dylan
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                Filming a well-known subject in fragments — between someone
                else's setups, with no long takes to warm up in — puts real
                weight on communication. This is the part of the job I've
                built deliberately over years of working with artists and
                public people: reading where someone is, keeping the
                direction light, and creating a state where the person in
                front of the camera is genuinely comfortable rather than
                performing comfort.
              </p>
              <p className={PARA}>
                With Dylan that meant treating the video moments as a
                continuation of the day's energy, not an interruption of it.
                Small prompts, room to move, attention to when a gesture was
                worth holding. The micro-performances in the finished film —
                the glance away, the turn, the raised hand — come from that
                space. You cannot light your way to them; you can only avoid
                destroying them. The interview recordings worked the same
                way: done in the natural pauses of the day, in the same room
                and the same mood, they caught Dylan speaking rather than
                presenting — exactly the register an editorial portrait
                needs.
              </p>
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
            <ul className={`${PARA} max-w-[800px] list-disc pl-5 space-y-4`}>
              <li>
                <span className="text-foreground/90 font-medium">
                  The constraint was the concept.
                </span>{" "}
                One light and borrowed time didn't limit the film — they
                defined its language. A full lighting day would have
                produced a heavier film, and probably a less alive one.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">
                  Shooting for your own edit changes what you shoot.
                </span>{" "}
                Knowing I'd be the one in the timeline meant collecting
                punctuation — details, turns, texture — instead of safety
                coverage.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">
                  On a hybrid day, the videographer's most valuable skill
                  isn't coverage — it's positioning.
                </span>{" "}
                Knowing where to stand while someone else works is a craft
                in itself.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">
                  The trade-off I'd name honestly:
                </span>{" "}
                filming in the gaps means accepting you will miss things.
                You cannot have both a zero-footprint presence and complete
                coverage. Choose the frames that matter and let the rest
                go.
              </li>
            </ul>
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
              <p className={`${PARA} mt-4`}>
                Per the{" "}
                <a
                  href={OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/80 text-foreground/90"
                >
                  official IMAGINE Magazine feature page
                </a>
                .
              </p>
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

      {/* Work with Bohdan — CTA */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className={COL_GRID}>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Work with Bohdan
              </h2>
            </div>
            <div className={BODY_COL}>
              <p className={PARA}>
                Planning an editorial, campaign or talent story where stills
                and film need to share one day — and one visual world? Send
                the treatment, references or shoot outline to discuss the
                right approach for the film. Or view related work in Fashion
                &amp; Culture.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Editorial%20film%20enquiry`}
                  className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.14em] uppercase px-5 py-3 border border-foreground/40 text-foreground/90 hover:bg-foreground hover:text-background transition-colors"
                >
                  Discuss a project
                </a>
                <Link
                  to="/work?filter=Fashion"
                  className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.14em] uppercase px-5 py-3 border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  View related work — Fashion &amp; Culture
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
};

export default ProjectDetail;
