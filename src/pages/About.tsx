import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";

const SITE_URL = "https://bohdanrohulskyi.com";
const PAGE_URL = `${SITE_URL}/about`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bohdan Rohulskyi",
  jobTitle: "Director of Photography",
  description:
    "London-based Director of Photography and filmmaker working across sport, fashion, music video, documentary and commercial films.",
  url: PAGE_URL,
  email: "mailto:rogulskiproject@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  workLocation: [
    { "@type": "Place", name: "London, United Kingdom" },
    { "@type": "Place", name: "United Kingdom" },
    { "@type": "Place", name: "Europe" },
  ],
  knowsAbout: [
    "Cinematography",
    "Documentary film",
    "Fashion film",
    "Music video",
    "Commercial campaigns",
    "Branded content",
    "Sport films",
    "Interview-led films",
  ],
  subjectOf: [
    {
      "@type": "CreativeWork",
      name: "Uncharted: SailGP",
      creditText: "Cinematographer, London Unit",
    },
    {
      "@type": "MusicVideo",
      name: "Hozier — Francesca",
      creditText: "Camera Operator",
      director: { "@type": "Person", name: "Anthony Byrne" },
    },
    {
      "@type": "VideoObject",
      name: "PUMA Fit",
      creditText: "Director",
      about: { "@type": "Person", name: "Yaroslava Mahuchikh" },
    },
    {
      "@type": "MusicVideo",
      name: "Rami Kallas — Black",
      creditText: "Director",
      award: "Berlin Music Video Awards nomination — Best Low Budget",
    },
  ],
};

