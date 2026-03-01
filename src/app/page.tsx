import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosaic - Track Every Prop Firm",
  description: "Track Every Prop Firm. One Unified Dashboard.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#1e1e2e]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <span className="font-semibold text-xl tracking-widest">MOSAIC</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="nav-link">01. Platform</a>
            <a href="#meet" className="nav-link">02. Meet Mosaic</a>
            <a href="#analytics" className="nav-link">Analytics</a>
            <a href="#pricing" className="nav-link">03. Pricing</a>
            <button className="accent-bg text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="stat-badge">POWERED BY MOSAIC</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            Track Every <span className="accent">Prop Firm</span>.
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-10">
            One unified dashboard for all your prop firm accounts. Real-time analytics, 
            performance tracking, and institutional-grade reporting.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="accent-bg text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition">
              Start Free Trial
            </button>
            <button className="border border-[#1e1e2e] px-8 py-3 rounded-lg font-semibold text-lg hover:border-[#00f5c4] transition">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-16 px-6 border-t border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00f5c4] text-sm font-medium">01. PLATFORM</span>
            <h2 className="text-3xl font-bold mt-2">One Unified Dashboard</h2>
          </div>
          <div className="prop-firm-grid">
            {[
              "ALPHA FUTURES", "APEX TRADER FUNDING", "BLUSKY", "BULENOX",
              "ELITE TRADER FUNDING", "FAST TRACK TRADING", "FUNDED FUTURES FAMILY",
              "FUNDED FUTURES NETWORK", "FUNDEDNEXT", "FUNDINGTICKS",
              "LEGENDS TRADING", "LUCID TRADING", "MY FUNDED FUTURES", "PHIDIAS",
              "PROPSHOPTRADER", "PURDIA", "TAKE PROFIT TRADER", "TENACITY TRADING",
              "THE FUTURES DESK", "TICK TICK TRADER", "TOP ONE FUTURES", "TOPSTEP", "TRADEIFY"
            ].map((firm) => (
              <div key={firm} className="prop-card">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{firm}</span>
                  <span className="text-xs text-[#00f5c4]">Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Mosaic Section */}
      <section id="meet" className="py-20 px-6 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00f5c4] text-sm font-medium">02. MEET MOSAIC</span>
            <h2 className="text-4xl font-bold mt-2">Institutional-Grade Trading Analytics</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#00f5c4] text-sm font-medium">PLAID</span>
                <span className="text-[#00f5c4]">●</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Sync</h3>
              <p className="text-[#a0a0a0]">Connect your prop firm accounts via Plaid for live data synchronization.</p>
            </div>
            <div className="feature-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#00f5c4] text-sm font-medium">PLAID</span>
                <span className="text-[#00f5c4]">●</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Live</h3>
              <p className="text-[#a0a0a0]">Real-time tracking of your prop firm accounts with live performance metrics.</p>
            </div>
            <div className="feature-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#00f5c4] text-sm font-medium">PLAID</span>
                <span className="text-[#00f5c4]">●</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unified Reporting</h3>
              <p className="text-[#a0a0a0]">One dashboard to rule them all. All your accounts, one view.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-20 px-6 border-y border-[#1e1e2e]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent mb-2">23+</div>
              <div className="text-[#a0a0a0]">Prop Firms</div>
            </div>
            <div>
              <div className="text-4xl font-bold accent mb-2">500+</div>
              <div className="text-[#a0a0a0]">Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold accent mb-2">$10M+</div>
              <div className="text-[#a0a0a0]">Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold accent mb-2">99.9%</div>
              <div className="text-[#a0a0a0]">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00f5c4] text-sm font-medium">03. PRICING</span>
            <h2 className="text-4xl font-bold mt-2">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prop-card p-8">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0<span className="text-lg text-[#a0a0a0] font-normal">/mo</span></div>
              <ul className="text-[#a0a0a0] space-y-3 mb-8">
                <li>✓ 2 Prop Firms</li>
                <li>✓ Basic Analytics</li>
                <li>✓ Email Support</li>
              </ul>
              <button className="w-full border border-[#1e1e2e] py-3 rounded-lg font-medium hover:border-[#00f5c4] transition">
                Get Started
              </button>
            </div>
            <div className="prop-card p-8 border-[#00f5c4]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Pro</h3>
                <span className="stat-badge">POPULAR</span>
              </div>
              <div className="text-4xl font-bold mb-4 accent">$19<span className="text-lg text-[#a0a0a0] font-normal">/mo</span></div>
              <ul className="text-[#a0a0a0] space-y-3 mb-8">
                <li>✓ Unlimited Firms</li>
                <li>✓ Advanced Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ API Access</li>
              </ul>
              <button className="w-full accent-bg text-black py-3 rounded-lg font-medium hover:opacity-90 transition">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/logo.png" 
                alt="Mosaic" 
                width={24} 
                height={24}
                className="rounded"
              />
            </div>
            <span className="font-medium tracking-widest">MOSAIC</span>
          </div>
          <div className="text-[#a0a0a0] text-sm">
            © 2026 Mosaic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
