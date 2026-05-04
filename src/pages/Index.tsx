import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  { id: 1, label: "Введение", type: "cover" },
  { id: 2, label: "Обзор", type: "overview" },
  { id: 3, label: "Классификация", type: "classification" },
];

type AnimKey = number;

function useSlide() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  const go = useCallback((next: number) => {
    if (next === current) return;
    setCurrent(next);
    setKey((k) => k + 1);
  }, [current]);

  const prev = useCallback(() => go(Math.max(0, current - 1)), [current, go]);
  const next = useCallback(() => go(Math.min(SLIDES.length - 1, current + 1)), [current, go]);

  return { current, key, go, prev, next };
}

function SlideCover({ animKey }: { animKey: AnimKey }) {
  return (
    <div key={animKey} className="flex flex-col flex-1 justify-center items-center h-full text-center px-8">
      <p
        className="font-body text-sm font-light tracking-wide text-[var(--muted)] opacity-0 animate-slide-down"
        style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
      >
        Проект по биологии на тему
      </p>
      <h1
        className="font-display text-[clamp(2rem,6vw,4.5rem)] font-light leading-tight tracking-tight text-[var(--ink)] mt-4 max-w-2xl opacity-0 animate-slide-up"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        «Как витамины влияют на человека»
      </h1>
      <div
        className="mt-8 w-16 h-px bg-[var(--gold)] opacity-0 animate-fade-in"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      />
      <p
        className="mt-8 font-body text-sm font-light tracking-wide text-[var(--muted)] opacity-0 animate-slide-up"
        style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
      >
        Подготовила: <span className="font-medium text-[var(--ink)]">Павлова Варвара</span>, 8 класс
      </p>
    </div>
  );
}

function SlideOverview({ animKey }: { animKey: AnimKey }) {
  const items = [
    {
      num: "01",
      title: "Определение",
      text: "Органические вещества, необходимые в малых количествах для нормального обмена веществ",
    },
    {
      num: "02",
      title: "Значение",
      text: "Участвуют в ферментативных реакциях, регуляции метаболизма и защите клеток",
    },
    {
      num: "03",
      title: "Источники",
      text: "Преимущественно поступают с пищей; некоторые частично синтезируются в организме",
    },
  ];
  return (
    <div key={animKey} className="flex flex-col justify-center h-full px-8 md:px-16">
      <div
        className="mb-10 opacity-0 animate-slide-down"
        style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
      >
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 02</span>
        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-light leading-tight text-[var(--ink)] mt-1">
          Что такое витамины?
        </h2>
      </div>
      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={item.num}
            className="flex gap-8 items-start py-6 border-t border-[var(--line)] opacity-0 animate-slide-left"
            style={{ animationDelay: `${0.1 + i * 0.12}s`, animationFillMode: "forwards" }}
          >
            <span className="font-display text-4xl font-light text-[var(--gold)] leading-none shrink-0 w-12 pt-0.5">
              {item.num}
            </span>
            <div>
              <h3 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-[var(--ink)] mb-1.5">
                {item.title}
              </h3>
              <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-[var(--line)]" />
      </div>
    </div>
  );
}

