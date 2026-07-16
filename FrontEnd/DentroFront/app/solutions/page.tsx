import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Solutions() {
  const verticals = [
    {
      title: "Car Rentals & Car-Sharing",
      subtitle: "Stop disputes before they begin.",
      desc: "Compare pickup and return conditions automatically. Photos uploaded by customers are analyzed side-by-side to detect new damage instantly, protecting both rental companies and consumers.",
      metrics: ["94% dispute reduction", "< 2 min average check-in"],
    },
    {
      title: "Used Car Dealerships",
      subtitle: "Standardized appraisals you can trust.",
      desc: "Evaluate trade-ins and condition logs with absolute objectivity. Generate verified, shareable digital condition reports that build customer trust and accelerate vehicle turnover.",
      metrics: ["100% objective assessment", "+12% trust index scoring"],
    },
    {
      title: "Fleet & Logistics Operators",
      subtitle: "Optimize maintenance workflows.",
      desc: "Log daily vehicle inspections at the scale of commercial trucking, logistics vans, and corporate fleets. Spot wear-and-tear early and streamline depot maintenance scheduling.",
      metrics: ["30% faster checkouts", "8.5x ROI on damage claims"],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_65%_27%_at_50%_15%,#292928_0%,#1a1a1a_50%,#151515_100%)] font-[Arial,Helvetica,sans-serif] text-[#f1f0ed] flex flex-col justify-between">
      <div>
        <Header activeSlug="solutions" />

        {/* Hero Section */}
        <section className="mx-auto max-w-[930px] px-5 pb-[40px] pt-[66px] text-center md:px-6 md:pt-[92px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b3b39] bg-[#222221] py-1 pr-[11px] pl-1.5 text-[11px] text-[#a4a29d] md:text-[13px]">
            <span className="rounded-full bg-[#e4ff67] px-[7px] py-[3px] text-[11px] font-bold text-[#202020]">
              Market Fit
            </span>{" "}
            Tailored condition intelligence{" "}
            <b className="ml-1 text-[#e4ff67]">→</b>
          </div>
          <h1 className="my-6 text-[52px] leading-[.96] font-medium tracking-[-.06em] md:text-[72px]">
            Less uncertainty.
            <br />
            <span className="font-serif font-normal italic">More operational clarity.</span>
          </h1>
          <p className="mx-auto max-w-[580px] text-base leading-[1.5] tracking-[-.015em] text-[#b5b3ae] md:text-lg">
            Whether managing a peer-to-peer car share fleet, a regional car dealership, or thousands of logistics trucks, Dentro integrates directly into your workflow.
          </p>
        </section>

        {/* Solutions Grid */}
        <section className="mx-auto max-w-[1160px] px-5 py-[50px] mb-[50px]">
          <div className="flex flex-col gap-12">
            {verticals.map((vert, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 p-8 rounded-xl border border-[#2d2d2c] bg-[#1c1c1b] hover:border-[#3d3d3c] transition duration-200"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#e4ff67] font-semibold block mb-2">
                      Vertical Solution
                    </span>
                    <h2 className="text-2xl font-bold text-[#ecebe7] mb-2">{vert.title}</h2>
                    <p className="text-sm font-medium text-[#b5b3ae] italic mb-4">{vert.subtitle}</p>
                  </div>
                  <div className="flex gap-4 flex-wrap mt-4 md:mt-0">
                    {vert.metrics.map((met, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full border border-[#3b3b39] bg-[#222221] text-xs text-[#ecebe7] font-mono"
                      >
                        {met}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-[#a9a7a2] leading-relaxed border-l-0 md:border-l border-[#2e2e2d] md:pl-8">
                    {vert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
