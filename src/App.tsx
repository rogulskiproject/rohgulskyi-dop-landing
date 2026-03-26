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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/dylan-bachelet" element={<ProjectDetail />} />
          <Route path="/work/yaroslava-mohushih" element={<YaroslavaMohushih />} />
          <Route path="/work/orserio" element={<Orserio />} />
          <Route path="/work/valentin-day" element={<ValentinDay />} />
          <Route path="/work/another-magazine" element={<AnotherMagazine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
