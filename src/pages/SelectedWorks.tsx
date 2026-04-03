import { useState } from "react";
import { useNavigate } from "react-router-dom";
import unchartedCover from "@/assets/uncharted-sailgp-cover.png";
import bofCover from "@/assets/bof-500-cover.png";
import tvorchiCover from "@/assets/tvorchi-cover.png";
import hozierCover from "@/assets/hozier-cover.png";
import orserioCover from "@/assets/orserio-cover.jpg";
import dylanCover from "@/assets/dylan-bachelet-cover.jpg";
import yaroslavaCover from "@/assets/yaroslava-mohushih-cover.jpg";
import valentinCover from "@/assets/valentin-day-cover.jpg";
import anotherMagCover from "@/assets/another-magazine-cover.jpg";
import pumaFitCover from "@/assets/puma-fit-23-cover.jpg";
import pumaCrCover from "@/assets/puma-cr-cover.jpg";
import chernayaCover from "@/assets/chernaya-cover.jpg";
import SiteHeader from "@/components/SiteHeader";

interface Project {
  title: string;
  subtitle: string;
  category: string;
  filterGroup: string;
  link: string;
  vimeoId?: string;
  youtubeId?: string;
  coverImage?: string;
}

const projects: Project[] = [
  { title: "Dylan Bachelet", subtitle: "Imagine Magazine", category: "Editorial", filterGroup: "Fashion Film", link: "/work/dylan-bachelet", vimeoId: "1107691277", coverImage: dylanCover },
  { title: "Yaroslava Mohushih", subtitle: "PUMA", category: "Documentary Film", filterGroup: "Documentary", link: "/work/yaroslava-mohushih", vimeoId: "1010047613", coverImage: yaroslavaCover },
  { title: "Orserio", subtitle: "Orserio", category: "E-Commerce Brand Film", filterGroup: "Commercial", link: "/work/orserio", vimeoId: "1172857771", coverImage: orserioCover },
  { title: "Valentin Day", subtitle: "Zielinski & Rozen", category: "Documentary Campaign Film", filterGroup: "Documentary", link: "/work/valentin-day", vimeoId: "1166656782", coverImage: valentinCover },
  { title: "AnOther Magazine", subtitle: "Simone Rocha", category: "Editorial", filterGroup: "Fashion Film", link: "/work/another-magazine", vimeoId: "1010017917", coverImage: anotherMagCover },
  { title: "Hozier — Francesca", subtitle: "Hozier", category: "Music Video", filterGroup: "Music Video", link: "/work/hozier-francesca", youtubeId: "K1u_hL11auM", coverImage: hozierCover },
  { title: "PUMA FIT 23", subtitle: "PUMA", category: "Commercial / Sport", filterGroup: "Commercial", link: "/work/puma-fit-23", vimeoId: "948342341", coverImage: pumaFitCover },
  { title: "Puma CR", subtitle: "PUMA", category: "Commercial / Sport", filterGroup: "Commercial", link: "/work/puma-cr", vimeoId: "1010036272", coverImage: pumaCrCover },
  { title: "Chernaya — Rami Kallas", subtitle: "Rami Kallas", category: "Music Video", filterGroup: "Music Video", link: "/work/chernaya-rami-kallas", vimeoId: "1010028819", coverImage: chernayaCover },
  { title: "The Best of BoF 500 2023", subtitle: "The Business of Fashion", category: "Fashion Recap", filterGroup: "Fashion Film", link: "/work/bof-500-2023", youtubeId: "zNdnPu8L9_Y", coverImage: bofCover },
  { title: "Alessandro Michele — The BoF Podcast", subtitle: "The Business of Fashion", category: "Interview / Fashion", filterGroup: "Documentary", link: "/work/alessandro-michele-bof", youtubeId: "qtJqYEtbrBA" },
  { title: "TVORCHI — Віч-на-Віч", subtitle: "TVORCHI", category: "Music Video", filterGroup: "Music Video", link: "/work/tvorchi-vich-na-vich", youtubeId: "Y5QMUv7H0ic", coverImage: tvorchiCover },
  { title: "Uncharted: Sail GP", subtitle: "Sail GP", category: "Documentary Film", filterGroup: "Documentary", link: "/work/uncharted-sail-gp", youtubeId: "PDfaMsRMGY8", coverImage: unchartedCover },
];

const filters = ["All", "Documentary", "Commercial", "Music Video", "Fashion Film"];

const getThumbnail = (project: Project) => {
  if (project.coverImage) {
    return project.coverImage;
  }
  if (project.vimeoId) {
    return `https://vumbnail.com/${project.vimeoId}.jpg`;
  }
  if (project.youtubeId) {
    return `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
  }
  return "/placeholder.svg";
};

const SelectedWorks = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="pt-28 pb-20 px-6 md:px-10 lg:px-16">
        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-10">
          Selected Works
        </h1>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-xs md:text-sm uppercase tracking-[0.15em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "border-foreground/60 text-foreground bg-foreground/10"
                  : "border-foreground/10 text-foreground/40 hover:text-foreground/70 hover:border-foreground/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project) => {
            const visible = activeFilter === "All" || project.filterGroup === activeFilter;

            return (
              <div
                key={project.title}
                onClick={() => navigate(project.link)}
                className={`relative cursor-pointer group overflow-hidden rounded-sm border border-foreground/10 transition-all duration-500 ease-out ${
                  visible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none absolute"
                }`}
                style={!visible ? { position: "absolute", width: 0, height: 0, overflow: "hidden" } : {}}
              >
                {/* 3:2 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
                  <img
                    src={getThumbnail(project)}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />

                  {/* Title overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <h3 className="font-display text-sm md:text-base font-semibold tracking-tight text-foreground drop-shadow-lg">
                      {project.title}
                    </h3>
                    <span className="font-body text-[10px] uppercase tracking-[0.12em] text-foreground/50">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
