import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Product() {
  const steps = [
    {
      num: "01",
      title: "Image Upload & Normalization",
      desc: "Accepts high-resolution mobile photos. The pipeline runs lens distortion correction and contrast normalization through OpenCV.",
    },
    {
      num: "02",
      title: "YOLOv8 Damage Localization",
      desc: "Our neural network detects scratches, dents, and panel misalignments in parallel, identifying exact pixels of the vehicle exterior.",
    },
    {
      num: "03",
      title: "Severity Classification",
      desc: "The classifier determines severity (minor scratch vs major dent) and returns a precision confidence percentage.",
    },
    {
      num: "04",
      title: "Condition Report Generation",
      desc: "A secure, timestamped PDF & web-accessible report is created, complete with cryptographic hash verification to prevent tampering.",
    },
  ];

  const specs = [
    { label: "Inference Latency", value: "< 250ms per image" },
    { label: "AI Model Backbone", value: "YOLOv8 Extra-Large + ResNet Classifier" },
    { label: "Supported Damage Types", value: "Scratches, Dents, Cracks, Panel Misalignments" },
    { label: "API Protocol", value: "gRPC & REST / JSON Webhooks" },
    { label: "Deployment Architecture", value: "Docker / Google Cloud Run / GPU-accelerated" },
    { label: "Report Security", value: "SHA-256 cryptographic proof" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_65%_27%_at_50%_15%,#292928_0%,#1a1a1a_50%,#151515_100%)] font-[Arial,Helvetica,sans-serif] text-[#f1f0ed] flex flex-col justify-between">
      <div>
        <Header activeSlug="product" />

        {/* Hero Section */}
        <section className="mx-auto max-w-[930px] px-5 pb-[40px] pt-[66px] text-center md:px-6 md:pt-[92px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b3b39] bg-[#222221] py-1 pr-[11px] pl-1.5 text-[11px] text-[#a4a29d] md:text-[13px]">
            <span className="rounded-full bg-[#e4ff67] px-[7px] py-[3px] text-[11px] font-bold text-[#202020]">
              AI Core
            </span>{" "}
            YOLOv8 vehicle inspection engine{" "}
            <b className="ml-1 text-[#e4ff67]">→</b>
          </div>
          <h1 className="my-6 text-[52px] leading-[.96] font-medium tracking-[-.06em] md:text-[72px]">
            Computer vision built for
            <br />
            <span className="font-serif font-normal italic">handover integrity.</span>
          </h1>
          <p className="mx-auto max-w-[580px] text-base leading-[1.5] tracking-[-.015em] text-[#b5b3ae] md:text-lg">
            Dentro uses deep neural networks to inspect vehicles, providing rental managers, dealers, and fleet operators with objective damage classification.
          </p>
        </section>

        {/* The Pipeline Section */}
        <section className="mx-auto max-w-[1160px] px-5 py-[50px]">
          <div className="border-b border-[#2d2d2c] pb-5 mb-10">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f1f0ed]">
              Inspection Pipeline Architecture
            </h2>
            <p className="text-sm text-[#8e8c87] mt-1">
              How photos turn into objective condition records in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl border border-[#2a2a29] bg-[#1c1c1b] flex flex-col justify-between h-[230px] hover:border-[#3a3a39] transition duration-200"
              >
                <div>
                  <span className="text-[32px] font-bold text-[#e4ff67] block leading-none mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-base font-semibold text-[#f1f0ed] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#a9a7a2] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs Table */}
        <section className="mx-auto max-w-[1160px] px-5 py-[50px] mb-[50px]">
          <div className="border-b border-[#2d2d2c] pb-5 mb-8">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f1f0ed]">
              Technical Specifications
            </h2>
            <p className="text-sm text-[#8e8c87] mt-1">
              Enterprise integrations and machine learning parameters.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#2d2d2c] bg-[#1c1c1b]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2d2d2c] text-xs text-[#77756f] uppercase tracking-[0.08em] bg-[#161615]">
                  <th className="py-4 px-6 font-semibold">Parameter / Layer</th>
                  <th className="py-4 px-6 font-semibold">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#282827] last:border-b-0 text-sm text-[#ecebe7] hover:bg-[#222221] transition-colors"
                  >
                    <td className="py-4 px-6 text-[#9d9c97] font-medium">{spec.label}</td>
                    <td className="py-4 px-6 font-mono text-[#e4ff67] text-xs">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
