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
    a: "Yes, provided the hierarchy and handover points are clear. On this project, photography led the day. I observed while the stills were being made, then used short gaps for controlled motion portraits and interview material. The aim was to give the film its own shape without asking the entire set to stop and become a video production.",
  },
  {
    q: "What is the difference between an editorial film and behind-the-scenes video?",
    a: "Behind-the-scenes coverage documents how a shoot happened. An editorial film should carry the same idea, styling and attitude as the finished story and be able to stand beside the photographs as a final asset. It can come from the same day, but it needs an editorial point of view rather than a record of activity.",
  },
  {
    q: "How can motion be lit without rebuilding a stills setup?",
    a: "Start by understanding what the existing light is already doing. For the Dylan Bachelet portrait, a large frosted window provided broad fill and I used one fixture as the key. Moving that key closer gave me the exposure and shape I needed without a full relight.",
  },
  {
    q: "Why use a tripod for a short fashion film?",
    a: "A tripod can make a limited shooting window more deliberate. The frame is chosen first, so small movements from the subject carry the image. Here, that stillness also helped the motion work sit naturally beside the editorial photography.",
  },
  {
    q: "Why does the film combine black-and-white and colour?",
    a: "The two treatments reveal different parts of the portrait. Colour holds the skin tone, clothes and atmosphere; black-and-white concentrates attention on expression, form and gesture. Switching between them also gives a 31-second film rhythm without forcing a conventional plot.",
  },
  {
    q: "What was Bohdan Rohulskyi's role on the IMAGINE Magazine editorial?",
    a: "The official IMAGINE feature credits Bohdan Rohulskyi as Videographer. He developed the motion approach and filmed the editorial portrait of Dylan Bachelet.",
  },
];

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title: "Filming Video Alongside a Fashion Editorial | Dylan Bachelet for IMAGINE",
      description:
        "How Bohdan Rohulskyi filmed a 31-second portrait of Dylan Bachelet for IMAGINE Magazine within a photo-first editorial schedule using one light and a tripod.",
      canonical: CANONICAL,
      meta: [
        { property: "og:title", content: "Dylan Bachelet x IMAGINE Magazine — Editorial Portrait Film" },
        {
          property: "og:description",
          content:
            "A 4:3 editorial portrait of Dylan Bachelet, filmed alongside a stills-led IMAGINE Magazine shoot.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: CANONICAL },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "dylan-bachelet",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "The Film Had to Fit Between the Stills",
          description:
            "How Bohdan Rohulskyi filmed a 31-second portrait of Dylan Bachelet for IMAGINE Magazine within a photo-first editorial schedule using one light and a tripod.",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "https://bohdanrohulskyi.com/about",
          },
          mainEntityOfPage: CANONICAL,
          datePublished: "2025-06-09",
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Dylan Bachelet x IMAGINE Magazine — Editorial Portrait Film",
          description:
            "A short 4:3 editorial portrait of Dylan Bachelet filmed by Bohdan Rohulskyi for an IMAGINE Magazine feature.",
          duration: "PT30.88S",
          width: 1280,
          height: 960,
          uploadDate: "2025-06-09",
          embedUrl: "https://player.vimeo.com/video/1107691277",
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
            title="Dylan Bachelet — IMAGINE Magazine"
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
              The Film Had to Fit Between the Stills
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Dylan Bachelet — IMAGINE Magazine
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
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Format
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                30.88 seconds / 4:3 — 2025
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
        <motion.div {...sectionAnim} className="max-w-2xl space-y-6">
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
            Introduction
          </h2>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            Producer Emma Christopher and IMAGINE Editor-in-Chief Olive Walton contacted me through Instagram. They had seen my work, liked the way I filmed people and asked whether I could create a moving-image piece for an editorial featuring Dylan Bachelet.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            The catch was built into the job. Photography was the main event.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            Bartek Szmigulski was shooting the stills, and the day had been planned around his frames, his timings and the wider fashion team. I was not walking into a dedicated film set with a protected shot list and all afternoon to finesse it. I had to watch while the photographs were being made, find angles without getting in the way, then work properly whenever Dylan and the set became available.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            That sort of setup can produce one of two weak results. Video either starts holding up the day, or it gets pushed so far to the side that all it records is the fact that a photoshoot happened.
          </p>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            I wanted neither. The job was to make a portrait that belonged to the editorial while respecting what the set was actually there to do.
          </p>
        </motion.div>
      </section>

      {/* Overview: The Brief */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Overview: The Brief
              </h2>
            </div>
            <dl className="space-y-6 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              <div>
                <dt className="text-foreground/90 font-medium">Publication</dt>
                <dd>IMAGINE Magazine, a fashion, entertainment and culture title.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">Collaboration</dt>
                <dd>A creative editorial made with the IMAGINE team.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">The ask</dt>
                <dd>Develop the idea and visual approach for a short editorial film featuring Dylan Bachelet, then capture it within a stills-led studio day.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">What they gave me</dt>
                <dd>A recognisable subject, a photographer-led schedule, a full fashion and grooming team, an existing studio environment and limited windows for dedicated motion coverage.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">What I gave back</dt>
                <dd>A compact 4:3 portrait built from controlled frames, small gestures, changes of scale, restrained colour and black-and-white imagery. We also recorded a couple of short interview responses in the gaps, giving the material a narrative spine without turning the day into a separate interview shoot.</dd>
              </div>
              <div>
                <dt className="text-foreground/90 font-medium">My role</dt>
                <dd>
                  I am publicly credited as Videographer on the{" "}
                  <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
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
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Creative Approach
              </h2>
            </div>
            <div className="space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The photo set was the set
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The first useful decision was accepting the hierarchy of the day straight away.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  I was not there to ask the photographer to rebuild his setup around my coverage. I treated the stills shoot as the environment the film had to grow from. While Bartek was working, I watched Dylan's movement, the way the clothes fell, which angles held up between poses and where the existing light was doing something useful.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  Some frames came from those live moments. Others were made in the short breaks when I could have Dylan for myself. The shift between the two mattered: observation gave me behaviour; the dedicated windows gave me cleaner portrait holds and the bits of coverage the edit would need.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  There is a fair bit of restraint involved. Seeing a good angle does not automatically mean stepping into it. On a shared set, timing is part of composition.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  A portrait made in borrowed minutes
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  With a short motion window, a long shot list is mostly theatre. I needed a simpler structure I could carry in my head:
                </p>
                <ul className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7] list-disc pl-5 space-y-1.5">
                  <li>a few frames that held Dylan's presence;</li>
                  <li>changes in scale from face and eyes to hands, clothes and posture;</li>
                  <li>small movements that did not require a reset;</li>
                  <li>enough contrast between looks to make the finished piece progress;</li>
                  <li>brief spoken material when the room went quiet enough to record it.</li>
                </ul>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  This gave me somewhere to go whenever the set opened up. I was not inventing a new scene every time. I was filling deliberate gaps in the same portrait.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The public master is only 30.88 seconds. At that length, coverage has to earn its place quickly. A turn of the head can do more than a complicated move if the frame around it is right.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The person cannot become another item on the call sheet
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  Dylan was already used to being watched and photographed. That does not remove the need for trust. If anything, people who spend a lot of time in front of cameras notice very quickly when a crew is treating them as material rather than a person.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  My approach is quite direct. I explain what I need, keep the instruction clear, watch the person's energy and avoid making every second feel like a performance test. Dylan could relax, have a good time and try things without the room becoming heavy.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  That comfort shows up on camera. You see it in the shoulders, in the moment after a pose and in the willingness to give you one more variation. It is not separate from cinematography. It changes what there is to photograph.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematography */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Cinematography: Working With What the Set Already Had
              </h2>
            </div>
            <div className="space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  One fixture, one window, no relight for the sake of it
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  I had one lighting fixture for the motion work. Rather than fighting the studio, I chose Dylan's position around a large nearby window that had been softened with frost.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The window gave me a broad fill. My fixture became the key, and when I needed a bit more exposure or shape, I brought it closer rather than building a larger setup. It was quick to adjust, easy to keep out of the stills team's way and consistent with the tone already being created in the room.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  This is the bit that matters more than the number of lamps: the film did not suddenly look as if another crew had arrived. It shared the editorial's visual world.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  The tripod kept the images intentional
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  It would have been easy to shoot the whole thing handheld simply because time was tight. I went the other way and used a tripod for much of the work.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The fixed camera made me choose the frame before asking Dylan to move. It also let small changes carry more weight: a glance, a hand entering the composition, the line of a vest, the pause before another pose. Those still-like holds connected naturally with the photography without turning the film into a slideshow.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The final 4:3 master helped. It has the proportion of an editorial image and gives a face, garment or fragment of the body enough graphic weight without needing a wide studio view.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Colour and black-and-white as two sides of the same person
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The finished piece moves between restrained colour and black-and-white.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  Colour carries skin, styling and the atmosphere of the room. Monochrome pares the image back to shape, expression and line. Moving between them gave the portrait more range and helped Dylan feel less fixed in a single public image.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The contrast also gives a very short film punctuation. There is no literal narrative to explain; changes in scale, look, texture and colour create the progression.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Interviews without building an interview set
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  We recorded a couple of short responses during pauses in the main shoot. I did not want to turn those moments into a formal talking-head setup. The point was to give the material a voice while keeping the day moving.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  That is often enough on an editorial. A small amount of spoken material can anchor a portrait, while the images are free to remain suggestive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Behind the Scenes
              </h2>
            </div>
            <div className="space-y-10">
              <div className="space-y-5">
                <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                  Working around the stills schedule
                </h3>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The day was organised for photography, so motion coverage had to stay light on its feet. I watched during the main stills work, kept track of the angles and gestures worth returning to, then used the available pauses for more controlled frames and brief interview material.
                </p>
                <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                  The important thing was not to ask for time twice. If a look, light or position was already working, I built from it.
                </p>
              </div>

              <dl className="space-y-4 font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Camera</dt>
                  <dd>Blackmagic Pocket Cinema Camera 6K (BMPCC 6K)</dd>
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
                  <dd>Published master 1280 × 960 pixels, 4:3</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Key light</dt>
                  <dd>One lighting fixture</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="text-foreground/90 font-medium">Fill</dt>
                  <dd>A large window softened with frost</dd>
                </div>
              </dl>

              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The official IMAGINE page hosts a 30.88-second 4:3 master. The collaboration was published on{" "}
                <a
                  href="https://www.instagram.com/dylanbachelet_/p/DKrXH7VoBXZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  9 June 2025
                </a>
                . Its quick changes of scale, pose and colour let the film sit beside the written interview and Bartek's stills without trying to explain the same material again.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="max-w-2xl space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
              Reflection
            </h2>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              This job clarified something I have found useful on plenty of mixed-discipline sets: motion does not need to dominate the day to feel authored.
            </p>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              It needs a clear reason to exist, a visual rule it can hold onto and somebody paying attention when the unscheduled moment turns out to be the best one.
            </p>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              For a producer adding motion to a stills-led editorial, I would protect five things:
            </p>
            <ol className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7] list-decimal pl-5 space-y-2">
              <li>
                <span className="text-foreground/90 font-medium">Agree the hierarchy before the shoot.</span> Everyone should know whether stills or motion has priority and when that priority can switch.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">Make the lighting plans compatible.</span> Rebuilding the set for every handover burns time and creates two unrelated visual worlds.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">Reserve a few clean motion windows.</span> Observation is useful, but the film still needs moments when the subject is genuinely available.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">Plan coverage by function.</span> Portrait, detail, gesture, variation and voice are more useful than a wish list of twenty elaborate shots.
              </li>
              <li>
                <span className="text-foreground/90 font-medium">Look after the person in front of the camera.</span> Their energy is a production resource. Use it carelessly and the footage will tell on you.
              </li>
            </ol>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              The camera work on this project was fairly contained. That was the point. The job was to notice more, not occupy more space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credits */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Credits
              </h2>
            </div>
            <dl className="divide-y divide-border/60">
              {credits.map(([role, name]) => (
                <div key={role} className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-4 py-3">
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
          <motion.div {...sectionAnim} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                FAQ
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q} className="space-y-3">
                  <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground/90">
                    {q}
                  </h3>
                  <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                    {a}
                  </p>
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

export default ProjectDetail;
