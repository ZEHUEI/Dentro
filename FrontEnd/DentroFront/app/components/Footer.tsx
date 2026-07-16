import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mx-auto mt-auto max-w-[1160px] w-full px-6 pb-20 pt-12 md:pb-[110px] border-t border-[#343432] mt-[100px] md:mt-[150px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f1f0ed]">About Dentro</h3>
          <p className="text-sm text-[#a9a7a2] leading-relaxed max-w-[450px]">
            Dentro is an AI-powered vehicle condition scanning platform built by automotive and AI engineers to eliminate vehicle handover disputes. Using YOLOv8 computer vision model pipelines, we generate objective, timestamped condition reports for rentals, fleets, and dealerships.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-between gap-6 md:gap-0">
          <Link className="text-[22px] font-semibold tracking-[-1px] text-[#f1f0ed]" href="/">
            <span className="align-[-2px] text-[25px] text-[#e4ff67]">◒</span> dentro
          </Link>
          <div className="flex gap-6 text-xs text-[#77756f] mt-4 md:mt-0">
            <Link className="hover:text-[#f1f0ed] transition" href="/product">Product</Link>
            <Link className="hover:text-[#f1f0ed] transition" href="/solutions">Solutions</Link>
            <Link className="hover:text-[#f1f0ed] transition" href="/company">Company</Link>
          </div>
          <p className="text-xs text-[#77756f] mt-2 md:mt-0">
            © {new Date().getFullYear()} Dentro Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
