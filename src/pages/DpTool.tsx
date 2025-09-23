import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { useState, useEffect } from "react";

const DpTool = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const eat = new Date(date.getTime() + (3 * 60 * 60 * 1000)); // EAT = GMT+3
    const gmt = date;
    
    return {
      eat: eat.toTimeString().slice(0, 8),
      gmt: gmt.toTimeString().slice(0, 8)
    };
  };

  const times = formatTime(currentTime);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Social Icons */}
      <div className="bg-background border-b border-trading-border px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-success" />
            <span className="text-trading-red font-semibold">Analysis Tool</span>
          </div>
          <Button variant="ghost" size="sm">
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Send className="w-6 h-6 text-trading-blue" />
          </div>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto space-y-8">
        {/* Latest Tick Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-success mb-2">Latest Tick:</h2>
          <h3 className="text-xl font-semibold text-success mb-8">Digits:</h3>
        </div>

        {/* Matches and Differs Section */}
        <div>
          <h3 className="text-2xl font-bold text-trading-orange text-center mb-6">
            Matches and Differs
          </h3>
          
          <Card className="bg-trading-bg border-trading-orange p-0 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-trading-orange">
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Matches</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">My Prediction</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">--</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Differs</td>
                  <td className="p-4 text-foreground">My Prediction</td>
                  <td className="p-4 text-foreground">--</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              className="bg-trading-orange hover:bg-trading-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Start Predictions
            </Button>
            <Button 
              className="bg-trading-red hover:bg-trading-red/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Stop Predictions
            </Button>
          </div>
        </div>

        {/* Even and Odd Section */}
        <div>
          <h3 className="text-2xl font-bold text-trading-orange text-center mb-6">
            Even and Odd
          </h3>

          <Card className="bg-trading-bg border-trading-orange p-0 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-trading-orange">
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Even</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Percentage</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">--</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Odd</td>
                  <td className="p-4 text-foreground">Percentage</td>
                  <td className="p-4 text-foreground">--</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              className="bg-trading-red hover:bg-trading-red/90 text-white px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Start Even/Odd Analysis
            </Button>
            <Button 
              className="bg-trading-red hover:bg-trading-red/90 text-white px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Stop Even/Odd Analysis
            </Button>
          </div>
        </div>

        {/* Over and Under Section */}
        <div>
          <h3 className="text-2xl font-bold text-trading-orange text-center mb-6">
            Over and Under
          </h3>

          <Card className="bg-trading-bg border-trading-orange p-0 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-trading-orange">
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Over</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Percentage</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">--</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Under</td>
                  <td className="p-4 text-foreground">Percentage</td>
                  <td className="p-4 text-foreground">--</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              className="bg-trading-red hover:bg-trading-red/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Start Predictions
            </Button>
            <Button 
              className="bg-trading-red hover:bg-trading-red/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Stop Predictions
            </Button>
          </div>
        </div>

        {/* Digits Percentage Section */}
        <div>
          <h3 className="text-2xl font-bold text-trading-orange text-center mb-8">
            Digits Percentage
          </h3>
        </div>

        {/* Time Display */}
        <div className="text-center text-foreground text-lg font-mono">
          EAT: {times.eat} | GMT: {times.gmt}
        </div>
      </div>
    </div>
  );
};

export default DpTool;