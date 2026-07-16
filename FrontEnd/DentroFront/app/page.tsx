import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface ReportRow {
  area: string;
  result: string;
  confidence: string;
  state: "attention" | "clear";
}

const reportRows: ReportRow[] = [
  {
    area: "Left front door",
    result: "Scratch detected",
    confidence: "0.94",
    state: "attention",
  },
  {
    area: "Front bumper",
    result: "No new damage",
    confidence: "0.99",
    state: "clear",
  },
  {
    area: "Rear quarter panel",
    result: "No new damage",
    confidence: "0.98",
    state: "clear",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_65%_27%_at_50%_15%,#292928_0%,#1a1a1a_50%,#151515_100%)] font-[Arial,Helvetica,sans-serif] text-[#f1f0ed] flex flex-col justify-between">
      <div>
        <Header />

        <section
          className="mx-auto max-w-[930px] px-5 pb-[58px] pt-[66px] text-center md:px-6 md:pb-[76px] md:pt-[92px]"
          id="top"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b3b39] bg-[#222221] py-1 pr-[11px] pl-1.5 text-[11px] text-[#a4a29d] md:text-[13px]">
            <span className="rounded-full bg-[#e4ff67] px-[7px] py-[3px] text-[11px] font-bold text-[#202020]">
              New
            </span>{" "}
            Vehicle condition intelligence, built for scale{" "}
            <b className="ml-1 text-[#e4ff67]">→</b>
          </div>
          <h1 className="my-[31px] text-[58px] leading-[.96] font-medium tracking-[-.075em] md:text-[clamp(52px,7.8vw,100px)]">
            The calmest way to
            <br />
            know your <em className="font-serif font-normal">fleet.</em>
          </h1>
          <p className="mx-auto max-w-[560px] text-base leading-[1.5] tracking-[-.015em] text-[#b5b3ae] md:text-lg">
            Dentro turns the photos you already take into clear, objective
            vehicle condition reports—before disputes begin.
          </p>
          <div className="mt-8 flex items-center justify-center gap-[18px] md:gap-[25px]">
            <Link
              className="inline-flex items-center gap-[18px] rounded-full bg-[#f1f0ed] px-[19px] py-[14px] text-sm font-semibold text-[#181818] transition hover:-translate-y-px hover:bg-[#e4ff67] md:gap-6"
              href="#access"
            >
              Request a demo <b>→</b>
            </Link>
            <Link className="text-sm text-[#d3d1cc]" href="/product">
              See how it works{" "}
              <b className="ml-[7px] text-[17px] text-[#e4ff67]">↘</b>
            </Link>
          </div>
        </section>

        <section
          className="mx-auto max-w-[1160px] px-3 md:px-6"
          id="product"
          aria-label="Dentro inspection report preview"
        >
          <div className="flex h-[575px] overflow-hidden rounded-[11px] border border-[#3a3a38] bg-[#202020] shadow-[0_30px_100px_#0008,0_0_0_1px_#ffffff06_inset] md:h-[610px] md:rounded-2xl">
            <aside className="hidden w-[228px] shrink-0 flex-col border-r border-[#292929] bg-[#1a1a1a] p-3 md:flex">
              <Link className="px-[7px] pb-[15px]" href="/">
                <span className="align-[-2px] text-[25px] text-[#e4ff67]">
                  ◒
                </span>
              </Link>
              <button className="rounded-[7px] border border-[#363635] bg-[#272726] p-2.5 text-left text-xs text-[#ededeb]">
                <b className="mr-[7px] text-base font-normal">＋</b> New
                inspection
              </button>
              <div className="mt-7 flex flex-col gap-[3px]">
                <small className="px-[9px] pb-2 text-[9px] font-bold tracking-[.08em] text-[#777671]">
                  RECENT INSPECTIONS
                </small>
                <Link
                  className="rounded-[5px] bg-[#30302f] p-[9px] text-xs text-[#ecebe7] transition hover:text-[#ecebe7]"
                  href="/product"
                >
                  <i className="mr-[7px] inline-block h-1.5 w-1.5 rounded-full bg-[#e4ff67] align-[1px]" />
                  2024 Tesla Model 3
                </Link>
                <Link
                  className="rounded-[5px] p-[9px] text-xs text-[#9d9c97] hover:text-[#ecebe7] transition"
                  href="/product"
                >
                  2023 Volvo XC60
                </Link>
                <Link
                  className="rounded-[5px] p-[9px] text-xs text-[#9d9c97] hover:text-[#ecebe7] transition"
                  href="/product"
                >
                  2022 BMW X5
                </Link>
              </div>
              <div className="mt-auto flex items-center gap-2 border-t border-[#30302e] px-[5px] pt-[13px]">
                <span className="grid h-[25px] w-[25px] place-items-center rounded-full bg-[#6f7962] text-[9px] font-bold">
                  AM
                </span>
                <div className="flex flex-col gap-0.5 leading-none">
                  <b className="text-[10px]">Arden Mobility</b>
                  <small className="text-[8px] text-[#898781]">
                    Enterprise workspace
                  </small>
                </div>
                <i className="ml-auto text-sm not-italic text-[#999]">···</i>
              </div>
            </aside>
            <div className="flex min-w-0 flex-1 flex-col bg-[#202020]">
              <div className="flex h-[54px] items-center justify-between border-b border-[#292929] px-[14px] text-xs text-[#aaa8a2] md:px-[21px]">
                <div>
                  <span className="mr-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#8fbb64]" />{" "}
                  Inspection complete
                </div>
                <button className="rounded-md border border-[#484743] bg-transparent px-2.5 py-[7px] text-[11px] text-[#dddcd7]">
                  Share report ↗
                </button>
              </div>
              <div className="mx-auto w-full max-w-[720px] px-[17px] pt-[38px] pb-5 md:px-[50px] md:pt-[54px] md:pb-[30px]">
                <div className="flex items-start gap-3">
                  <span className="grid h-[25px] w-[25px] shrink-0 place-items-center rounded-full bg-[#d5df78] text-xs text-[#272820]">
                    D
                  </span>
                  <div>
                    <p className="mt-0.5 mb-[7px] text-sm tracking-[-.015em] md:text-base">
                      Review the return inspection for <b>2024 Tesla Model 3</b>
                      .
                    </p>
                    <small className="text-[11px] text-[#8d8b85]">
                      12 images analysed · July 16, 2026 · 10:42 AM
                    </small>
                  </div>
                </div>
                <div className="mt-[25px] overflow-hidden rounded-[10px] border border-[#3c3c39] bg-[#242423] md:ml-[37px]">
                  <div className="flex gap-3 border-b border-[#3a3a37] p-[15px] md:p-[19px]">
                    <span className="text-[17px] text-[#e4ff67]">✦</span>
                    <div>
                      <b className="text-sm">Inspection summary</b>
                      <p className="mb-0 mt-[5px] text-xs text-[#aaa8a2]">
                        1 change identified since the previous verified
                        condition record.
                      </p>
                    </div>
                  </div>
                  <div>
                    {reportRows.map((row) => (
                      <div
                        className="grid grid-cols-[1fr_.9fr] items-center gap-2 border-b border-[#353533] px-[13px] py-[13px] text-[11px] text-[#b2b0aa] md:grid-cols-[1.25fr_1.2fr_.65fr] md:px-[19px]"
                        key={row.area}
                      >
                        <span>{row.area}</span>
                        <b
                          className={
                            row.state === "attention"
                              ? "font-medium text-[#f1d7a2] before:mr-[6px] before:inline-block before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#e0b762] before:align-[1px]"
                              : "font-medium text-[#c6d7bd] before:mr-[6px] before:inline-block before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#8db378] before:align-[1px]"
                          }
                        >
                          {row.result}
                        </b>
                        <small className="hidden text-right text-[10px] text-[#85837d] md:block">
                          {row.confidence} confidence
                        </small>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between px-[13px] py-[13px] text-[10px] text-[#85837d] md:px-[19px]">
                    <span>Report ID · DX-2048-07</span>
                    <Link className="text-[#e6e4de]" href="/product">
                      Open full report{" "}
                      <b className="ml-[6px] text-[#e4ff67]">→</b>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto mb-[17px] mt-auto flex h-11 w-[calc(100%_-_34px)] max-w-[720px] items-center justify-between rounded-lg border border-[#41413f] bg-[#282827] py-0 pr-2 pl-[14px] text-xs text-[#77756f] md:mb-[21px] md:w-[calc(100%_-_100px)]">
                <span>Ask Dentro about this vehicle…</span>
                <b className="grid h-[27px] w-[27px] place-items-center rounded-md bg-[#dddcda] text-base text-[#272725]">
                  ↑
                </b>
              </div>
            </div>
          </div>
          <p className="mt-[21px] text-center text-[13px] text-[#8e8c87]">
            A complete inspection record—ready when you need it.
          </p>
        </section>

        <section
          className="mx-auto mt-[100px] max-w-[1160px] px-6 pb-20 md:mt-[150px]"
          id="solutions"
        >
          <p className="text-[10px] tracking-[.13em] text-[#e4ff67]">
            BUILT FOR EVERY HANDOVER
          </p>
          <h2 className="my-[18px] mb-[42px] text-[clamp(46px,6vw,82px)] leading-[.95] font-medium tracking-[-.07em]">
            Less uncertainty.
            <br />
            <em className="font-serif font-normal">More confidence.</em>
          </h2>
          <div className="flex flex-wrap gap-[19px] border-t border-[#343432] pt-[15px] text-[13px] text-[#a9a7a2] md:gap-11">
            <Link className="hover:text-[#f1f0ed] transition" href="/solutions">
              For rentals
            </Link>
            <Link className="hover:text-[#f1f0ed] transition" href="/solutions">
              For fleets
            </Link>
            <Link className="hover:text-[#f1f0ed] transition" href="/solutions">
              For dealers
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
