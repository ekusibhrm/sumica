import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/works";

const strengths = [
  {
    title: "素材へのこだわり",
    body: "経年変化を楽しめる無垢材や左官仕上げなど、素材本来の質感を活かした設計を大切にしています。",
  },
  {
    title: "光と間のデザイン",
    body: "採光と余白を丁寧に設計し、空間に静けさをもたらします。「何もない」ことも設計のひとつです。",
  },
  {
    title: "一貫した伴走体制",
    body: "ヒアリングから設計・施工・アフターフォローまでを、専任チームが最後まで担当します。",
  },
];

const stats = [
  { target: 320, suffix: "+", label: "施工実績(件)" },
  { target: 98, suffix: "%", label: "顧客満足度" },
  { target: 28, suffix: "年", label: "平均築年数" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <Image
          src="/images/hero-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.32]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(138,106,69,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(75,88,66,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            INTERIOR RENOVATION STUDIO
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold leading-[1.4] tracking-wide text-foreground sm:text-5xl">
            住まいに、
            <br className="sm:hidden" />
            静かな贅沢を。
          </h1>
          <p className="mx-auto mt-7 max-w-lg leading-relaxed text-muted">
            SUMICAは、住宅・店舗・オフィスの内装リノベーションを手がける設計事務所です。素材と光、余白にこだわり、日々の暮らしを静かに底上げします。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/works"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background shadow-lg shadow-primary/20 transition duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[1.03]"
            >
              施工事例を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-8 py-4 text-sm font-medium tracking-wide text-foreground transition duration-200 hover:scale-[1.03] hover:border-primary/40 active:scale-[1.03]"
            >
              無料相談を予約する
            </Link>
          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <CountUp target={s.target} />
                  {s.suffix}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal>
            <div className="max-w-xl">
              <span className="text-xs font-medium tracking-[0.2em] text-primary">
                STRENGTH
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-foreground">
                SUMICAの強み
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <span className="font-serif text-2xl text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold tracking-wide text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works excerpt */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] text-primary">
                  WORKS
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-wide text-foreground">
                  施工事例
                </h2>
              </div>
              <Link
                href="/works"
                className="text-sm font-medium tracking-wide text-primary hover:text-primary-dark"
              >
                すべての事例を見る &rarr;
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {works.slice(0, 3).map((w, i) => (
              <Reveal key={w.slug} delay={i * 100}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold tracking-wide text-foreground">
              まずは、お話をお聞かせください。
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
              住まいや店舗の「こうしたい」を、設計士が直接お伺いします。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-9 py-4 text-sm font-medium tracking-wide text-background shadow-lg shadow-primary/20 transition duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[1.03]"
            >
              無料相談を予約する
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
