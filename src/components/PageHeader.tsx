export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <span className="text-xs font-medium tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-5 whitespace-pre-line font-serif text-4xl font-bold leading-[1.3] tracking-wide text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
