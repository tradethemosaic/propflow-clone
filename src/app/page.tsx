import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosaic - Track Every Prop Firm",
  description: "Track Every Prop Firm. One Unified Dashboard.",
};

// Prop firms with brand colors
const propFirms = [
  { name: "Topstep", color: "#22c55e" },
  { name: "Apex Trader Funding", color: "#f59e0b" },
  { name: "Take Profit Trader", color: "#3b82f6" },
  { name: "FundedNext", color: "#8b5cf6" },
  { name: "BluSky", color: "#06b6d4" },
  { name: "Bulenox", color: "#ef4444" },
  { name: "Elite Trader Funding", color: "#10b981" },
  { name: "Funded Futures Family", color: "#f97316" },
  { name: "Funded Futures Network", color: "#ec4899" },
  { name: "Legends Trading", color: "#6366f1" },
  { name: "Lucid Trading", color: "#14b8a6" },
  { name: "My Funded Futures", color: "#a855f7" },
  { name: "Phidias", color: "#0ea5e9" },
  { name: "PropShopTrader", color: "#84cc16" },
  { name: "Purda", color: "#f43f5e" },
  { name: "Tenacity Trading", color: "#eab308" },
  { name: "The Futures Desk", color: "#22d3ee" },
  { name: "TickTick Trader", color: "#818cf8" },
  { name: "Top One Futures", color: "#34d399" },
  { name: "Tradeify", color: "#fb7185" },
  { name: "Alpha Futures", color: "#fbbf24" },
  { name: "Fast Track Trading", color: "#c084fc" },
  { name: "FundingTicks", color: "#f472b6" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#0b0d14' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: '#0b0d14', borderBottom: '1px solid #1a1d2e' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-lg tracking-tight">Mosaic</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-white/70 hover:text-white transition text-sm font-medium">Platform</a>
            <a href="#meet" className="text-white/70 hover:text-white transition text-sm font-medium">About</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition text-sm font-medium">Pricing</a>
            <button className="px-5 py-2 rounded-lg text-sm font-semibold text-black hover:opacity-90 transition" style={{ background: '#00f5c4' }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Phone on Left, Text on Right */}
      <section className="pt-24 pb-16 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Phone Mockup */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Phone Frame */}
                <div 
                  className="rounded-[40px] p-3"
                  style={{ 
                    background: '#1a1d2e',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div 
                    className="rounded-[32px] overflow-hidden"
                    style={{ 
                      background: '#111320',
                      width: '280px',
                      height: '560px'
                    }}
                  >
                    {/* App Header */}
                    <div className="p-4 pt-8" style={{ borderBottom: '1px solid #1a1d2e' }}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#00f5c420' }}>
                          <span className="text-xs font-bold" style={{ color: '#00f5c4' }}>M</span>
                        </div>
                        <span className="text-white/60 text-xs">Account</span>
                      </div>
                      <div className="text-white/40 text-xs">Total P&L</div>
                      <div className="text-2xl font-bold text-white">$12,450</div>
                    </div>
                    
                    {/* Account Cards */}
                    <div className="p-3 space-y-2">
                      <div className="p-3 rounded-xl" style={{ background: '#0b0d14' }}>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Topstep</span>
                          <span className="text-green-400 text-sm font-medium">+$2,100</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl" style={{ background: '#0b0d14' }}>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Apex</span>
                          <span className="text-green-400 text-sm font-medium">+$4,350</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl" style={{ background: '#0b0d14' }}>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Take Profit</span>
                          <span className="text-green-400 text-sm font-medium">+$6,000</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini Chart */}
                    <div className="px-3 pb-3">
                      <div className="p-3 rounded-xl" style={{ background: '#0b0d14' }}>
                        <div className="flex items-end gap-1 h-16">
                          {[30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                            <div 
                              key={i} 
                              className="flex-1 rounded-sm"
                              style={{ 
                                height: `${h}%`, 
                                background: i > 7 ? '#00f5c4' : '#22c55e',
                                opacity: 0.9
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-around" style={{ background: '#0b0d14', borderTop: '1px solid #1a1d2e' }}>
                      <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#00f5c420' }}>
                        <span style={{ color: '#00f5c4' }}>◆</span>
                      </div>
                      <div className="w-6 h-6 rounded flex items-center justify-center text-white/30">□</div>
                      <div className="w-6 h-6 rounded flex items-center justify-center text-white/30">○</div>
                      <div className="w-6 h-6 rounded flex items-center justify-center text-white/30">☺</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Text */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Track Every <span style={{ color: '#00f5c4' }}>Prop Firm</span>.<br />
                One Unified Dashboard.
              </h1>
              <p className="text-lg mb-8 text-white/60 max-w-md mx-auto lg:mx-0">
                One unified dashboard.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3.5 rounded-lg text-base font-semibold text-black hover:opacity-90 transition w-full sm:w-auto" style={{ background: '#00f5c4' }}>
                  Start Free Trial
                </button>
                <button className="px-8 py-3.5 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition w-full sm:w-auto" style={{ border: '1px solid #2a2f45' }}>
                  View Demo
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Platform Section - Horizontal List */}
      <section id="platform" className="py-10 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-white/50 text-sm font-medium">01.</span>
              <h2 className="text-2xl font-bold text-white mt-1">Platform</h2>
            </div>
            <button className="text-sm text-white/60 hover:text-white transition flex items-center gap-2">
              View all →
            </button>
          </div>
          
          {/* Horizontal list of firms */}
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {propFirms.map((firm, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ 
                  background: '#111320',
                  minWidth: '200px'
                }}
              >
                {/* Logo circle */}
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs"
                  style={{ 
                    background: firm.color + '20',
                    color: firm.color
                  }}
                >
                  {firm.name.charAt(0)}
                </div>
                <span className="text-white text-sm whitespace-nowrap">{firm.name}</span>
                <span style={{ color: '#22c55e' }} className="text-sm ml-auto">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Mosaic Section */}
      <section id="meet" className="py-12 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-white/50 text-sm font-medium">02.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Meet Mosaic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Analytics Live */}
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Analytics Live</span>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#22c55e20', color: '#22c55e' }}>Live</span>
              </div>
            </div>
            {/* Live */}
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Live</span>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#22c55e20', color: '#22c55e' }}>Live</span>
              </div>
            </div>
            {/* Plaid */}
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Plaid</span>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#22c55e20', color: '#22c55e' }}>Live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-white/50 text-sm font-medium">03.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="p-6 rounded-xl" style={{ background: '#111320' }}>
              <h3 className="text-lg font-semibold text-white mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$0</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> 2 Prop Firms
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> Basic Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> Email Support
                </li>
              </ul>
              <button className="w-full py-2.5 rounded-lg font-medium text-white hover:bg-white/10 transition text-sm" style={{ border: '1px solid #2a2f45' }}>
                Get Started
              </button>
            </div>
            {/* Pro */}
            <div className="p-6 rounded-xl" style={{ background: '#111320', border: '1px solid #00f5c4' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <span className="px-2 py-1 rounded text-xs font-medium text-black" style={{ background: '#00f5c4' }}>POPULAR</span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold" style={{ color: '#00f5c4' }}>$19</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> Unlimited Firms
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> Advanced Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#00f5c4' }}>✓</span> API Access
                </li>
              </ul>
              <button className="w-full py-2.5 rounded-lg font-medium text-black hover:opacity-90 transition text-sm" style={{ background: '#00f5c4' }}>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6" style={{ background: '#0b0d14', borderTop: '1px solid #1a1d2e' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-white/50 text-sm">
            © 2026 Mosaic. All rights reserved.
          </div>
          {/* Watermark */}
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-sm">Powered by</span>
            <Image 
              src="/mosaic-watermark.png" 
              alt="Mosaic" 
              width={80} 
              height={24}
              className="h-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
