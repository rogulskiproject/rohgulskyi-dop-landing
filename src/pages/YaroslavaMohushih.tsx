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
  { label: "Client", value: "PUMA" },
  { label: "Category", value: "Documentary / Commercial" },
  { label: "Role", value: "Director / Director of Photography" },
  { label: "Location", value: "Belek, Turkey" },
  { label: "Year", value: "2025" },
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

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 pl-0">
    {items.map((item, i) => (
      <li
        key={i}
        className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.8] pl-6 border-l border-border"
      >
        {item}
      </li>
    ))}
  </ul>
);

const YaroslavaMohushih = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        "Directing Performance: Behind the PUMA FIT Shoot with Yaroslava Mahuchikh | Bohdan Rohulskyi",
      description:
        "A behind-the-scenes look at the PUMA FIT campaign with Ukrainian high jumper and Olympic champion Yaroslava Mahuchikh — directed and shot by Bohdan Rohulskyi in Belek, Turkey.",
      canonical: "/work/yaroslava-mohushih",
      meta: [
        {
          property: "og:title",
          content:
            "Directing Performance: Behind the PUMA FIT Shoot with Yaroslava Mahuchikh",
        },
        {
          property: "og:description",
          content:
            "How a PUMA Ukraine campaign balanced athletic performance, fashion silhouette and documentary authenticity with Olympic high jumper Yaroslava Mahuchikh.",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "/work/yaroslava-mohushih" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "yaroslava-mohushih",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Directing Performance: Behind the PUMA FIT Shoot with Yaroslava Mahuchikh",
          description:
            "A behind-the-scenes look at the PUMA FIT campaign with Ukrainian high jumper and Olympic champion Yaroslava Mahuchikh.",
          datePublished: "2025-01-15",
          dateModified: "2025-01-15",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "/about",
          },
          mainEntityOfPage: "/work/yaroslava-mohushih",
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Directing Performance — PUMA FIT with Yaroslava Mahuchikh",
          description:
            "PUMA FIT campaign film directed and shot by Bohdan Rohulskyi featuring Ukrainian high jumper Yaroslava Mahuchikh.",
          uploadDate: "2025-01-15",
          embedUrl: "https://player.vimeo.com/video/1010047613",
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
            src="https://player.vimeo.com/video/1010047613?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Directing Performance — PUMA FIT with Yaroslava Mahuchikh"
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
              Documentary / Commercial — PUMA — Belek, Turkey, 2025
            </p>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Directing Performance: Behind the PUMA FIT Shoot with Yaroslava
              Mahuchikh
            </h1>
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
              <P>
                For this PUMA Ukraine project, I worked with Ukrainian high
                jumper Yaroslava Mahuchikh — Olympic champion and world-record
                holder at 2.10 metres.
              </P>
              <P>
                The brief for the PUMA FIT collection sat somewhere between
                performance, fashion and documentary. We needed to show the
                functionality of the clothing through real movement, preserve a
                strong fashion silhouette and, at the same time, reveal
                something genuine about Yaroslava as an athlete.
              </P>
              <P>
                I worked across both direction and cinematography, developing
                the visual approach, interview structure, shooting strategy and
                on-set execution. The challenge was to bring three things into the
                same film: athletic performance, product and personality —
                without making any of them feel secondary.
              </P>
              <P>
                Rather than treating the interview, training sequences and
                fashion shots as separate pieces, I wanted them to exist within
                one visual language built around Yaroslava’s real environment.
              </P>
            </div>
          </motion.section>

          <Section title="Working with elite athletes starts before the camera">
            <P>
              One of the biggest differences between working with professional
              athletes and conventional talent is that you are entering an
              already highly controlled environment.
            </P>
            <P>
              Training, recovery, physical condition and competition schedules
              all come first. For me, production should avoid adding unnecessary
              stress or uncertainty to that environment.
            </P>
            <P>
              Unexpected physical demands, large changes of plan or suddenly
              introducing creative ideas that have never been discussed can
              quickly create friction. And that friction affects more than time.
              It affects trust between the athlete, their coach, management, the
              brand and the production team.
            </P>
            <P>
              That is why pre-production becomes especially important. The more
              questions we can answer before the shoot, the more freedom we have
              once the camera starts rolling.
            </P>
          </Section>

          <Section title="Building trust before the shoot">
            <P>
              The day before filming, we had dinner with Yaroslava. It wasn't
              really a formal production meeting. I showed her the moodboard, shot
              ideas, early visual references and the structure we had in mind for
              the following days. We talked through what we wanted to film and
              why.
            </P>
            <P>
              But just as importantly, we had time to talk normally. That gave
              us an opportunity to understand each other before arriving on set
              surrounded by cameras, crew and a schedule.
            </P>
            <P>
              For documentary-led work, I find this extremely valuable. A good
              performance doesn't necessarily come from giving more
              instructions. Often it comes from understanding the person in
              front of the camera, what makes them comfortable and what makes
              them interested in the process.
            </P>
            <P>
              The same applies to the athlete's coach and management. They
              understand the athlete's preparation and limitations better than
              anyone else. Establishing that relationship early makes the
              production much more collaborative. Instead of the film crew
              becoming a disruption, everyone understands what we are trying to
              achieve.
            </P>
          </Section>

          <Section title="Build the story around reality">
            <P>
              Another principle I use when filming athletes is simple: don't
              fight their reality. Build the film around it.
            </P>
            <P>
              Elite athletes rarely have unlimited availability. They may be
              preparing for a competition, following a strict training programme
              or only have certain windows where filming is possible.
            </P>
            <P>
              In our case, Yaroslava was training at Gloria Sports Arena in
              Belek, Turkey. That became our starting point. Before deciding
              what the film should look like, we looked at what the environment
              could actually give us.
            </P>
            <List
              items={[
                "Where does she normally train?",
                "Which locations can we access?",
                "What movement naturally belongs there?",
                "Where can the product look strongest?",
                "Where can we create visually distinctive images without forcing the athlete into an artificial situation?",
              ]}
            />
            <P>
              Because the collection was performance-focused, the client wanted
              movement and functionality to be clearly visible while still
              preserving a fashion component. The stadium, gym, running areas
              and surrounding architecture therefore became part of the story
              rather than simply backgrounds.
            </P>
            <P>
              One location I particularly liked was the stadium seating. The
              colours naturally worked with elements of the styling, make-up and
              clothing, so the location became another visual anchor for the
              film.
            </P>
            <P>
              This is where direction and cinematography become difficult to
              separate. A location isn't only a storytelling decision. It
              determines colour, composition, movement, lighting and eventually
              how the clothing itself is perceived.
            </P>
          </Section>

          <Section title="Scout first. Shoot second.">
            <P>
              We planned to arrive before the main shoot with a minimal crew. For
              this kind of production, I consider scouting essential.
            </P>
            <P>
              Google Maps, location photographs and references can tell you a
              lot, but they never tell you everything. Walking through the
              location allowed us to discover angles that weren't obvious
              remotely, understand how different areas were being used, speak
              directly with the local management and make sure the spaces we
              needed would actually be available.
            </P>
            <P>
              We could also coordinate our shooting windows around the athletes
              already using the facility. By the time the main crew arrived, we
              weren't spending production time discovering the location or
              explaining what we wanted to do. We were executing decisions that
              had already been made.
            </P>
            <P>
              During the scout, I also used Sun Seeker to understand the position
              of the sun throughout the day. Because daylight was going to be
              such an important part of the visual approach, the sun path became
              part of the shooting schedule. We photographed preliminary frames
              on a phone and added them to our pre-production materials.
            </P>
            <P>
              By the shoot, we effectively had a visual map of the day:
              location, framing and approximate lighting conditions for each key
              sequence.
            </P>
          </Section>

          <Section title="Natural light as the foundation">
            <P>
              Belek gave us a lot of sun, so rather than fighting it with a large
              lighting package, I decided to make daylight our primary source.
            </P>
            <P>
              I generally prefer working with natural light when the project
              allows it. Especially on fashion and commercial projects, accurate
              skin tone and clothing colour are important, but I also like the
              sense of realism that daylight gives to a performance-driven
              image.
            </P>
            <P>
              Our approach was therefore less about creating light and more
              about controlling the light that already existed. We carried a
              12×12 bounce for additional level when shooting against the sun, as
              well as a 12×12 diffusion frame for moments when the overhead
              sunlight became too hard. Two 8×8 frames gave us negative fill when
              we needed more shape and contrast.
            </P>
            <P>
              Because we had already studied the path of the sun, those tools
              could remain relatively simple. We knew approximately where the
              light would be and designed the schedule around it rather than
              trying to correct every location afterwards. That kept the setup
              mobile enough for an athlete-led shoot while still giving me
              control over the image.
            </P>
          </Section>

          <Section title="Knowing when daylight isn't enough">
            <P>
              Natural light being the foundation doesn't mean it has to become a
              rule.
            </P>
            <P>
              For the interview on the stadium seating, the sun could no longer
              reach the position in the way I wanted. Instead of accepting a
              flatter image, we introduced two Aputure 1200 fixtures to create
              controlled backlight and separation.
            </P>
            <P>
              The goal wasn't to suddenly make the scene look obviously lit. It
              was to maintain the softness and naturalism of the visual language
              while giving Yaroslava enough separation from the background.
            </P>
            <P>
              We also used a reflector close to camera to bring additional level
              into the face and give us flexibility between wider frames and
              close-ups without rebuilding the entire setup.
            </P>
            <P>
              For me, lighting shouldn't demonstrate how much equipment was
              used. It should solve the visual problem while remaining consistent
              with the world of the film.
            </P>
          </Section>

          <Section title="Using the interview as story architecture">
            <P>
              The interview wasn't treated as an isolated talking-head section.
              Before the shoot, I prepared a set of questions together with the
              marketing team and discussed them with Yaroslava. We knew the
              general territory we wanted the answers to cover because those
              answers would eventually form the narrative spine of the edit.
            </P>
            <P>
              But I didn't want to script her responses. There is an important
              difference between knowing what you need from an interview and
              telling somebody what they need to say. Preparing possible
              directions gave us structure. Allowing Yaroslava to answer
              naturally kept the material personal.
            </P>
            <P>
              Once that narrative architecture existed, the training footage,
              fashion portraits and movement sequences could become more than
              B-roll. They became visual extensions of what she was saying.
            </P>
          </Section>

          <Section title="Designing the schedule around performance">
            <P>
              We knew from the beginning that we couldn't simply take an entire
              uninterrupted day from Yaroslava. She still had her training
              schedule, and we were also sharing her availability with the
              photography team.
            </P>
            <P>
              Instead of trying to compress everything into one exhausting
              production day, we divided the work across two days. The first day
              concentrated on the more physically demanding and visually driven
              material: running, training movements, athletic sequences, posing
              and the frames where the silhouette and functionality of the
              collection were most important.
            </P>
            <P>
              The second day was deliberately calmer. We recorded the interview
              before training, when Yaroslava was relaxed and visually fresh
              rather than immediately after physical exertion. It also gave us a
              buffer. If something hadn't worked on day one — because of light,
              timing, performance or simply a missing shot — we still had
              another opportunity to solve it rather than compromising the final
              edit.
            </P>
          </Section>

          <Section title="A smaller, trusted camera package">
            <P>
              Another challenge was equipment logistics. Belek doesn't offer the
              same rental infrastructure as a major production city, so building
              a complicated camera package locally would have introduced
              another point of uncertainty.
            </P>
            <P>
              I deliberately reduced the equipment list and travelled with a
              camera setup I already knew extremely well. For this project I
              chose my Blackmagic package.
            </P>
            <P>
              On a shoot with limited access to the talent, reliability is more
              valuable to me than bringing additional equipment simply because
              it is available. A camera I know, lenses I understand and a
              workflow that has already been tested allow me to spend less
              mental energy troubleshooting equipment and more time looking at
              what is actually happening in front of the camera.
            </P>
            <P>
              It also keeps production more efficient and leaves more of the
              budget available for the areas where additional resources
              genuinely change the result.
            </P>
          </Section>

          <Section title="Directing and cinematography as one process">
            <P>
              Projects like this are one of the reasons I enjoy combining
              directing and cinematography. For this kind of film, I don't
              really see story and image as two separate processes.
            </P>
            <P>
              The interview determines which moments we need. The location
              influences the story. The clothes influence movement and
              composition. Movement determines the camera. The sun influences
              the schedule. The athlete's schedule determines what is realistically
              possible. And all of those decisions eventually meet in the edit.
            </P>
            <P>
              The creative challenge is connecting them. The goal wasn't simply
              to make Yaroslava look cinematic, or simply to document her
              training. It was to create a film where performance, personality and
              product could exist in the same frame without one feeling added on
              top of another.
            </P>
            <P>
              For me, that is one of the most interesting parts of
              documentary-led commercial filmmaking: finding something truthful
              in the person and the environment, then using direction and
              cinematography to shape it into a controlled piece of brand
              communication.
            </P>
          </Section>

          <Section title="Five principles I took from the shoot">
            <P>
              Looking back at the project, there are five ideas I would carry into
              almost any production involving elite athletes.
            </P>
            <List
              items={[
                "Prepare before asking for performance. Anything physically demanding or potentially uncomfortable should be discussed before the athlete arrives on set.",
                "Build trust before directing. Understanding the person makes it easier to know when to push, when to step back and how to communicate.",
                "Adapt the film to the athlete's reality. Training schedules, locations and recovery aren't obstacles to work around. They should become part of the production strategy.",
                "Use cinematography to support the story, not compete with it. Lighting and camera choices should strengthen the athlete, the product and the environment rather than draw attention to the filmmaking itself.",
                "Protect the final film during pre-production. The clearer the narrative, locations, light and schedule are before the shoot, the more room there is for spontaneity when something genuinely interesting happens.",
              ]}
            />
          </Section>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
};

export default YaroslavaMohushih;