function SlideClassification({ animKey }: { animKey: AnimKey }) {
  const fatSoluble = [
    { name: "A", depot: "Печень, сетчатка", risk: "Высокий", note: "Ретинол / β-каротин" },
    { name: "D", depot: "Жировая ткань, печень", risk: "Высокий", note: "Кальциферол" },
    { name: "E", depot: "Жировые ткани", risk: "Умеренный", note: "Токоферол" },
    { name: "K", depot: "Печень", risk: "Низкий", note: "Менахинон / Филлохинон" },
  ];
  const waterSoluble = [
    { name: "B₁", depot: "Не депонируется", risk: "Очень низкий", note: "Тиамин" },
    { name: "B₂", depot: "Незначительно", risk: "Очень низкий", note: "Рибофлавин" },
    { name: "B₁₂", depot: "Печень (до 3 лет)", risk: "Низкий", note: "Кобаламин" },
    { name: "C", depot: "Не депонируется", risk: "Очень низкий", note: "Аскорбиновая к-та" },
  ];

  const riskStyle = (risk: string) => {
    if (risk === "Высокий") return "bg-[#2c1a00] text-[#f5c87a]";
    if (risk === "Умеренный") return "bg-[#1a1a0e] text-[#d4d47a]";
    return "bg-[#f0efea] text-[var(--muted)]";
  };

  return (
    <div key={animKey} className="flex flex-col justify-center h-full px-6 md:px-12 animate-fade-in">
      <div
        className="mb-5 opacity-0 animate-slide-down"
        style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
      >
        <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 03</span>
        <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-light leading-tight text-[var(--ink)] mt-1">
          Классификация витаминов
        </h2>
        <p className="font-body text-xs font-light text-[var(--muted)] mt-2 max-w-2xl leading-relaxed">
          По растворимости витамины делятся на{" "}
          <strong className="font-medium text-[var(--ink)]">жирорастворимые</strong> и{" "}
          <strong className="font-medium text-[var(--ink)]">водорастворимые</strong>. Жирорастворимые накапливаются
          в тканях и способны вызывать гипервитаминозы; водорастворимые быстро выводятся и должны поступать
          регулярно.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="opacity-0 animate-slide-right"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            <span className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--ink)]">
              Жирорастворимые (A, D, E, K)
            </span>
          </div>
          <div className="border border-[var(--line)] overflow-hidden">
            <table className="w-full text-xs font-body">
              <thead>
                <tr className="bg-[var(--ink)] text-white">
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Витамин</th>
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Депо</th>
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Гипервитаминоз</th>
                </tr>
              </thead>
              <tbody>
                {fatSoluble.map((v, i) => (
                  <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}>
                    <td className="px-3 py-2.5 font-display text-base font-semibold text-[var(--gold)]">
                      {v.name}
                      <span className="block font-body text-[9px] font-normal text-[var(--muted)] tracking-wide">
                        {v.note}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-[var(--muted)] font-light text-[11px]">{v.depot}</td>
                    <td className="px-3 py-2.5">
                      <span className={`inline-block px-2 py-0.5 text-[9px] tracking-wider font-medium uppercase ${riskStyle(v.risk)}`}>
                        {v.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="opacity-0 animate-slide-left"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-2 h-2 rounded-full border border-[var(--ink)]" />
            <span className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--ink)]">
              Водорастворимые (группа B, C)
            </span>
          </div>
          <div className="border border-[var(--line)] overflow-hidden">
            <table className="w-full text-xs font-body">
              <thead>
                <tr className="bg-[var(--ink)] text-white">
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Витамин</th>
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Депо</th>
                  <th className="px-3 py-2 text-left font-medium tracking-wider text-[10px]">Гипервитаминоз</th>
                </tr>
              </thead>
              <tbody>
                {waterSoluble.map((v, i) => (
                  <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}>
                    <td className="px-3 py-2.5 font-display text-base font-semibold text-[var(--ink)]">
                      {v.name}
                      <span className="block font-body text-[9px] font-normal text-[var(--muted)] tracking-wide">
                        {v.note}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-[var(--muted)] font-light text-[11px]">{v.depot}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-block px-2 py-0.5 text-[9px] tracking-wider font-medium uppercase bg-[#f0efea] text-[var(--muted)]">
                        {v.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="mt-4 border-l-2 border-[var(--gold)] pl-4 opacity-0 animate-slide-up"
        style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
      >
        <p className="font-body text-[11px] font-light text-[var(--muted)] leading-relaxed">
          <span className="font-medium text-[var(--ink)]">Витаминоподобные вещества</span> — холин, карнитин,
          липоевая кислота — частично синтезируются в организме, но при повышенных нагрузках требуют
          дополнительного поступления.
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  const { current, key, go, prev, next } = useSlide();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const renderSlide = () => {
    switch (current) {
      case 0:
        return <SlideCover animKey={key} />;
      case 1:
        return <SlideOverview animKey={key} />;
      case 2:
        return <SlideClassification animKey={key} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col font-body select-none"
      style={
        {
          background: "var(--cream)",
          "--ink": "#1a1814",
          "--muted": "#8a8680",
          "--gold": "#b5862a",
          "--line": "#e8e4dc",
          "--cream": "#faf9f6",
        } as React.CSSProperties
      }
    >
      <header className="flex items-center justify-between px-8 py-4 border-b border-[var(--line)] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-[var(--gold)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[var(--gold)]" />
          </div>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] font-medium">
            Витамины
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-body font-medium transition-all duration-300 ${
                i === current
                  ? "text-[var(--ink)] border-b border-[var(--ink)]"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <span className="font-body text-xs text-[var(--muted)] tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col">{renderSlide()}</main>

      <footer className="flex items-center justify-between px-8 py-4 border-t border-[var(--line)] shrink-0">
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-0.5 bg-[var(--gold)]"
                  : "w-3 h-0.5 bg-[var(--line)] hover:bg-[var(--muted)]"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-8 h-8 border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] disabled:opacity-20 transition-all duration-200 cursor-pointer disabled:cursor-default"
          >
            <Icon name="ChevronLeft" size={14} />
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            className="w-8 h-8 border border-[var(--ink)] bg-[var(--ink)] flex items-center justify-center text-white hover:bg-[var(--gold)] hover:border-[var(--gold)] disabled:opacity-20 transition-all duration-200 cursor-pointer disabled:cursor-default"
          >
            <Icon name="ChevronRight" size={14} />
          </button>
        </div>
        <span className="hidden md:block font-body text-[9px] tracking-[0.3em] uppercase text-[var(--line)]">
          ← → клавиши навигации
        </span>
      </footer>
    </div>
  );
}