"use client";

import { useState } from "react";
import { mockAuth, mockSubscriptions } from "../lib/mocks";
import { Check, Rocket, Shield, Zap, Layout, CreditCard, ChevronRight, Github } from "lucide-react";

export default function SaaSBoilerplate() {
  const [user, setUser] = useState(mockAuth.user);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white"><Zap size={20}/></div>
          SaaS Boilerplate <span className="text-indigo-600">Pro</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
          <div className="h-4 w-px bg-slate-200"></div>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-500">Hi, {user.name.split(' ')[0]}</span>
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border">
                <img src={user.image} alt={user.name} />
              </div>
            </div>
          ) : (
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition">Login</button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-24 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold border border-indigo-100 animate-fade-in">
          <Rocket size={16} /> Now supporting Next.js 14 App Router
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Launch your SaaS in <span className="text-indigo-600">days</span>, not months.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          The ultimate Next.js starter kit with Auth, Stripe, and high-performance components. Focus on your product, not the boilerplate.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/20 flex items-center gap-2">
            Get Started Now <ChevronRight size={20}/>
          </button>
          <button className="bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg border hover:bg-slate-100 transition flex items-center gap-2">
            <Github size={20}/> View on GitHub
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="bg-slate-50 py-24 border-y">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to ship.</h2>
            <p className="text-slate-500">Fully integrated features that work seamlessly out of the box.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<Shield className="text-blue-500"/>} title="Auth Ready" desc="Secure authentication with NextAuth. Support for Google, GitHub, and Magic Links." />
            <FeatureCard icon={<CreditCard className="text-green-500"/>} title="Stripe Billing" desc="Integrated subscription management, webhooks, and customer portal support." />
            <FeatureCard icon={<Layout className="text-purple-500"/>} title="Modern UI" desc="Beautifully designed components using Tailwind CSS and Radix UI primitives." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing.</h2>
            <p className="text-slate-500">Choose the plan that's right for your startup's growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockSubscriptions.map((plan: any) => (
              <div key={plan.id} className={`p-8 rounded-3xl border ${plan.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-500/10 scale-105 bg-white relative' : 'border-slate-200 bg-white'}`}>
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</span>}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 font-medium">/mo</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f: string) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full"><Check size={12}/></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-lg flex items-center gap-2">
            <Zap className="text-indigo-600" size={20}/> SaaS Pro
          </div>
          <p className="text-slate-400 text-sm">© 2024 SaaS Boilerplate Pro. Built by Marouane Daouyny.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition"><Github size={20}/></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition"><Twitter size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="bg-slate-50 w-12 h-12 flex items-center justify-center rounded-2xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Twitter({ size }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}
