"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // This is a portfolio demo: no data is sent anywhere.
    setSubmitted(true);
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-2xl px-6 py-20 sm:py-24">
        <span className="text-xs font-medium tracking-[0.2em] text-primary">
          Contact
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold tracking-wide text-foreground sm:text-5xl">
          お問い合わせ
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          リフォーム・リノベーションのご相談、お見積りのご依頼など、お気軽にお問い合わせください。
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-8 sm:p-10">
          {submitted ? (
            <div className="py-10 text-center">
              <p className="font-serif text-lg font-bold text-foreground">
                お問い合わせありがとうございます。
              </p>
              <p className="mt-2 text-sm text-muted">
                ※本サイトはデモのため、実際には送信されていません。
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition duration-200 hover:scale-[1.03] hover:border-primary/40 active:scale-[1.03]"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="お名前" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    placeholder="山田 太郎"
                  />
                </Field>
                <Field label="会社名(任意)" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    placeholder="株式会社Example"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="メールアドレス" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="電話番号" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    placeholder="090-1234-5678"
                  />
                </Field>
              </div>

              <Field label="ご相談内容の種別" htmlFor="type">
                <select
                  id="type"
                  name="type"
                  defaultValue="house"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="house">住宅リフォーム</option>
                  <option value="shop">店舗内装</option>
                  <option value="office">オフィス内装</option>
                  <option value="other">その他</option>
                </select>
              </Field>

              <Field label="ご相談内容" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                  placeholder="現在のお住まい・お店の状況や、ご希望のイメージなどをご記入ください。"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background shadow-lg shadow-primary/20 transition duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[1.03]"
              >
                送信する
              </button>
              <p className="text-xs text-muted">
                ※本フォームはポートフォリオ用のデモです。送信しても実際にはどこにも送信されません。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
