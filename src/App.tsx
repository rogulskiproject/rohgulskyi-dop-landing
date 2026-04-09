import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import YaroslavaMohushih from "./pages/YaroslavaMohushih.tsx";
import Orserio from "./pages/Orserio.tsx";
import ValentinDay from "./pages/ValentinDay.tsx";
import AnotherMagazine from "./pages/AnotherMagazine.tsx";
import HozierFrancesca from "./pages/HozierFrancesca.tsx";
import SelectedWorks from "./pages/SelectedWorks.tsx";
import PumaFit23 from "./pages/PumaFit23.tsx";
import PumaCR from "./pages/PumaCR.tsx";
import ChernayaRamiKallas from "./pages/ChernayaRamiKallas.tsx";
import BoF500 from "./pages/BoF500.tsx";
import AlessandroMicheleBof from "./pages/AlessandroMicheleBof.tsx";
import TvorchiVichNaVich from "./pages/TvorchiVichNaVich.tsx";
import UnchartedSailGP from "./pages/UnchartedSailGP.tsx";
import KotexArtsMissingPeriod from "./pages/KotexArtsMissingPeriod.tsx";
import MooveFire from "./pages/MooveFire.tsx";
import VogueMexico from "./pages/VogueMexico.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<SelectedWorks />} />
          <Route path="/work/dylan-bachelet" element={<ProjectDetail />} />
          <Route path="/work/yaroslava-mohushih" element={<YaroslavaMohushih />} />
          <Route path="/work/orserio" element={<Orserio />} />
          <Route path="/work/valentin-day" element={<ValentinDay />} />
          <Route path="/work/another-magazine" element={<AnotherMagazine />} />
          <Route path="/work/hozier-francesca" element={<HozierFrancesca />} />
          <Route path="/work/puma-fit-23" element={<PumaFit23 />} />
          <Route path="/work/puma-cr" element={<PumaCR />} />
          <Route path="/work/chernaya-rami-kallas" element={<ChernayaRamiKallas />} />
          <Route path="/work/bof-500-2023" element={<BoF500 />} />
          <Route path="/work/alessandro-michele-bof" element={<AlessandroMicheleBof />} />
          <Route path="/work/tvorchi-vich-na-vich" element={<TvorchiVichNaVich />} />
          <Route path="/work/uncharted-sail-gp" element={<UnchartedSailGP />} />
          <Route path="/work/moove-fire" element={<MooveFire />} />
          <Route path="/work/vogue-mexico" element={<VogueMexico />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
