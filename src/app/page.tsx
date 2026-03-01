import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosaic - Track Every Prop Firm",
  description: "Track Every Prop Firm. One Unified Dashboard.",
};

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
          {/* Left - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button className="text-white p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Image 
                src="/mosaic-logo-nav.png" 
                alt="Mosaic" 
                width={32} 
                height={32}
                className="rounded"
              />
              <span className="text-white font-medium text-lg">Mosaic</span>
            </div>
          </div>
          
          {/* Right - Login */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/80 hover:text-white transition text-sm font-medium">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Fractal Background */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden" style={{ 
        background: '#0b0d14',
        backgroundImage: `
          radial-gradient(ellipse at 20% 80%, rgba(0, 245, 196, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.04) 0%, transparent 60%),
          linear-gradient(135deg, rgba(0, 245, 196, 0.02) 0%, transparent 50%),
          linear-gradient(45deg, rgba(139, 92, 246, 0.02) 0%, transparent 50%)
        `
      }}>
        {/* Fractal glass effect overlays */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(105deg, transparent 40%, rgba(0, 245, 196, 0.03) 40%, rgba(0, 245, 196, 0.03) 41%, transparent 41%),
            linear-gradient(165deg, transparent 60%, rgba(139, 92, 246, 0.03) 60%, rgba(139, 92, 246, 0.03) 61%, transparent 61%),
            linear-gradient(225deg, transparent 30%, rgba(6, 182, 212, 0.02) 30%, rgba(6, 182, 212, 0.02) 31%, transparent 31%),
            linear-gradient(285deg, transparent 70%, rgba(0, 245, 196, 0.02) 70%, rgba(0, 245, 196, 0.02) 71%, transparent 71%)
          `
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
            Track Every Prop Firm.<br />
            One Unified Dashboard.
          </h1>
          <p className="text-lg mb-10 text-white/60 max-w-lg mx-auto">
            One unified dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-lg text-base font-medium text-black hover:opacity-90 transition w-full sm:w-auto" style={{ background: '#00f5c4' }}>
              Get Started
            </button>
            <button className="px-8 py-3.5 rounded-lg text-base font-medium text-white hover:bg-white/10 transition w-full sm:w-auto" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Supported Firms - Auto-Scrolling */}
      <section className="py-8" style={{ background: '#0b0d14', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <h3 className="text-white/50 text-sm font-medium text-center">Supported Firms</h3>
        </div>
        <div className="relative w-full py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0b0d14, transparent)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0b0d14, transparent)' }}></div>
          <div className="carousel-track">
            {[...propFirms, ...propFirms, ...propFirms].map((firm, idx) => (
              <div key={`${firm.name}-${idx}`} className="carousel-item flex-shrink-0 mx-4">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full" style={{ background: '#1a1d2e', minWidth: 'auto' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: firm.color + '20', color: firm.color }}>
                    {firm.name.charAt(0)}
                  </div>
                  <span className="text-white text-sm whitespace-nowrap">{firm.name}</span>
                  <span style={{ color: '#22c55e' }}>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-10 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-white/50 text-sm font-medium">01.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Platform</h2>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ background: '#111320' }}>
            <Image 
              src="/hero-dashboard.png" 
              alt="Dashboard" 
              width={1600} 
              height={900}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Automate Your Trading Analytics */}
      <section className="py-12 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Automate your entire trading analytics</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#00f5c420' }}><span style={{ color: '#00f5c4' }}>📊</span></div>
                <div>
                  <div className="text-white font-semibold">Analytics</div>
                  <div className="text-white/50 text-xs">Real-time data</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Track all your prop firm accounts in one place with real-time analytics.</p>
            </div>
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#22c55e20' }}><span style={{ color: '#22c55e' }}>⚡</span></div>
                <div>
                  <div className="text-white font-semibold">Live Trading</div>
                  <div className="text-white/50 text-xs">Real-time sync</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Connect your accounts via Plaid for live data synchronization.</p>
            </div>
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#3b82f620' }}><span style={{ color: '#3b82f6' }}>🔌</span></div>
                <div>
                  <div className="text-white font-semibold">API</div>
                  <div className="text-white/50 text-xs">Developer access</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Build custom integrations with our powerful API.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Mosaic Section */}
      <section id="meet" className="py-12 px-6" style={{ background: '#0f121c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-white/50 text-sm font-medium">02.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Meet Mosaic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Analytics Live</span>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#22c55e20', color: '#22c55e' }}>Live</span>
              </div>
            </div>
            <div className="p-5 rounded-xl" style={{ background: '#111320' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Live</span>
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#22c55e20', color: '#22c55e' }}>Live</span>
              </div>
            </div>
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
      <section id="pricing" className="py-12 px-6" style={{ background: '#0b0d14' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-white/50 text-sm font-medium">03.</span>
            <h2 className="text-2xl font-bold text-white mt-1">Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl" style={{ background: '#111320' }}>
              <h3 className="text-lg font-semibold text-white mb-2">Free</h3>
              <div className="mb-4"><span className="text-3xl font-bold text-white">$0</span><span className="text-white/50">/mo</span></div>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> 2 Prop Firms</li>
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> Basic Analytics</li>
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> Email Support</li>
              </ul>
              <button className="w-full py-2.5 rounded-lg font-medium text-white hover:bg-white/10 transition text-sm" style={{ border: '1px solid #2a2f45' }}>Get Started</button>
            </div>
            <div className="p-6 rounded-xl" style={{ background: '#111320', border: '1px solid #00f5c4' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <span className="px-2 py-1 rounded text-xs font-medium text-black" style={{ background: '#00f5c4' }}>POPULAR</span>
              </div>
              <div className="mb-4"><span className="text-3xl font-bold" style={{ color: '#00f5c4' }}>$19</span><span className="text-white/50">/mo</span></div>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> Unlimited Firms</li>
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> Advanced Analytics</li>
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> Priority Support</li>
                <li className="flex items-center gap-2"><span style={{ color: '#00f5c4' }}>✓</span> API Access</li>
              </ul>
              <button className="w-full py-2.5 rounded-lg font-medium text-black hover:opacity-90 transition text-sm" style={{ background: '#00f5c4' }}>Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6" style={{ background: '#0f121c', borderTop: '1px solid #1a1d2e' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-white/50 text-sm">© 2026 Mosaic. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-sm">Powered by</span>
            <Image src="/mosaic-watermark.png" alt="Mosaic" width={80} height={24} className="h-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}
