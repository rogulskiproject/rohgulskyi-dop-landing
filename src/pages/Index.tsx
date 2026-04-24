import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import GenresSection from "@/components/GenresSection";
import NotesSection from "@/components/NotesSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkSection />
        <GenresSection />
        <NotesSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
