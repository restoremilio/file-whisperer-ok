import { Card } from "@/components/ui/card";

const Strategies = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-muted border-r border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Strategies Library</h2>
          <p className="text-sm text-muted-foreground mb-6">Select a document to view</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded hover:bg-muted-foreground/10 cursor-pointer">
              <div className="w-4 h-4 bg-muted-foreground rounded-sm"></div>
              <span className="text-sm text-foreground">DOLLARPRINTER TRADERS GUIDE</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <Card className="bg-card border-border p-12 text-center max-w-md">
            <p className="text-muted-foreground">Select a PDF from the left panel</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Strategies;