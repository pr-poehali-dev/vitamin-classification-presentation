import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  { id: 1, label: "Введение", type: "cover" },
  { id: 2, label: "Обзор", type: "overview" },
  { id: 3, label: "Классификация", type: "classification" },
  { id: 4, label: "Источники", type: "sources" },
  { id: 5, label: "Дефицит", type: "deficiency" },
  { id: 6, label: "Здоровье", type: "health" },
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
        «Как витамины
        <br />
        влияют на человека?»
      </h1>
      <div
        className="mt-8 w-16 h-px bg-[var(--gold)] opacity-0 animate-fade-in"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      />
      <p
        className="mt-8 font-body text-sm font-light tracking-wide text-[var(--muted)] opacity-0 animate-slide-up"
        style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
      >
        Подготовила: Павлова Варвара, 8 класс
      </p>
    </div>
  );
}

function SlideOverview({ animKey }: { animKey: AnimKey }) {
  const tasks = [
    {
      num: "01",
      text: "Систематизировать классификацию витаминов, определить их пищевые источники и описать последствия дефицита.",
    },
    {
      num: "02",
      text: "Выяснить, каким образом витамины влияют на физическое здоровье, способность переносить стресс и психологическое благополучие.",
    },
    {
      num: "03",
      text: "Сформулировать правила сбалансированного питания, адресованные именно подросткам.",
    },
  ];
  return (
    <div key={animKey} className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="flex flex-col gap-6 w-full max-w-2xl">

        <div
          className="flex gap-10 items-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none text-[var(--ink)] shrink-0 w-36">
            Цель:
          </h2>
          <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed border-l border-[var(--line)] pl-8">
            Изучить роль витаминов в организме и на этой основе предложить практические рекомендации по питанию для подростков.
          </p>
        </div>

        <div className="border-t border-[var(--line)]" />

        <div
          className="flex gap-10 items-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none text-[var(--ink)] shrink-0 w-36">
            Задачи:
          </h2>
          <div className="border-l border-[var(--line)] pl-8 flex flex-col gap-4">
            {tasks.map((item, i) => (
              <div
                key={item.num}
                className="flex gap-4 items-start opacity-0 animate-slide-left"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="font-display text-2xl font-light text-[var(--gold)] leading-none shrink-0 w-6">
                  {i + 1}.
                </span>
                <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function SlideClassification({ animKey }: { animKey: AnimKey }) {
  const groups = [
    {
      title: "Жирорастворимые",
      sub: "A, D, E, K",
      desc: "Всасываются только в присутствии жиров. Накапливаются в печени и жировой ткани, расходуются постепенно. При избытке способны вызывать гипервитаминоз.",
    },
    {
      title: "Водорастворимые",
      sub: "группа B, C",
      desc: "Почти не депонируются, быстро выводятся с мочой. Должны поступать с пищей регулярно. Передозировка случается редко, зато скрытые дефициты распространены.",
    },
    {
      title: "Витаминоподобные вещества",
      sub: "холин, карнитин, липоевая кислота",
      desc: "Частично синтезируются в организме. При обычном питании хватает собственного синтеза, однако при повышенных нагрузках может потребоваться дополнительное поступление.",
    },
  ];

  return (
    <div key={animKey} className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-full max-w-2xl flex flex-col gap-2">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[var(--ink)]">
            Классификация витаминов
          </h2>
        </div>

        <div
          className="text-center mb-2 opacity-0 animate-slide-down"
          style={{ animationDelay: "0.12s", animationFillMode: "forwards" }}
        >
          <p className="font-display text-[clamp(1.2rem,3vw,2rem)] font-light text-[var(--muted)]">
            Витамины
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="opacity-0 animate-slide-up flex flex-col"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex flex-col items-center mb-3">
                <div className="w-px h-8 bg-[var(--gold)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-0.5" />
              </div>
              <div className={`flex-1 px-5 py-4 ${i < 2 ? "border-r border-[var(--line)]" : ""}`}>
                <h3 className="font-display text-lg font-light text-[var(--ink)] leading-tight">
                  {g.title}
                </h3>
                <p className="font-body text-[10px] tracking-wider text-[var(--gold)] mt-0.5 mb-3 uppercase">
                  {g.sub}
                </p>
                <p className="font-body text-xs font-light text-[var(--muted)] leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function SlideSources({ animKey }: { animKey: AnimKey }) {
  const rows = [
    { vitamin: "A", name: "Ретинол", sources: "Печень, рыбий жир, яйца; провитамин β-каротин — морковь, тыква, шпинат" },
    { vitamin: "D", name: "Кальциферол", sources: "Вырабатывается кожей под УФ-светом; жирная рыба (лосось, сельдь, скумбрия)" },
    { vitamin: "E", name: "Токоферол", sources: "Растительные масла, орехи, семена (подсолнечник, миндаль, фундук)" },
    { vitamin: "K", name: "Менахинон", sources: "Зелёные листовые овощи (шпинат, брокколи, салат); синтез кишечной микрофлорой" },
    { vitamin: "B", name: "Группа B", sources: "Цельнозерновые крупы, бобовые, печень, мясо, молочные продукты; B₁₂ — только животная пища" },
    { vitamin: "C", name: "Аскорбиновая к-та", sources: "Шиповник, смородина, сладкий перец, цитрусовые, капуста, свежие ягоды и фрукты" },
  ];

  return (
    <div key={animKey} className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-full max-w-3xl">
        <div
          className="mb-6 opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 04</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-[var(--ink)] mt-1">
            Источники витаминов
          </h2>
        </div>

        <div
          className="border border-[var(--line)] overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <table className="w-full font-body">
            <thead>
              <tr className="bg-[var(--ink)] text-white">
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-20">Витамин</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase">Где присутствует</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.vitamin}
                  className={`border-t border-[var(--line)] opacity-0 animate-slide-left ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
                  style={{ animationDelay: `${0.2 + i * 0.07}s`, animationFillMode: "forwards" }}
                >
                  <td className="px-5 py-3 font-display text-2xl font-light text-[var(--gold)]">{row.vitamin}</td>
                  <td className="px-5 py-3 font-body text-xs font-light text-[var(--muted)] leading-relaxed">{row.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SlideDeficiency({ animKey }: { animKey: AnimKey }) {
  const rows = [
    {
      vitamin: "C",
      disease: "Цинга",
      desc: "Нарушение синтеза коллагена: кровоточивость дёсен, ломкость сосудов, подкожные кровоизлияния, выпадение зубов. Без лечения — летальный исход.",
    },
    {
      vitamin: "B₁",
      disease: "Бери-бери",
      desc: "Полиневриты, мышечная слабость, сердечная недостаточность. Поражало народы, питавшиеся полированным рисом.",
    },
    {
      vitamin: "B₃",
      disease: "Пеллагра",
      desc: "Дерматит, диарея, деменция. Была распространена в регионах с однообразным кукурузным рационом.",
    },
    {
      vitamin: "D",
      disease: "Рахит",
      desc: "У детей: размягчение и деформация костей, искривление конечностей, задержка прорезывания зубов.",
    },
  ];

  return (
    <div key={animKey} className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-full max-w-3xl flex flex-col gap-5">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 05</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--ink)] mt-1">
            Последствия дефицита витаминов
          </h2>
        </div>

        <div
          className="border border-[var(--line)] overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <table className="w-full font-body">
            <thead>
              <tr className="bg-[var(--ink)] text-white">
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-20">Витамин</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-36">Заболевание</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase">Проявления</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.vitamin}
                  className={`border-t border-[var(--line)] opacity-0 animate-slide-left ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <td className="px-5 py-3 font-display text-2xl font-light text-[var(--gold)]">{row.vitamin}</td>
                  <td className="px-5 py-3 font-body text-xs font-medium text-[var(--ink)]">{row.disease}</td>
                  <td className="px-5 py-3 font-body text-xs font-light text-[var(--muted)] leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

function SlideHealth({ animKey }: { animKey: AnimKey }) {
  const rows = [
    {
      vitamin: "B₉, B₁₂",
      effect: "Кроветворение и синтез ДНК",
      desc: "Необходимы для деления клеток костного мозга. Недостаток ведёт к мегалобластической анемии.",
    },
    {
      vitamin: "C",
      effect: "Сосуды и иммунитет",
      desc: "Укрепляет сосудистую стенку, ускоряет регенерацию тканей, активирует иммунные клетки.",
    },
    {
      vitamin: "A",
      effect: "Зрение и эпителий",
      desc: "Входит в состав зрительного пигмента родопсина, поддерживает сумеречное зрение и целостность эпителиальных барьеров.",
    },
    {
      vitamin: "D + K",
      effect: "Кости и кальций",
      desc: "D усиливает всасывание кальция в кишечнике, K направляет его в костную ткань и препятствует кальцификации сосудов.",
    },
    {
      vitamin: "E + C",
      effect: "Антиоксидантная защита",
      desc: "Защищают клеточные мембраны от окислительного стресса, замедляя процессы старения.",
    },
  ];

  return (
    <div key={animKey} className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-full max-w-3xl flex flex-col gap-5">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 06</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--ink)] mt-1">
            Влияние на физическое здоровье
          </h2>
        </div>

        <div
          className="border border-[var(--line)] overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <table className="w-full font-body">
            <thead>
              <tr className="bg-[var(--ink)] text-white">
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-24">Витамин</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-44">На что влияет</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase">Механизм</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.vitamin}
                  className={`border-t border-[var(--line)] opacity-0 animate-slide-left ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <td className="px-5 py-3 font-display text-xl font-light text-[var(--gold)]">{row.vitamin}</td>
                  <td className="px-5 py-3 font-body text-xs font-medium text-[var(--ink)]">{row.effect}</td>
                  <td className="px-5 py-3 font-body text-xs font-light text-[var(--muted)] leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
      case 3:
        return <SlideSources animKey={key} />;
      case 4:
        return <SlideDeficiency animKey={key} />;
      case 5:
        return <SlideHealth animKey={key} />;
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