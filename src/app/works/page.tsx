import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works | SUMICA",
  description: "SUMICAが手がけた施工事例のご紹介。",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Works"
        title={"素材と光、\nそのままの表情を。"}
        description="住宅・店舗・オフィス、それぞれの空間に合わせたリノベーション事例をご紹介します。"
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) * 100}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
