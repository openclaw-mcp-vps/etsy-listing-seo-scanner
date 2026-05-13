export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Etsy SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Rank Higher on Etsy.<br />
          <span className="text-[#58a6ff]">Sell More Every Day.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste any Etsy listing URL and get instant keyword suggestions, tag improvements, and title rewrites — so buyers actually find your shop.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start Optimizing — $10/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Paste Your URL", desc: "Submit any Etsy listing link to the scanner." },
            { step: "2", title: "AI Analysis", desc: "We analyze keywords, tags, and title structure." },
            { step: "3", title: "Get Recommendations", desc: "Receive a ranked list of actionable SEO fixes." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-extrabold mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$10</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited listing scans",
              "Keyword & tag recommendations",
              "Title rewrite suggestions",
              "Competitor keyword insights",
              "Monthly ranking reports"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the SEO scanner work?",
              a: "You paste an Etsy listing URL, and our tool fetches the listing data, analyzes your title, tags, and description against high-traffic keyword data, then surfaces the most impactful changes you can make."
            },
            {
              q: "Do I need any technical knowledge?",
              a: "Not at all. The recommendations are written in plain language with clear before/after examples so any Etsy seller can apply them immediately."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal with no questions asked and no cancellation fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        &copy; {new Date().getFullYear()} Etsy Listing SEO Scanner. All rights reserved.
      </footer>
    </main>
  );
}
