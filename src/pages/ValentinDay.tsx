import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    q: "Who directed and shot this Zielinski & Rozen Valentine's campaign?",
    a: "Bohdan Rohulskyi — a London-based cinematographer and hybrid director-operator. He directed, shot and edited the film, working with producer Valentina Bobrova and production services company Track of God in Madrid.",
  },
  {
    q: "What is a \u201Chybrid director-operator\u201D?",
    a: "A director who also operates the camera as their own DP. On lean commercial and documentary-style productions, it removes the translation layer between the idea and the image: one person holds the concept, the framing, the lighting and the edit. It usually means faster shoots, smaller crews and a more consistent visual voice \u2014 often the difference between a small budget producing a small film and a small budget producing a good one.",
  },
  {
    q: "What kind of projects do you take on?",
    a: "Documentary-style brand films, commercials, fashion and beauty content, founder and brand storytelling, and campaign content for retail, DOOH and social. Based in London and available across the UK and internationally \u2014 this one was Madrid.",
  },
  {
    q: "Do you work with small budgets?",
    a: "Yes. Bohdan owns his camera and lens package, shoots and edits himself, and designs lighting around what a location already gives. The savings go back into the things audiences actually notice: casting, locations, time.",
  },
  {
    q: "Can you handle the whole thing \u2014 concept to delivery?",
    a: "That's the default. Concept and treatment, production planning, cinematography, edit and delivery including social adaptations. Sound design and colour are brought in from specialists.",
  },
];

