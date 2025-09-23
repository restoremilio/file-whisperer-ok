import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, RotateCcw, Save, Play, Pause, SkipForward, SkipBack, ZoomIn, ZoomOut } from "lucide-react";

const BotBuilder = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-trading-bg border-r border-trading-border p-4 space-y-4">
          <div className="bg-primary text-primary-foreground px-3 py-2 rounded text-center font-semibold">
            Quick strategy
          </div>
          
          <div className="bg-trading-blue text-white px-3 py-2 rounded text-center">
            Blocks menu
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 bg-trading-card border-trading-border text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Trade parameters
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Purchase conditions
            </Button>
            <Button variant="ghost" className="w-full justify-start text-foreground">
              Sell conditions (optional)
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Restart trading conditions
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Analysis ▽
            </Button>
            <Button variant="ghost" className="w-full justify-start text-trading-blue">
              Utility ▽
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Top Toolbar */}
          <div className="bg-trading-card border-b border-trading-border p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm"><RotateCcw className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Save className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Play className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Pause className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><SkipBack className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><SkipForward className="h-4 w-4" /></Button>
              <div className="h-4 w-px bg-border mx-2" />
              <Button variant="ghost" size="sm"><ZoomIn className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><ZoomOut className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Trade Parameters */}
            <Card className="bg-trading-card border-trading-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-success rounded flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <h3 className="font-semibold text-foreground">START DEMO TO REAL COPY TRADING</h3>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground">Market:</label>
                  <Select>
                    <SelectTrigger className="bg-trading-bg border-trading-border">
                      <SelectValue placeholder="Derived" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="derived">Derived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Continuous Indices:</label>
                  <Select>
                    <SelectTrigger className="bg-trading-bg border-trading-border">
                      <SelectValue />
                    </SelectTrigger>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Volatility 10 (1s) Index:</label>
                  <Select>
                    <SelectTrigger className="bg-trading-bg border-trading-border">
                      <SelectValue />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground">Trade Type:</label>
                  <Select>
                    <SelectTrigger className="bg-trading-bg border-trading-border">
                      <SelectValue placeholder="Up/Down" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Rise/Fall:</label>
                  <Select>
                    <SelectTrigger className="bg-trading-bg border-trading-border">
                      <SelectValue />
                    </SelectTrigger>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Contract Type:</label>
                <Select>
                  <SelectTrigger className="bg-trading-bg border-trading-border">
                    <SelectValue placeholder="Both" />
                  </SelectTrigger>
                </Select>
              </div>

              <div className="mb-4">
                <label className="text-sm text-muted-foreground">Default Candle Interval:</label>
                <Select>
                  <SelectTrigger className="bg-trading-bg border-trading-border">
                    <SelectValue placeholder="1 minute" />
                  </SelectTrigger>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Restart buy/sell on error (disable for better performance):</div>
                <div className="text-sm text-muted-foreground">Restart last trade on error (bot ignores the unsuccessful trade): ✓</div>
              </div>

              <div className="mt-4">
                <div className="bg-trading-bg p-3 rounded">
                  <div className="text-sm font-semibold mb-2">Run once at start:</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-trading-bg p-3 rounded">
                  <div className="text-sm font-semibold mb-2">Trade options:</div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <span>Duration: Ticks</span>
                    <span>1</span>
                    <span>Stake: AUD</span>
                    <span>0.6</span>
                    <span>(min: 0.6 - max: 75000)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Purchase Conditions */}
            <Card className="bg-trading-card border-trading-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-trading-cyan rounded flex items-center justify-center text-black">
                  <span className="text-xs font-bold">2</span>
                </div>
                <h3 className="font-semibold text-foreground">Purchase conditions</h3>
              </div>
              
              <div className="bg-trading-bg p-3 rounded">
                <Select>
                  <SelectTrigger className="bg-trading-card border-trading-border">
                    <SelectValue placeholder="Purchase: Rise" />
                  </SelectTrigger>
                </Select>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-trading-bg border-l border-trading-border">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-foreground">Summary</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-trading-blue border-trading-blue">Transactions</Badge>
                <Badge variant="outline" className="text-foreground">Journal</Badge>
              </div>
            </div>

            <Card className="bg-trading-card border-trading-border p-4 mb-4">
              <p className="text-center text-muted-foreground mb-2">
                When you're ready to trade, hit <span className="font-semibold text-trading-blue">Run</span>.
              </p>
              <p className="text-center text-muted-foreground text-sm">
                You'll be able to track your bot's performance here.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Total stake</div>
                <div className="text-foreground">0.00 AUD</div>
              </div>
              <div>
                <div className="text-muted-foreground">Total payout</div>
                <div className="text-foreground">0.00 AUD</div>
              </div>
              <div>
                <div className="text-muted-foreground">Contracts lost</div>
                <div className="text-foreground">0</div>
              </div>
              <div>
                <div className="text-muted-foreground">Contracts won</div>
                <div className="text-foreground">0</div>
              </div>
              <div>
                <div className="text-muted-foreground">No. of runs</div>
                <div className="text-foreground">0</div>
              </div>
              <div>
                <div className="text-muted-foreground">Total profit/loss</div>
                <div className="text-foreground">0.00 AUD</div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotBuilder;