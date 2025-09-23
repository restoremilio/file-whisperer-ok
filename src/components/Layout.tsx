import { Button } from "@/components/ui/button";
import { X, MessageSquare, Send, Home, BarChart3, BookOpen, BrainCircuit, Copy, Play, Bell } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const navigation = [{
    name: "Dashboard",
    href: "/",
    icon: Home
  }, {
    name: "Bot Builder",
    href: "/bot-builder",
    icon: BrainCircuit
  }, {
    name: "D Trader",
    href: "/d-trader",
    icon: BarChart3
  }, {
    name: "Tutorials",
    href: "/tutorials",
    icon: BookOpen
  }, {
    name: "Analysis Tool",
    href: "/analysis-tool",
    icon: BarChart3
  }, {
    name: "DP Tool",
    href: "/dp-tool",
    icon: BarChart3
  }, {
    name: "Strategies",
    href: "/strategies",
    icon: BookOpen
  }, {
    name: "Analysis",
    href: "/analysis",
    icon: BarChart3
  }, {
    name: "Free Bots",
    href: "/free-bots",
    icon: BrainCircuit
  }, {
    name: "AI",
    href: "/ai",
    icon: BrainCircuit
  }, {
    name: "Copy Trading",
    href: "/copy-trading",
    icon: Copy
  }];
  const activeTab = navigation.find(nav => nav.href === location.pathname)?.name || "Dashboard";
  return <div className="min-h-screen bg-background">
      {/* Alert Banner */}
      <div className="bg-destructive text-destructive-foreground px-4 py-2 text-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>🔥</span>
          <span>Connect with a network of dedicated traders 📈 and exchange powerful ideas to sharpen your strategy.</span>
        </div>
        <Button variant="ghost" size="sm" className="h-auto p-1 text-destructive-foreground hover:bg-destructive/80">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success rounded flex items-center justify-center">
                <span className="text-success-foreground font-bold text-sm">$</span>
              </div>
              <span className="text-xl font-bold text-foreground">DollarPrim
            </span>
            </div>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="text-success">
                <Home className="h-4 w-4 mr-1" />
                Trader's Hub
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Send className="h-4 w-4 mr-1" />
                Telegram
              </Button>
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                deposit/withdraw
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Log in</Button>
            <Button variant="default" size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-trading-bg border-b border-trading-border px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {navigation.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href}>
                  <Button variant="ghost" size="sm" className={`px-4 py-2 rounded-none border-b-2 transition-colors ${isActive ? "border-trading-orange text-trading-orange bg-trading-card" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-trading-card/50"}`}>
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>;
          })}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
            <div className="text-sm text-muted-foreground">Bot is not running</div>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4 mr-1" />
              Announcements
              <span className="ml-1 bg-destructive text-destructive-foreground rounded-full w-2 h-2"></span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>;
};
export default Layout;