const About = () => {
  useEffect(() => {
    return applySeo({
      title: "Bohdan Rohulskyi | London Cinematographer & Filmmaker",
      description:
        "London-based Director of Photography and filmmaker working across sport, fashion, music video, documentary and commercial films.",
      canonical: PAGE_URL,
      meta: [
        { property: "og:title", content: "Bohdan Rohulskyi | London Cinematographer & Filmmaker" },
        {
          property: "og:description",
          content:
            "London-based Director of Photography and filmmaker working across sport, fashion, music video, documentary and commercial films.",
        },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: PAGE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Bohdan Rohulskyi | London Cinematographer & Filmmaker" },
        {
          name: "twitter:description",
          content:
            "London-based Director of Photography and filmmaker working across sport, fashion, music video, documentary and commercial films.",
        },
      ],
      jsonLd: personSchema,
      jsonLdId: "about-person",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-28 md:pt-36">
        {/* Hero */}
        <section className="px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-foreground/50 mb-6">
                About
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
                London Cinematographer and Filmmaker
              </h1>
              <div className="mt-10 space-y-5 font-body text-base md:text-lg leading-relaxed text-foreground/80 max-w-3xl">
                <p>
                  Bohdan Rohulskyi is a London-based cinematographer working
                  across sport, fashion, music video, documentary and branded
                  films.
                </p>
                <p>
                  His work has appeared in international campaigns, music
                  videos, documentaries and fashion films for artists, brands
                  and publications including PUMA, The Business of Fashion 500,
                  Vogue Mexico &amp; Latinoamérica, TVORCHI, Hozier, SailGP and
                  Max Factor.
                </p>
                <p>
                  He is hired by producers, directors and brand teams who need
                  cinematic images, real human presence and a production-aware
                  approach on set.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-9 py-[18px] bg-foreground text-background font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                >
                  Book a Call
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-9 py-[18px] border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  View Selected Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cinematography built around real presence */}
        <section className="mt-24 md:mt-32 py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Cinematography built around real presence
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan&rsquo;s work is rooted in naturalistic cinematography:
                controlled realism, physical movement and emotionally precise
                framing.
              </p>
              <p>
                The image should feel designed, but not staged to death. The
                lighting should shape the scene without pulling attention away
                from the person in front of the camera. The camera should make
                the viewer feel close to the moment, rather than outside it.
              </p>
              <p>
                This approach has shaped work across documentary, fashion,
                sport and performance-led films, where the audience needs to
                believe what they are watching quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Experience across international documentary, music and commercial
              work
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan has worked on international productions across the UK
                and Europe.
              </p>
              <p>
                He is credited as Cinematographer for the London Unit on{" "}
                <em>Uncharted: SailGP</em>, a documentary series connected to
                the global SailGP racing league and distributed through
                international broadcast partners including TNT Sports,
                Paramount+, Canal+, Eurosport, TSN, FOX Sports Australia and
                others.
              </p>
              <p>
                He also worked as Camera Operator on{" "}
                <em>Shooting with Music</em>, a UK-produced documentary
                directed by BAFTA-nominated filmmaker Jacqui Morris, exploring
                the cultural and political influence of Ukrainian artist
                Svyatoslav Vakarchuk.
              </p>
              <p>
                As Camera Operator, Bohdan also worked on{" "}
                <em>Hozier &mdash; &ldquo;Francesca&rdquo;</em>, directed by
                Anthony Byrne. The official video reached more than 6.2 million
                views.
              </p>
              <blockquote className="mt-8 border-l-2 border-foreground/30 pl-6 italic text-foreground/85 font-body text-lg leading-relaxed">
                &ldquo;A very talented young Ukrainian camera operator who has
                a great eye.&rdquo;
                <footer className="mt-3 not-italic font-body text-xs uppercase tracking-[0.15em] text-foreground/50">
                  &mdash; <cite>Anthony Byrne, director, Hozier &mdash; &ldquo;Francesca&rdquo;</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Music video and artist work */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Music video and artist work with measurable reach
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Before moving deeper into commercial, fashion and documentary
                work, Bohdan built a strong visual language through music
                videos and artist-led films.
              </p>
              <p>
                He worked extensively with TVORCHI, the Ukrainian electronic
                duo who represented Ukraine at Eurovision 2023. As Director and
                Director of Photography, he helped shape a series of visual
                projects for the band&rsquo;s <em>ROAD</em> album, with videos
                including &ldquo;Іди сюди,&rdquo; &ldquo;Crush,&rdquo;
                &ldquo;Dance on the Beat,&rdquo; &ldquo;Electrify,&rdquo;
                &ldquo;Loco,&rdquo; &ldquo;Troublemaker,&rdquo;
                &ldquo;Code&rdquo; and &ldquo;Alive.&rdquo; Together, these
                videos reached more than 2.9 million views on YouTube.
              </p>
              <p>
                He also worked as Director of Photography on{" "}
                <em>TVORCHI &mdash; &ldquo;Віч-на-Віч&rdquo;</em>, which
                reached approximately 1.1 million views.
              </p>
              <p>
                His work as Cinematographer on{" "}
                <em>Masha Kondratenko &mdash; &ldquo;Malaia&rdquo;</em> reached
                more than 576,000 organic views on YouTube.
              </p>
              <p>
                These projects gave him a foundation in rhythm, performance,
                movement, colour and emotional pacing &mdash; skills that now
                carry into commercial, documentary and fashion work.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial, fashion and branded film */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Commercial, fashion and branded film
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan&rsquo;s commercial and fashion work includes campaigns,
                editorials and branded films for sport, beauty, fashion and
                culture-led clients.
              </p>
              <p>
                He directed <em>PUMA Fit</em>, a campaign featuring Olympic
                high jumper Yaroslava Mahuchikh. He has also created fashion
                and editorial films connected to Vogue Mexico &amp;
                Latinoamérica, Imagine Magazine, The Business of Fashion and
                BoF 500.
              </p>
              <p>
                His fashion film for Dylan Bachelet was published by Imagine
                Magazine, and his film work around Michelle Salas connected to
                Vogue Mexico &amp; Latinoamérica and Dolce &amp; Gabbana in
                Milan.
              </p>
              <p>
                For brands and agencies, this means he brings more than
                technical camera work. He understands how image, casting,
                movement, styling, rhythm and editorial context affect how a
                film is perceived.
              </p>
            </div>
          </div>
        </section>

        {/* Recognition and press */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Recognition and press
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan&rsquo;s directing work has been recognised by
                international platforms and industry press.
              </p>
              <p>
                His music video <em>Rami Kallas &mdash; &ldquo;Black&rdquo;</em>{" "}
                was nominated at the Berlin Music Video Awards in the Best Low
                Budget category, selected by Indie-Eye as a festival favourite,
                and included by SLUKH.MEDIA in its list of the top 30 Ukrainian
                music videos of 2021. The video reached more than 119,000 views
                on YouTube.
              </p>
            </div>
          </div>
        </section>

        {/* For producers, directors, brand teams */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              A Director of Photography for producers, directors and brand
              teams
            </h2>
            <div className="mt-8 space-y-8 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan is often brought into productions that need strong
                visual taste without unnecessary complexity.
              </p>

              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.15em] text-foreground/90 mb-3">
                  For producers
                </h3>
                <p>
                  He offers a reliable, prepared and production-aware approach.
                  He understands timing, crew size, location limits, kit
                  decisions and the pressure of getting the material without
                  slowing the day down.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.15em] text-foreground/90 mb-3">
                  For directors
                </h3>
                <p>
                  He works as a visual partner: translating references into
                  lighting, lensing, movement and coverage that can actually be
                  achieved on set.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.15em] text-foreground/90 mb-3">
                  For brands and agencies
                </h3>
                <p>
                  He creates images that feel cinematic but still function
                  across campaigns, social edits, web films, founder-led
                  content, testimonials, launch films and paid media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Based in London */}
        <section className="py-16 md:py-20 border-t border-border px-6 md:px-10 lg:px-16">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
              Based in London. Available across the UK and Europe.
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/75 max-w-3xl">
              <p>
                Bohdan is based in London and works across the UK and Europe as
                a cinematographer and Director / DoP.
              </p>
              <p>
                He is available for documentary films, commercial campaigns,
                fashion films, branded content, interviews, sport films, music
                videos, event films and social-first video production.
              </p>
              <p>
                For projects that need a London cinematographer with
                naturalistic visual taste, international production experience
                and a calm, practical approach on set, get in touch.
              </p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default About;
