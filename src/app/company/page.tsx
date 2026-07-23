import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Company | SUMICA",
  description: "SUMICAの会社概要・代表挨拶・沿革のご紹介。",
};

const overview = [
  { label: "会社名", value: "株式会社SUMICA" },
  { label: "設立", value: "2013年6月" },
  { label: "所在地", value: "東京都目黒区(架空の所在地です)" },
  { label: "代表者", value: "代表取締役 深澤 悟" },
  { label: "事業内容", value: "住宅・店舗・オフィスの内装リノベーション設計・施工" },
  { label: "施工実績", value: "320件以上(2026年時点)" },
];

const history = [
  { year: "2013", event: "内装設計事務所として個人創業" },
  { year: "2015", event: "法人化。店舗内装事業を本格展開" },
  { year: "2018", event: "オフィス内装事業部を新設" },
  { year: "2021", event: "施工実績200件を突破" },
  { year: "2024", event: "目黒区に新オフィスを開設" },
  { year: "2026", event: "現在に至る" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={"住まいの時間を、\n設計するという仕事。"}
        description="SUMICAは、住宅・店舗・オフィスの内装リノベーションを手がける設計事務所です。"
      />

      {/* Overview */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold tracking-wide text-foreground">
              会社概要
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
              {overview.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-4 sm:gap-4 sm:px-8"
                >
                  <dt className="text-sm font-medium text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground sm:col-span-3">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Representative message */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-soft font-serif text-2xl text-primary">
                  深澤
                </span>
                <div>
                  <p className="font-serif text-lg font-bold text-foreground">
                    深澤 悟
                  </p>
                  <p className="text-xs text-muted">代表取締役</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-medium tracking-[0.2em] text-primary">
                  MESSAGE
                </span>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-wide text-foreground">
                  代表挨拶
                </h2>
                <p className="mt-5 leading-loose text-muted">
                  住まいや店舗は、暮らしや仕事の「背景」になるものだと考えています。だからこそ私たちは、目立つデザインよりも、時間が経つほどに馴染んでいく素材や光のあり方にこだわってきました。
                </p>
                <p className="mt-4 leading-loose text-muted">
                  お客様それぞれの暮らし方、働き方に耳を傾けることから、設計は始まります。竣工後も長く付き合っていけるパートナーでありたい。そんな思いで、日々の仕事に向き合っています。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold tracking-wide text-foreground">
              沿革
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col">
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 60}>
                <div className="relative border-l border-border py-1 pb-8 pl-8 last:border-transparent last:pb-0">
                  <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <p className="font-serif text-lg font-bold text-foreground">
                    {h.year}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {h.event}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
