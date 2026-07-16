import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Company() {
  const values = [
    {
      title: "Technical Precision",
      desc: "We focus on pixel-perfect machine learning. Our custom OpenCV image filters and YOLOv8 models minimize false damage reports, producing over 98% recall accuracy.",
    },
    {
      title: "Operational Speed",
      desc: "Inspections must happen in real time. We optimize backend inference engines to run in under 250ms, ensuring zero bottlenecks in car rental lanes or depot gates.",
    },
    {
      title: "Objective Trust",
      desc: "We believe in removing subjective human bias from vehicle condition logs. By cryptographically hashing reports, we provide tamper-proof, court-admissible records.",
    },
  ];

  const stack = [
    { category: "Computer Vision & AI", items: ["YOLOv8 Object Detection", "OpenCV Image Preprocessing", "TensorFlow Backend"] },
    { category: "Cloud & Infrastructure", items: ["Docker Containers", "GCP Cloud Run Serverless", "Firebase Storage"] },
    { category: "Frontend Interface", items: ["Next.js App Router", "React 19 & TypeScript", "Tailwind CSS"] },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_65%_27%_at_50%_15%,#292928_0%,#1a1a1a_50%,#151515_100%)] font-[Arial,Helvetica,sans-serif] text-[#f1f0ed] flex flex-col justify-between">
      <div>
        <Header activeSlug="company" />

        {/* Hero Section */}
        <section className="mx-auto max-w-[930px] px-5 pb-[40px] pt-[66px] text-center md:px-6 md:pt-[92px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b3b39] bg-[#222221] py-1 pr-[11px] pl-1.5 text-[11px] text-[#a4a29d] md:text-[13px]">
            <span className="rounded-full bg-[#e4ff67] px-[7px] py-[3px] text-[11px] font-bold text-[#202020]">
              Our Mission
            </span>{" "}
            Objectivity in every handover{" "}
            <b className="ml-1 text-[#e4ff67]">→</b>
          </div>
          <h1 className="my-6 text-[52px] leading-[.96] font-medium tracking-[-.06em] md:text-[72px]">
            Trust built through
            <br />
            <span className="font-serif font-normal italic">computer vision precision.</span>
          </h1>
          <p className="mx-auto max-w-[580px] text-base leading-[1.5] tracking-[-.015em] text-[#b5b3ae] md:text-lg">
            Dentro was founded by automotive and artificial intelligence engineers who believe that vehicle inspection shouldn&apos;t rely on clipboard checklists and subjective eyes.
          </p>
        </section>

        {/* Values Grid */}
        <section className="mx-auto max-w-[1160px] px-5 py-[50px]">
          <div className="border-b border-[#2d2d2c] pb-5 mb-10">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f1f0ed]">
              Our Core Principles
            </h2>
            <p className="text-sm text-[#8e8c87] mt-1">
              The standards that drive our software development and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-[#2d2d2c] bg-[#1c1c1b] flex flex-col justify-between hover:border-[#3d3d3c] transition duration-200"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#ecebe7] mb-3">{val.title}</h3>
                  <p className="text-xs text-[#a9a7a2] leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mx-auto max-w-[1160px] px-5 py-[50px] mb-[50px]">
          <div className="border-b border-[#2d2d2c] pb-5 mb-10">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f1f0ed]">
              Engineering Tech Stack
            </h2>
            <p className="text-sm text-[#8e8c87] mt-1">
              Building lightweight, lightning-fast automotive applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stack.map((group, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-[#2d2d2c] bg-[#161615]"
              >
                <h3 className="text-sm font-semibold text-[#8e8c87] uppercase tracking-[0.08em] mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#ecebe7] font-mono flex items-center gap-2 before:content-[''] before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#e4ff67]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
