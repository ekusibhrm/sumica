import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Service | SUMICA",
  description: "SUMICAが対応する工事内容のご紹介。",
};

const services = [
  {
    icon: HouseIcon,
    name: "住宅リフォーム",
    description:
      "戸建て・マンションの全面/部分リノベーション。間取り変更から水回り、内装仕上げまで一貫して対応します。",
    features: ["全面/部分リノベーション", "水回り設備の更新", "間取り変更・造作家具"],
  },
  {
    icon: StorefrontIcon,
    name: "店舗内装",
    description:
      "飲食店・美容室・ショップなどの内装デザイン・施工。ブランドの世界観をそのまま空間に落とし込みます。",
    features: ["内装デザイン設計", "什器・照明計画", "施工管理・引き渡し"],
  },
  {
    icon: OfficeIcon,
    name: "オフィス内装",
    description:
      "働き方に合わせた執務空間の設計・施工。集中とコミュニケーションが両立するレイアウトをご提案します。",
    features: ["レイアウト設計", "会議室・共有スペース設計", "内装・什器の一括手配"],
  },
  {
    icon: PaletteIcon,
    name: "設計・コーディネート監修",
    description:
      "家具選定・照明計画・カラーコーディネートまでを含めた、トータルディレクションも承っています。",
    features: ["家具・照明の選定", "カラーコーディネート", "竣工後のスタイリング"],
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={"暮らしと働き方に、\n合わせた設計を。"}
        description="住宅・店舗・オフィス、それぞれの用途に合わせた内装リノベーションをワンストップでご提供します。"
      />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="flex flex-col gap-8">
            {services.map(({ icon: Icon, name, description, features }, i) => (
              <Reveal key={name} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Icon className="h-6 w-6" />
                    </span>

                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-bold tracking-wide text-foreground">
                        {name}
                      </h2>
                      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                        {description}
                      </p>

                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 11 12 4l8 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function StorefrontIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 9V5h16v4M4 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 11v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function OfficeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 8h2M8 12h2M8 16h2M14 8h2M14 12h2M14 16h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4a8 8 0 1 0 0 16c1 0 1.5-.6 1.5-1.4 0-.4-.2-.8-.2-1.2 0-.7.6-1.2 1.3-1.2H16a4 4 0 0 0 4-4c0-4-3.6-7.2-8-7.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8.2" cy="11" r="1.1" fill="currentColor" />
      <circle cx="11" cy="8" r="1.1" fill="currentColor" />
      <circle cx="14.8" cy="9" r="1.1" fill="currentColor" />
    </svg>
  );
}
