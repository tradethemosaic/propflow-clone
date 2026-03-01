import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosaic - Track Every Prop Firm",
  description: "Track Every Prop Firm. One Unified Dashboard.",
};

const propFirms = [
  "ALPHA FUTURES", "APEX TRADER FUNDING", "BLUSKY", "BULENOX",
  "ELITE TRADER FUNDING", "FAST TRACK TRADING", "FUNDED FUTURES FAMILY",
  "FUNDED FUTURES NETWORK", "FUNDEDNEXT", "FUNDINGTICKS",
  "LEGENDS TRADING", "LUCID TRADING", "MY FUNDED FUTURES", "PHIDIAS",
  "PROPSHOPTRADER", "PURDIA", "TAKE PROFIT TRADER", "TENACITY TRADING",
  "THE FUTURES DESK", "TICK TICK TRADER", "TOP ONE FUTURES", "TOPSTEP", "TRADEIFY"
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#0b0d14' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: '#0b0d14', borderBottom: '1px solid #1a1d2e' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Mosaic" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#platform" className="text-white/80 hover:text-white transition text-sm font-medium">Platform</a>
            <a href="#meet" className="text-white/80 hover:text-white transition text-sm font-medium">About</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition text-sm font-medium">Pricing</a>
            <button className="px-5 py-2.5 rounded-lg text-sm font-semibold text-black hover:opacity-90 transition" style={{ background: '#00f5c4' }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero with Chart */}
      <section className="pt-32 pb-20 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Track Every Prop Firm.<br />
                One Unified Dashboard.
              </h1>
              <p className="text-xl mb-8" style={{ color: '#00f5c4' }}>
                One unified dashboard.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-8 py-3.5 rounded-lg text-base font-semibold text-black hover:opacity-90 transition" style={{ background: '#00f5c4' }}>
                  Start Free Trial
                </button>
                <button className="px-8 py-3.5 rounded-lg text-base font-semibold text-white hover:bg-white/10 transition" style={{ border: '1px solid #2a2f45' }}>
                  View Demo
                </button>
              </div>
            </div>
            
            {/* Right - Chart Graphic */}
            <div className="relative">
              <div className="p-6 rounded-2xl" style={{ background: '#111320' }}>
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }}></div>
                  </div>
                  <span className="text-white/60 text-sm">Account Overview</span>
                </div>
                
                {/* Chart Area */}
                <div className="space-y-4">
                  {/* Stat Row 1 */}
                  <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: '#0b0d14' }}>
                    <div>
                      <div className="text-white/60 text-sm">Total P&L</div>
                      <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>+$12,450</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-sm">This Month</div>
                      <div className="text-white font-medium">+8.2%</div>
                    </div>
                  </div>
                  
                  {/* Stat Row 2 */}
                  <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: '#0b0d14' }}>
                    <div>
                      <div className="text-white/60 text-sm">Win Rate</div>
                      <div className="text-2xl font-bold text-white">73%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-sm">Trades</div>
                      <div className="text-white font-medium">48</div>
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="p-4 rounded-xl" style={{ background: '#0b0d14' }}>
                    <div className="text-white/60 text-sm mb-3">Performance</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 rounded-sm"
                          style={{ 
                            height: `${h}%`, 
                            background: i > 8 ? '#00f5c4' : '#22c55e',
                            opacity: 0.8
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Prop Firms Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 rounded-lg text-center" style={{ background: '#0b0d14' }}>
                      <div className="text-white/60 text-xs">Topstep</div>
                      <div className="text-white font-semibold" style={{ color: '#00f5c4' }}>+$2,100</div>
                    </div>
                    <div className="p-3 rounded-lg text-center" style={{ background: '#0b0d14' }}>
                      <div className="text-white/60 text-xs">Apex</div>
                      <div className="text-white font-semibold" style={{ color: '#22c55e' }}>+$4,350</div>
                    </div>
                    <div className="p-3 rounded-lg text-center" style={{ background: '#0b0d14' }}>
                      <div className="text-white/60 text-xs">TPT</div>
                      <div className="text-white font-semibold" style={{ color: '#22c55e' }}>+$6,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - Carousel */}
      <section id="platform" className="py-16 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-white/50 text-sm font-medium">01.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Platform</h2>
          </div>
          
          {/* Horizontal Carousel */}
          <div className="relative">
            <div 
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Duplicate firms for seamless infinite scroll effect */}
              {[...propFirms, ...propFirms, ...propFirms].map((firm, idx) => (
                <div 
                  key={`${firm}-${idx}`}
                  className="flex-shrink-0 px-6 py-4 rounded-xl flex items-center gap-3"
                  style={{ 
                    background: '#111320',
                    minWidth: '220px'
                  }}
                >
                  <span className="text-white font-medium whitespace-nowrap">{firm}</span>
                  <span style={{ color: '#00f5c4' }}>✓</span>
                </div>
              ))}
            </div>
            
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none" style={{ background: 'linear-gradient(to right, #0f121c, transparent)' }}></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none" style={{ background: 'linear-gradient(to left, #0f121c, transparent)' }}></div>
          </div>
        </div>
      </section>

      {/* Meet Mosaic Section */}
      <section id="meet" className="py-20 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-white/50 text-sm font-medium">02.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Meet Mosaic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Analytics Live */}
            <div className="p-6 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-semibold">Analytics Live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium" style={{ color: '#00f5c4' }}>Live</span>
                <span style={{ color: '#00f5c4' }}>●</span>
              </div>
            </div>
            {/* Live */}
            <div className="p-6 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-semibold">Live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium" style={{ color: '#00f5c4' }}>Live</span>
                <span style={{ color: '#00f5c4' }}>●</span>
              </div>
            </div>
            {/* Plaid */}
            <div className="p-6 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white font-semibold">Plaid</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium" style={{ color: '#00f5c4' }}>Live</span>
                <span style={{ color: '#00f5c4' }}>●</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-white/50 text-sm font-medium">03.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="p-8 rounded-xl" style={{ background: '#111320' }}>
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="text-white/70 space-y-3 mb-8">
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
              <button className="w-full py-3 rounded-lg font-medium text-white hover:bg-white/10 transition" style={{ border: '1px solid #2a2f45' }}>
                Get Started
              </button>
            </div>
            {/* Pro */}
            <div className="p-8 rounded-xl" style={{ background: '#111320', border: '1px solid #00f5c4' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">Pro</h3>
                <span className="px-2 py-1 rounded text-xs font-medium text-black" style={{ background: '#00f5c4' }}>POPULAR</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: '#00f5c4' }}>$19</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="text-white/70 space-y-3 mb-8">
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
              <button className="w-full py-3 rounded-lg font-medium text-black hover:opacity-90 transition" style={{ background: '#00f5c4' }}>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ background: '#0b0d14', borderTop: '1px solid #1a1d2e' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-white/50 text-sm">
            © 2026 Mosaic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
