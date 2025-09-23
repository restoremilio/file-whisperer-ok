import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import BotBuilder from "@/pages/BotBuilder";
import DpTool from "@/pages/DpTool";
import Tutorials from "@/pages/Tutorials";
import FreeBots from "@/pages/FreeBots";
import Analysis from "@/pages/Analysis";
import Strategies from "@/pages/Strategies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bot-builder" element={<BotBuilder />} />
            <Route path="/dp-tool" element={<DpTool />} />
            <Route path="/d-trader" element={<Dashboard />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/analysis-tool" element={<DpTool />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/free-bots" element={<FreeBots />} />
            <Route path="/ai" element={<Dashboard />} />
            <Route path="/copy-trading" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;