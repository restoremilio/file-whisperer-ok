import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTrading } from '@/contexts/TradingContext';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Play, 
  Pause, 
  RotateCcw 
} from "lucide-react";

const DpTool = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(false);
  const [isPredictionRunning, setIsPredictionRunning] = useState(false);
  const { 
    isConnected, 
    isAuthorized, 
    currentPrice, 
    tickData, 
    digitAnalysis 
  } = useTrading();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const eatTime = new Date(date.getTime() + (3 * 60 * 60 * 1000)); // GMT+3
    const gmtTime = date;
    
    return {
      eat: eatTime.toLocaleTimeString('en-US', { hour12: true }),
      gmt: gmtTime.toLocaleTimeString('en-US', { hour12: true, timeZone: 'GMT' })
    };
  };

  const { eat, gmt } = formatTime(currentTime);
  const lastDigit = tickData ? Math.floor(tickData.quote * 10000) % 10 : 0;

  const handleStartAnalysis = () => {
    setIsAnalysisRunning(!isAnalysisRunning);
  };

  const handleStartPrediction = () => {
    setIsPredictionRunning(!isPredictionRunning);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">DP TOOL</h1>
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-muted-foreground">
              {isConnected ? (isAuthorized ? 'Connected & Authorized' : 'Connected') : 'Disconnected'}
            </span>
          </div>
        </div>
        
        <div className="w-20"></div>
      </div>

      {/* Latest Tick */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Latest Tick</h2>
        <Card className="bg-card border-border p-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {currentPrice ? currentPrice.toFixed(5) : '0.00000'}
            </div>
            <div className="text-lg text-muted-foreground">
              Last digit: <span className="text-primary font-bold">{lastDigit}</span>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Symbol: Volatility 10 Index
            </div>
          </div>
        </Card>
      </div>

      <div className="p-4 max-w-4xl mx-auto space-y-8">
        {/* Matches and Differs Section */}
        <div>
          <h3 className="text-2xl font-bold text-trading-orange text-center mb-6">
            Matches and Differs
          </h3>
          
          <Card className="bg-trading-bg border-trading-orange p-0 overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-trading-orange">
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Type</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Count</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Matches</td>
                  <td className="p-4 text-foreground">{digitAnalysis.matches}</td>
                  <td className="p-4 text-foreground">
                    {digitAnalysis.matches + digitAnalysis.differs > 0 
                      ? Math.round((digitAnalysis.matches / (digitAnalysis.matches + digitAnalysis.differs)) * 100)
                      : 0}%
                  </td>
                </tr>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Differs</td>
                  <td className="p-4 text-foreground">{digitAnalysis.differs}</td>
                  <td className="p-4 text-foreground">
                    {digitAnalysis.matches + digitAnalysis.differs > 0 
                      ? Math.round((digitAnalysis.differs / (digitAnalysis.matches + digitAnalysis.differs)) * 100)
                      : 0}%
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              onClick={handleStartPrediction}
              className={`px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 ${
                isPredictionRunning 
                  ? 'bg-trading-red hover:bg-trading-red/90 text-white'
                  : 'bg-trading-orange hover:bg-trading-orange/90 text-white'
              }`}
            >
              {isPredictionRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPredictionRunning ? 'Stop' : 'Start'} Predictions
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
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
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Type</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Percentage</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Prediction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Even</td>
                  <td className="p-4 text-foreground">{digitAnalysis.even}%</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      digitAnalysis.even > digitAnalysis.odd 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {digitAnalysis.even > digitAnalysis.odd ? 'Likely' : 'Less Likely'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-foreground">Odd</td>
                  <td className="p-4 text-foreground">{digitAnalysis.odd}%</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      digitAnalysis.odd > digitAnalysis.even 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {digitAnalysis.odd > digitAnalysis.even ? 'Likely' : 'Less Likely'}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              onClick={handleStartAnalysis}
              className={`px-6 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 ${
                isAnalysisRunning 
                  ? 'bg-trading-red hover:bg-trading-red/90 text-white'
                  : 'bg-trading-red hover:bg-trading-red/90 text-white'
              }`}
            >
              {isAnalysisRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAnalysisRunning ? 'Stop' : 'Start'} Even/Odd Analysis
            </Button>
            <Button 
              variant="outline"
              className="px-6 py-3 text-lg font-semibold rounded-lg flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
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
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Type</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Percentage</th>
                  <th className="p-4 text-left text-foreground font-semibold bg-trading-card">Prediction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-trading-orange">
                  <td className="p-4 text-foreground">Over (5-9)</td>
                  <td className="p-4 text-foreground">{digitAnalysis.over}%</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      digitAnalysis.over > digitAnalysis.under 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {digitAnalysis.over > digitAnalysis.under ? 'Likely' : 'Less Likely'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-foreground">Under (0-4)</td>
                  <td className="p-4 text-foreground">{digitAnalysis.under}%</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      digitAnalysis.under > digitAnalysis.over 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {digitAnalysis.under > digitAnalysis.over ? 'Likely' : 'Less Likely'}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

          <div className="flex gap-4 justify-center mb-8">
            <Button 
              onClick={handleStartAnalysis}
              className={`px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 ${
                isAnalysisRunning 
                  ? 'bg-trading-red hover:bg-trading-red/90 text-white'
                  : 'bg-trading-red hover:bg-trading-red/90 text-white'
              }`}
            >
              {isAnalysisRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAnalysisRunning ? 'Stop' : 'Start'} Predictions
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Time Display */}
        <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">EAT Time</div>
            <div className="text-lg font-bold text-foreground">{eat}</div>
            <div className="text-sm text-muted-foreground mt-1">GMT Time</div>
            <div className="text-sm text-foreground">{gmt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DpTool;