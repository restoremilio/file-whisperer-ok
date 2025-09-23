import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-trading-bg border-r border-trading-border p-4 space-y-4">
          <h2 className="text-xl font-bold text-foreground mb-4">ANALYSIS</h2>
          <p className="text-sm text-muted-foreground mb-6">Trading Pattern Recognition</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-trading-blue rounded-full"></div>
                <span className="text-foreground font-medium">Volatility Index</span>
              </div>
              <Select>
                <SelectTrigger className="bg-trading-card border-trading-border">
                  <SelectValue placeholder="VOLATILITY INDEX 10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vol10">VOLATILITY INDEX 10</SelectItem>
                  <SelectItem value="vol25">VOLATILITY INDEX 25</SelectItem>
                  <SelectItem value="vol50">VOLATILITY INDEX 50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-trading-blue rounded-full"></div>
                <span className="text-foreground font-medium">Number of Digits</span>
              </div>
              <Input 
                value="60" 
                className="bg-trading-card border-trading-border text-foreground"
                readOnly
              />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Button className="w-full bg-trading-cyan hover:bg-trading-cyan/90 text-black font-semibold">
              Even/odd
            </Button>
            <Button className="w-full bg-trading-cyan hover:bg-trading-cyan/90 text-black font-semibold">
              Over/under
            </Button>
            <Button className="w-full bg-trading-cyan hover:bg-trading-cyan/90 text-black font-semibold">
              Match/differ
            </Button>
            <Button className="w-full bg-trading-cyan hover:bg-trading-cyan/90 text-black font-semibold">
              Rise/fall
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2">
            <Button className="bg-trading-blue hover:bg-trading-blue/90 text-white">
              Even: 50.00%
            </Button>
            <Button className="bg-trading-red hover:bg-trading-red/90 text-white">
              Odd: 50.00%
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="text-center mb-8">
            <div className="text-sm text-muted-foreground mb-2">CURRENT PRICE</div>
            <div className="text-4xl font-bold text-foreground mb-4">
              Latest Price: 5853.629
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-trading-blue rounded-full"></div>
              <span className="text-lg text-foreground">Digits</span>
            </div>

            <div className="flex justify-center gap-1 mb-8">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, index) => (
                <div
                  key={digit}
                  className={`w-3 h-3 rounded-full ${
                    [0, 2, 4, 6, 8].includes(digit) ? 'bg-success' : 'bg-trading-red'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-trading-blue rounded-full"></div>
              <span className="text-lg text-foreground">Digit Distribution</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-trading-card border-trading-border p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Percentage</span>
                    <span className="text-success font-bold">50.00%</span>
                  </div>
                  <div className="w-full bg-trading-bg rounded-full h-8">
                    <div className="bg-success h-8 rounded-full flex items-center justify-center text-white font-bold" style={{width: '50%'}}>
                      50.00%
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">Even</div>
                </div>
              </Card>

              <Card className="bg-trading-card border-trading-border p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Percentage</span>
                    <span className="text-success font-bold">50.00%</span>
                  </div>
                  <div className="w-full bg-trading-bg rounded-full h-8">
                    <div className="bg-red-400 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{width: '50%'}}>
                      50.00%
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">Odd</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;