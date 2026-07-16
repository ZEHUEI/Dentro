import Link from "next/link";

interface HeaderProps {
  activeSlug?: string;
}

export default function Header({ activeSlug }: HeaderProps) {
  const navLink = "transition-colors hover:text-[#e4ff67]";
  const activeLink = "text-[#e4ff67] transition-colors font-medium";

  return (
    <header className="mx-auto flex h-[66px] max-w-[1260px] w-full items-center justify-between px-5 text-sm md:h-[76px] md:px-[30px] z-50 relative">
      <Link className="text-[22px] font-semibold tracking-[-1px] text-[#f1f0ed] hover:opacity-90 transition" href="/">
        <span className="align-[-2px] text-[25px] text-[#e4ff67]">◒</span>{" "}
        dentro
      </Link>
      <nav className="hidden gap-[29px] text-[#c8c6c1] md:flex">
        <Link
          className={activeSlug === "product" ? activeLink : navLink}
          href="/product"
        >
          Product
        </Link>
        <Link
          className={activeSlug === "solutions" ? activeLink : navLink}
          href="/solutions"
        >
          Solutions
        </Link>
        <Link
          className={activeSlug === "company" ? activeLink : navLink}
          href="/company"
        >
          Company
        </Link>
      </nav>
      <div className="flex items-center gap-5 text-[#cfcdc7]">
        <Link className={`hidden md:block ${navLink}`} href="#login">
          Log in
        </Link>
        <Link
          className="rounded-full bg-[#f1f0ed] px-[15px] py-2.5 text-[13px] font-semibold text-[#181818] transition hover:-translate-y-px hover:bg-[#e4ff67]"
          href="#access"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
