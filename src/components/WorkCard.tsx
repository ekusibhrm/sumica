import Image from "next/image";
import type { Work } from "@/lib/works";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
          {work.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-bold leading-snug tracking-wide text-foreground">
          {work.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {work.description}
        </p>
        <div className="mt-4 flex gap-4 border-t border-border pt-4 text-xs text-muted">
          <span>{work.area}</span>
          <span>{work.duration}</span>
        </div>
      </div>
    </div>
  );
}
