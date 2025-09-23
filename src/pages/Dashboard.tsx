import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, HardDrive, Puzzle, Zap } from "lucide-react";

const Dashboard = () => {
  const botOptions = [
    {
      icon: Monitor,
      title: "My computer",
      description: "Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy."
    },
    {
      icon: HardDrive,
      title: "Google Drive",
      description: "Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy."
    },
    {
      icon: Puzzle,
      title: "Bot builder",
      description: "Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy."
    },
    {
      icon: Zap,
      title: "Quick strategy",
      description: "Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-trading-red mb-4">
          Load or build your bot
        </h1>
        
        <p className="text-lg text-trading-red mb-12">
          Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {botOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="bg-trading-card border-trading-border p-6 hover:bg-trading-card/80 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-trading-bg rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-trading-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-trading-red">
                    {option.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-end mt-8">
          <div className="w-2 h-2 bg-trading-red rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;