const ValentinDay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = applySeo({
      title: "Valentine's Campaign for Zielinski & Rozen | Director-DP",
      description:
        "Behind the scenes on a documentary-style Valentine's campaign for perfume house Zielinski & Rozen — directed, shot and edited by a London hybrid director-DP.",
      canonical: "/work/valentin-day",
      meta: [
        { property: "og:title", content: "Valentine's Campaign for Zielinski & Rozen | Director-DP" },
        {
          property: "og:description",
          content:
            "Documentary-style Valentine's brand film for Zielinski & Rozen, shot in Madrid by London-based hybrid director-operator Bohdan Rohulskyi.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "/work/valentin-day" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Valentine's Campaign for Zielinski & Rozen | Director-DP" },
        {
          name: "twitter:description",
          content:
            "Documentary-style Valentine's brand film for Zielinski & Rozen, shot in Madrid.",
        },
        {
          name: "keywords",
          content:
            "cinematographer London, hybrid director-operator, director of photography, documentary brand film, commercial video production London, Zielinski & Rozen, Valentine's campaign, Madrid",
        },
      ],
      jsonLdId: "valentin-day",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Love Isn't One Day: Directing and Shooting a Documentary-Style Valentine's Campaign for Zielinski & Rozen in Madrid",
          description:
            "Behind the scenes on a documentary-style Valentine's campaign for perfume house Zielinski & Rozen \u2014 directed, shot and edited by a London hybrid director-DP.",
          datePublished: "2025-02-14",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            jobTitle: "Director & Director of Photography",
            description:
              "London-based cinematographer and hybrid director-operator specialising in documentary-style brand films and commercials.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "London",
              addressCountry: "GB",
            },
            knowsAbout: [
              "Cinematography",
              "Documentary filmmaking",
              "Commercial video production",
              "Brand films",
              "Video editing",
              "Lighting design",
            ],
          },
          publisher: { "@type": "Person", "name": "Bohdan Rohulskyi" },
          about: {
            "@type": "CreativeWork",
            name: "Zielinski & Rozen \u2014 Valentine's Day Campaign",
            creator: { "@type": "Person", name: "Bohdan Rohulskyi" },
            locationCreated: { "@type": "Place", name: "Madrid, Spain" },
          },
          keywords:
            "cinematographer London, hybrid director-operator, director of photography, documentary brand film, commercial video production, Zielinski & Rozen, Valentine's campaign, Madrid",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Love Isn't One Day \u2014 Zielinski & Rozen Valentine's Campaign",
          description:
            "Documentary-style Valentine's brand film for niche perfume house Zielinski & Rozen, shot in Madrid.",
          uploadDate: "2025-02-14",
          embedUrl: "https://player.vimeo.com/video/1166656782",
          director: { "@type": "Person", name: "Bohdan Rohulskyi" },
        },
      ],
    });
    return cleanup;
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
            src="https://player.vimeo.com/video/1166656782?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Love Isn't One Day — Zielinski & Rozen Valentine's Campaign"
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
              Love Isn't One Day
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Documentary-style Valentine's campaign for Zielinski &amp; Rozen — directed, shot and edited by a London cinematographer and hybrid director-operator.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">Client</span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">Zielinski &amp; Rozen</p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">Category</span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">Documentary Brand Film / Fragrance Campaign</p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">Role</span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">Director · Director of Photography · Editor</p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">Location · Year</span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">Madrid, Spain · 2025</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...sectionAnim} className="max-w-2xl space-y-6">
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Introduction</h2>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            Most Valentine's Day briefs arrive with the same picture already glued to them: a young couple, a restaurant, a small box, a gasp. I've shot that film before. Everyone has. It works about as well as a greeting card works — you look at it once, you feel a mild pleasantness, you put it down and forget it.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            So when Zielinski &amp; Rozen came to me through their production partner for a Valentine's campaign, I asked for something unusual: a couple of days to think before I answered. Not because the brief was hard, but because the obvious version of it was sitting right there, and I wanted to get far enough away from it that I couldn't hear it anymore.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            What we ended up making is a documentary-style brand film about an elderly couple. Not one date. A lifetime of small, unremarkable, devastating moments — a hand on a shoulder, a shared coat, a look across a table that has been shared for forty years. It ran on the screens inside their stores, on YouTube, on Instagram, on Facebook. It was shot in Madrid on a small crew with one gaffer, my own camera, and a lot of natural light.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">This is how it happened.</p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Overview: The Brief</h2>
            </div>
            <div className="space-y-6 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              <p><strong className="text-foreground/90">Client:</strong> Zielinski &amp; Rozen — a niche perfume house whose roots go back to 1905, built around family, scent and memory. They have two boutiques in Madrid.</p>
              <p><strong className="text-foreground/90">The ask:</strong> a Valentine's Day film that would live on in-store retail screens as ambient content, and be cut down for social — YouTube, Instagram, Facebook. It needed to celebrate the gifting idea, feature the gift boxes, support a seasonal offer, and showcase both Madrid stores.</p>
              <p><strong className="text-foreground/90">What they gave me:</strong> the concept. Which is rare, and which I don't take lightly. They said: come back to us with a story.</p>
              <p><strong className="text-foreground/90">What I gave back:</strong> a treatment, a budget, a shooting plan, and a promise that we would not make an advert that looked like an advert.</p>
              <p><strong className="text-foreground/90">My role:</strong> hybrid director-operator (director-DP / director-cameraman). I directed it, shot it and edited it. For a project of this scale, that combination isn't a compromise — it's the reason the film feels like one continuous thought rather than three people's opinions stapled together.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Approach */}
      <section className="relative border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim}>
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-10 md:mb-14">Creative Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-[42fr_58fr] lg:grid-cols-[45fr_55fr] gap-8 md:gap-8 lg:gap-14 md:items-stretch">
              {/* Left: sticky video */}
              <div className="w-full md:h-full">
                <div className="md:sticky md:top-0 md:h-[100svh] flex items-center justify-center py-4 md:py-0">
                  <div className="w-full max-w-[340px] md:max-w-none aspect-[9/16] md:aspect-auto md:h-auto md:max-h-[74svh] overflow-hidden bg-card mx-auto" style={{ aspectRatio: "9 / 16" }}>
                    <video
                      src="/videos/valentin-approach.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </div>
              </div>

              {/* Right: scrolling text */}
              <div className="space-y-10 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7] min-w-0">
                <div className="space-y-4">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">Killing the obvious idea</h3>
                  <p>The brief said "a date." My instinct said: a date is a <em>scene</em>, and scenes are finite. Love isn't finite.</p>
                  <p>I was deep in reference-hunting when I fell into a TikTok compilation — genuinely by accident — of elderly couples caught in tiny moments of tenderness. Swinging on a garden swing. One of them adjusting the other's collar. Holding hands while queuing for something boring. Millions of views. No production value whatsoever. And it wrecked me, in the good way.</p>
                  <p>That was the unlock. What if we don't show one date — what if we show a series of moments across a lifetime? A timeline of memory. Because Valentine's Day is the day the calendar tells you to celebrate love, but love actually happens on the 3rd of November at 7:40am when someone brings you a coffee you didn't ask for.</p>
                  <p>That became the spine of the treatment: <em>love is not one day.</em> The brand's gift boxes don't mark an occasion — they mark a moment, and there are thousands of them. The client fell for it immediately. We locked budget and scope within days.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">Why an older couple — and why this brand</h3>
                  <p>This wasn't just an emotional hunch. There's real research behind why the idea had legs, and it's worth saying out loud, because it's the sort of thing that separates a mood board from a strategy.</p>
                  <p><strong className="text-foreground/90">1. Older people are the right people to talk about what love actually is.</strong> Laura Carstensen's <em>socioemotional selectivity theory</em> (Carstensen, Isaacowitz &amp; Charles, <em>American Psychologist</em>, 1999) argues that as our sense of remaining time shortens, we increasingly prioritise emotionally meaningful goals and close relationships over novelty. Levenson, Carstensen and Gottman's work on long-term marriages (<em>Psychology and Aging</em>, 1993) found older couples showed less conflict-driven negative emotion and more affection than middle-aged couples. Put a lifetime behind a glance and the glance means more.</p>
                  <p><strong className="text-foreground/90">2. Scent is a memory medium, and this is a perfume house.</strong> Odour-evoked autobiographical memories are consistently found to be <em>more emotional</em> and to feel more vivid and immersive than memories cued by words or images (Herz &amp; Schooler, 2002; Herz, 2004). Willander &amp; Larsson (<em>Psychonomic Bulletin &amp; Review</em>, 2006) found odour-cued memories cluster in the first decade of life. So a film built as a chain of remembered moments isn't a nice idea for a fragrance brand. It's a structural translation of what fragrance does to a human being.</p>
                  <p><strong className="text-foreground/90">3. Touch is the language, so touch is the shot list.</strong> Löken et al. (<em>Nature Neuroscience</em>, 2009) identified C-tactile afferents in human skin — a nerve system tuned to slow, gentle stroking at roughly the speed of an affectionate caress. That's why so much of this film is hands. Wrists. A palm on a forearm. It's the most direct emotional channel available to me, and it doesn't need a single line of dialogue.</p>
                  <p><strong className="text-foreground/90">4. Emotion outperforms rational messaging.</strong> Binet &amp; Field's analysis of the IPA Databank (<em>The Long and the Short of It</em>, 2013) shows emotionally-led campaigns substantially outperform rationally-led ones on long-term business effects. When I pitch "no product close-up for the first forty seconds," this is the argument.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">The cinematography: photographs that came alive</h3>
                  <blockquote className="border-l-2 border-foreground/30 pl-5 text-foreground/85 italic">
                    If the film is made of moments, then the frames should behave like photographs that started moving.
                  </blockquote>
                  <p><strong className="text-foreground/90">Locked-off tripod. Almost everything.</strong> No drifting handheld, no slider gloss, no gimbal. A still frame is a captured moment — that's what a photograph <em>is</em>. The moment the camera starts wandering, you're no longer looking at a memory, you're looking at a camera. The stillness does the emotional work, and it does it for free.</p>
                  <p>The risk, obviously, is boredom. I countered it with variety in <em>content</em> rather than variety in <em>movement</em>: different rooms, different times of day, different eras, different textures. The cut carries the momentum, so the frames don't have to.</p>
                  <p><strong className="text-foreground/90">Long lens, wide open, tight.</strong> I shot on long focal lengths with a very shallow plane of focus, framing intimately — skin, hands, the corner of an eye, the edge of a smile. Everything that isn't the couple dissolves. It preserves the position of the observer: I'm not in the room with them. I'm watching from a respectful distance, the way you'd watch strangers in a café and feel oddly moved.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">Lighting: natural first, booklight always</h3>
                  <p>I don't light rooms. I light <em>what the room is already doing.</em> We arrived in Madrid two days early to scout. I walked every location — the restaurant, the apartment, both boutiques — and I found where the light was already coming from. Windows. Doorways. Gaps. Whatever the sun was doing at 3pm.</p>
                  <p>Those became my key. Everything after that was just replacing the exposure that reality couldn't afford to give me. My main tool was a booklight — bounce into a large white surface, then push it back through diffusion. On faces with seventy years of life in them, that softness lets skin be skin, wrinkles be wrinkles, and tenderness be tenderness, without cosmeticising any of it.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Stills */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim}>
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-12">Stills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                "Elderly couple sharing a quiet moment, filmed on a long lens in a Madrid apartment",
                "Close-up of two hands touching across a restaurant table, shallow depth of field",
                "Zielinski & Rozen Madrid boutique interior with perfume gift boxes on display",
                "Backlit portrait of an older woman, natural light cinematography",
                "Behind the scenes: Blackmagic camera on tripod with Iron Glass cine lenses",
                "Booklight setup filling a Madrid apartment through window diffusion",
              ].map((alt, i) => (
                <div
                  key={i}
                  role="img"
                  aria-label={alt}
                  className="aspect-[3/4] bg-muted/40 border border-border/40 flex items-center justify-center"
                >
                  <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30">Still {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Behind the Scenes</h2>
            </div>
            <div className="space-y-10 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              <div className="space-y-4">
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">The crew was very small on purpose</h3>
                <p><strong className="text-foreground/90">Camera:</strong> Blackmagic, with Iron Glass rehoused cine lenses — my own kit. Owning the package meant the money went into locations, talent and time instead of rental invoices.</p>
                <p><strong className="text-foreground/90">Crew:</strong> me (directing and operating), the producer, and one local gaffer hired in Madrid.</p>
                <p><strong className="text-foreground/90">Lighting:</strong> Nanlite PavoSlim rigged as a booklight (most of the emotional lifting), Aputure 600D with softbox and modifiers for side light, backlight and background depth.</p>
                <p>That's it. Two heads, a bounce, some diffusion. The advantage is mobility: we could break down, move and be shooting again in a fraction of the time a "proper" lighting truck would allow. On a multi-location shoot, speed <em>is</em> production value.</p>
                <p>This is the core argument for hiring a hybrid director-operator on a project like this. No translation layer. I saw the frame, I lit the frame, I shot the frame, and I already knew how it would cut — because I was the one who was going to cut it.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">The edit</h3>
                <p>I edited it myself. The structure had to feel like memory rather than chronology: fragments, associations, a slow accumulation. There's a well-established finding in psychology — the peak-end rule (Kahneman, Fredrickson et al.) — that our retrospective judgement of an experience is dominated by its emotional peak and its ending. I built the cut around that quite deliberately: everything is in service of one peak and one last frame.</p>
                <p>Once picture was locked, it went out for sound design, which is where the film really came home. On a piece with no dialogue, sound isn't support — it's half the script.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">Delivery</h3>
                <p>We turned it around fast, which gave the client something rarer than a good film: time to actually promote it. They had the hero cut and social adaptations well ahead of the campaign window.</p>
                <p>One decision I'll defend forever: we kept the widescreen version as the hero, even on Instagram. The framing <em>is</em> the film. Cropping those long-lens compositions to 9:16 would have thrown away the exact thing that made them feel like photographs. We made adaptations where genuinely needed — but the flagship stayed cinematic.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="max-w-2xl space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Reflection</h2>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              I've made a lot of commercials that were technically fine and emotionally inert. This one isn't that, and I think the reason is embarrassingly simple: I didn't try to sell anything. I tried to notice something.
            </p>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              The brief said "a date." What we made was an argument — that love isn't an occasion you schedule, it's a texture you live in, and the reason a perfume matters is that it can put you back inside a moment you thought you'd lost.
            </p>
            <ul className="space-y-3 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7] list-disc pl-5">
              <li><strong className="text-foreground/90">The constraint made it better.</strong> One gaffer, two lights, a tripod and a long lens.</li>
              <li><strong className="text-foreground/90">Stillness is underrated.</strong> Everyone is moving the camera. Almost nobody is holding it still and daring you to look.</li>
              <li><strong className="text-foreground/90">Research is not pretension.</strong> Knowing <em>why</em> meant I could defend every choice in a room full of stakeholders.</li>
              <li><strong className="text-foreground/90">Own your kit, own your edit.</strong> The two things that let a small operation punch several weight classes up.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Credits */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Credits</h2>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 font-body text-sm text-foreground/70 leading-relaxed">
              {[
                ["Director & DP (hybrid director-operator)", "Bohdan Rohulskyi"],
                ["Editor", "Bohdan Rohulskyi"],
                ["Client", "Zielinski & Rozen"],
                ["Producer", "Valentina Bobrova"],
                ["Production Services", "Track of God"],
                ["Location", "Madrid, Spain"],
                ["Camera", "Blackmagic"],
                ["Lenses", "Iron Glass cine primes"],
                ["Lighting", "Nanlite PavoSlim (booklight), Aputure 600D"],
                ["Deliverables", "Hero film for in-store retail screens, YouTube, Instagram, Facebook + social adaptations"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">{label}</dt>
                  <dd className="mt-1.5 text-foreground/80">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">FAQ</h2>
            </div>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q} className="space-y-3">
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground/90 tracking-tight">{f.q}</h3>
                  <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">{f.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ValentinDay;
