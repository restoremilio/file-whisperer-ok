import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FreeBots = () => {
  const tradingBots = [
    {
      name: "1 2025 $Original 2025 Version $ (1)",
      description: "Trading strategy using the 1 2025 $Original 2025 Version $ (1) system",
      tags: ["⭐⭐⭐⭐⭐"],
      color: "bg-primary"
    },
    {
      name: "2 2025 Updated Expert Speed Bot Version 📊📊📊📊📊 (1) (1)",
      description: "Trading strategy using the 2 2025 Updated Expert Speed Bot Version 📊📊📊📊📊 (1) (1) system",
      tags: ["📊📊📊📊📊"],
      color: "bg-primary"
    },
    {
      name: "2025 Alpha Version 2025",
      description: "Trading strategy using the 2025 Alpha Version 2025 system",
      color: "bg-primary"
    },
    {
      name: "2025 BOT - 0008 - Over Under (1)",
      description: "Trading strategy using the 2025 BOT - 0008 - Over Under (1) system",
      color: "bg-primary"
    },
    {
      name: "2025 Binary Expert Version pro",
      description: "Trading strategy using the 2025 Binary Expert Version pro system",
      color: "bg-primary"
    },
    {
      name: "2025 No Martngale bot free",
      description: "Trading strategy using the 2025 No Martingale bot free system",
      color: "bg-primary"
    },
    {
      name: "2025 UPDATED DIGIT EVEN Version Bot 📊📊",
      description: "Trading strategy using the 2025 UPDATED DIGIT EVEN Version Bot 📊📊 system",
      tags: ["📊📊"],
      color: "bg-primary"
    },
    {
      name: "2025 Updated Binary V5 Expert pro",
      description: "Trading strategy using the 2025 Updated Binary V5 Expert pro system",
      color: "bg-primary"
    },
    {
      name: "2025📊📊Dp Printer Version1",
      description: "Trading strategy using the 2025📊📊Dp Printer Version1 system",
      tags: ["📊📊"],
      color: "bg-primary"
    },
    {
      name: "3 2025 Updated Version Of Candle Mine ⚙️",
      description: "Trading strategy using the 3 2025 Updated Version Of Candle Mine⚙️ system",
      tags: ["⚙️"],
      color: "bg-primary"
    },
    {
      name: "Alpha Ai Two Predictions",
      description: "Trading strategy using the Alpha Ai Two Predictions system",
      color: "bg-primary"
    },
    {
      name: "Dp Entry point Bot V1",
      description: "Trading strategy using the Dp Entry point Bot V1 system",
      color: "bg-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-trading-red mb-2">Trading Bots Library</h1>
        <p className="text-trading-blue mb-8">Click on a bot to load it in the Bot Builder</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tradingBots.map((bot, index) => (
            <Card key={index} className="bg-trading-card border-trading-border p-4 hover:bg-trading-card/80 transition-colors cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-trading-red font-semibold text-sm leading-tight">
                  {bot.name}
                </h3>
                
                <p className="text-trading-blue text-xs leading-relaxed">
                  {bot.description}
                </p>

                {bot.tags && (
                  <div className="flex flex-wrap gap-1">
                    {bot.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  Load Bot
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeBots;