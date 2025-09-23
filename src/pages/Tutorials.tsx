import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Play } from "lucide-react";

const Tutorials = () => {
  const stepByStepGuides = [
    {
      title: "Get started on Deriv Bot",
      image: "/api/placeholder/280/200"
    },
    {
      title: "Let's build a bot!",
      image: "/api/placeholder/280/200"
    }
  ];

  const videoTutorials = [
    {
      title: "An introduction to Deriv Bot",
      description: "Learn the basics of automated trading with Deriv Bot",
      image: "/api/placeholder/280/160"
    },
    {
      title: "How to build a basic trading bot with Deriv Bot",
      description: "Step by step guide to creating your first bot",
      image: "/api/placeholder/280/160"
    },
    {
      title: "How to use Martingale strategy on Deriv Bot",
      description: "Advanced trading strategies explained",
      image: "/api/placeholder/280/160"
    },
    {
      title: "Introducing Accumulator Options on Deriv Bot: Available for automated trading",
      description: "New features and automated trading options",
      image: "/api/placeholder/280/160"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-trading-bg border-r border-trading-border p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-trading-card border-trading-border text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Button variant="secondary" className="w-full justify-start bg-trading-red text-white">
              Guide
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              FAQ
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Quick strategy guides
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-trading-red mb-6">Step-by-step guides</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stepByStepGuides.map((guide, index) => (
              <Card key={index} className="bg-trading-card border-trading-border overflow-hidden hover:bg-trading-card/80 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="w-16 h-16 bg-trading-bg rounded-lg flex items-center justify-center">
                    <Play className="w-8 h-8 text-trading-cyan" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-trading-red">{guide.title}</h3>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-trading-red mb-6">Videos on Deriv Bot</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTutorials.map((video, index) => (
              <Card key={index} className="bg-trading-card border-trading-border overflow-hidden hover:bg-trading-card/80 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-trading-bg to-trading-card"></div>
                  <div className="relative z-10">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
                    deriv
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-trading-red text-sm mb-2 leading-tight">
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;