import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/service", label: "Service" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 font-serif text-xl font-bold tracking-wide text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 font-serif text-sm text-primary">
                住
              </span>
              SUMICA
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              住まいと店舗に、静かな贅沢を。内装リノベーションの設計事務所です。
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted">
            ※このサイトはポートフォリオ制作のためのデモサイトです。SUMICA
            は実在の企業ではありません。掲載している施工事例・会社概要・沿革はすべて架空のものです。
          </p>
          <p className="mt-3 text-xs text-muted/70">
            &copy; 2026 SUMICA (Demo)
          </p>
        </div>
      </div>
    </footer>
  );
}
