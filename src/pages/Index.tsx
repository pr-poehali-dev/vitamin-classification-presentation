import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  { id: 1, label: "Введение", type: "cover" },
  { id: 2, label: "Обзор", type: "overview" },
  { id: 3, label: "Классификация", type: "classification" },
  { id: 4, label: "Источники", type: "sources" },
  { id: 5, label: "Дефицит", type: "deficiency" },
  { id: 6, label: "Здоровье", type: "health" },
  { id: 7, label: "Стресс", type: "stress" },
  { id: 8, label: "Психология", type: "psychology" },
  { id: 9, label: "Рекомендации", type: "tips" },
  { id: 10, label: "Заключение", type: "conclusion" },
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
    <div key={animKey} className="flex flex-1 h-full">
      <div className="flex flex-col justify-center items-center text-center px-8 md:px-16 flex-1">
        <p
          className="font-body text-sm font-light tracking-wide text-[var(--muted)] opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          Проект по биологии на тему
        </p>
        <h1
          className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-tight tracking-tight text-[var(--ink)] mt-4 max-w-xl opacity-0 animate-slide-up"
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
      <div
        className="hidden md:block w-72 shrink-0 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/a6a2f55f-4f1a-41fd-a90f-79b40c6ae719.jpg"
          alt="Витамины"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
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
    <div key={animKey} className="flex items-center h-full">
      <div
        className="hidden md:block w-56 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/c698b809-2b95-4b20-9c03-f065946bf00b.jpg"
          alt="Цель и задачи"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      <div className="flex flex-col gap-6 w-full max-w-2xl px-8 md:px-12">

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
    <div key={animKey} className="flex items-center h-full">
      <div className="w-full max-w-2xl flex flex-col gap-2 px-8 md:px-16">

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
      <div
        className="hidden md:block w-56 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/15c167dd-ac40-4264-aea8-5abb2893bab5.jpg"
          alt="Классификация витаминов"
          className="w-full h-full object-cover opacity-75"
        />
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
    <div key={animKey} className="flex items-center h-full">
      <div
        className="hidden md:block w-48 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/5c830adb-04a8-4c61-96b4-6c7fc080c22c.jpg"
          alt="Источники витаминов"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full max-w-3xl px-8 md:px-12">
        <div
          className="mb-6 text-center opacity-0 animate-slide-down"
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
    <div key={animKey} className="flex items-center h-full">
      <div className="w-full max-w-3xl flex flex-col gap-5 px-8 md:px-16">

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
      <div
        className="hidden md:block w-48 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/0291d807-4dca-4697-8378-dab5502b0067.jpg"
          alt="Дефицит витаминов"
          className="w-full h-full object-cover opacity-75"
        />
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
    <div key={animKey} className="flex items-center h-full">
      <div
        className="hidden md:block w-48 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/da30912b-9a71-49bc-806a-a9b04543ae5f.jpg"
          alt="Физическое здоровье"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-5 px-8 md:px-12">

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

function SlideStress({ animKey }: { animKey: AnimKey }) {
  const rows = [
    {
      vitamin: "C, B₅",
      effect: "Синтез гормонов стресса",
      desc: "Необходимы для выработки адреналина и кортизола надпочечниками при мобилизации энергетических резервов.",
    },
    {
      vitamin: "C, E",
      effect: "Антиоксидантная защита",
      desc: "Нейтрализуют свободные радикалы, накапливающиеся в клетках при стрессе, предотвращая окислительное повреждение тканей.",
    },
    {
      vitamin: "B₁, B₆",
      effect: "Нервная система",
      desc: "Участвуют в проведении нервных импульсов и образовании тормозных медиаторов. Дефицит проявляется раздражительностью, тревожностью и нарушениями сна.",
    },
  ];

  return (
    <div key={animKey} className="flex items-center h-full">
      <div className="w-full max-w-3xl flex flex-col gap-5 px-8 md:px-16">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 07</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--ink)] mt-1">
            Влияние на уровень стресса
          </h2>
        </div>

        <div
          className="border border-[var(--line)] overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <table className="w-full font-body">
            <thead>
              <tr className="bg-[var(--ink)] text-white">
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-24">Витамин</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-52">Влияние</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase">Механизм</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.vitamin}
                  className={`border-t border-[var(--line)] opacity-0 animate-slide-left ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: "forwards" }}
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
      <div
        className="hidden md:block w-48 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/1126bc3c-b5c0-4f48-9aa5-b1ad79d257a8.jpg"
          alt="Стресс и витамины"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
    </div>
  );
}

function SlidePsychology({ animKey }: { animKey: AnimKey }) {
  const rows = [
    {
      vitamin: "B₆, B₉",
      effect: "Серотонин и настроение",
      desc: "Участвуют в синтезе серотонина — нейромедиатора благополучия. Нехватка снижает его выработку и способствует подавленным состояниям.",
    },
    {
      vitamin: "B₁₂, B₉",
      effect: "Память и концентрация",
      desc: "Поддерживают миелиновые оболочки нервов и когнитивные функции. Дефицит проявляется ухудшением памяти, снижением концентрации и умственной утомляемостью.",
    },
    {
      vitamin: "D",
      effect: "Эмоциональный фон",
      desc: "Рецепторы витамина D обнаружены в различных отделах мозга. Сезонный недостаток часто сопровождается апатией и сонливостью.",
    },
  ];

  return (
    <div key={animKey} className="flex items-center h-full">
      <div
        className="hidden md:block w-48 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/3afc2656-8340-425e-9163-ecfd70b16f6d.jpg"
          alt="Психология и витамины"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-5 px-8 md:px-12">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 08</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--ink)] mt-1">
            Влияние на психологическую устойчивость
          </h2>
        </div>

        <div
          className="border border-[var(--line)] overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <table className="w-full font-body">
            <thead>
              <tr className="bg-[var(--ink)] text-white">
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-24">Витамин</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase w-52">Влияние</th>
                <th className="px-5 py-3 text-left text-[10px] font-medium tracking-[0.2em] uppercase">Механизм</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.vitamin}
                  className={`border-t border-[var(--line)] opacity-0 animate-slide-left ${i % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: "forwards" }}
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

function SlideTips({ animKey }: { animKey: AnimKey }) {
  const tips = [
    "Ежедневно — не менее 400–500 г разнообразных свежих овощей и фруктов.",
    "Выбирать цельнозерновые крупы и хлеб как источники витаминов группы B.",
    "Обязательно включать продукты животного происхождения (мясо, рыбу, яйца, молочные изделия) — единственный источник B₁₂.",
    "Не исключать жиры полностью: растительные масла, орехи или жирная рыба необходимы для усвоения жирорастворимых витаминов.",
    "Питание должно быть регулярным, с обязательным завтраком.",
    "В осенне-зимний сезон — после врачебной консультации — возможен приём поливитаминных комплексов для подростков при строгом соблюдении дозировок.",
  ];

  return (
    <div key={animKey} className="flex items-center h-full">
      <div className="w-full max-w-2xl flex flex-col gap-6 px-8 md:px-16">

        <div
          className="text-center opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 09</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--ink)] mt-1">
            Рекомендации для подростков
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="flex gap-5 items-start py-3.5 border-t border-[var(--line)] opacity-0 animate-slide-left"
              style={{ animationDelay: `${0.15 + i * 0.08}s`, animationFillMode: "forwards" }}
            >
              <span className="font-display text-lg font-light text-[var(--gold)] shrink-0 w-5 leading-none pt-0.5">
                {i + 1}.
              </span>
              <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed">{tip}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)]" />
        </div>

      </div>
      <div
        className="hidden md:block w-56 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/bde11643-42b0-45b0-b3ff-43ded6669bd1.jpg"
          alt="Здоровое питание для подростков"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </div>
  );
}

function SlideConclusion({ animKey }: { animKey: AnimKey }) {
  return (
    <div key={animKey} className="flex items-center h-full">
      <div
        className="hidden md:block w-56 shrink-0 self-stretch opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <img
          src="https://cdn.poehali.dev/projects/560dfb54-db46-40ce-9572-f7a695a71487/files/25ddf0bc-1de9-4944-bee8-5a042f560d58.jpg"
          alt="Заключение"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="w-full max-w-2xl flex flex-col gap-8 text-center px-8 md:px-16">

        <div
          className="opacity-0 animate-slide-down"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[var(--gold)]">Слайд 10</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[var(--ink)] mt-1">
            Заключение
          </h2>
        </div>

        <div className="w-12 h-px bg-[var(--gold)] mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }} />

        <div
          className="opacity-0 animate-slide-up"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed">
            Витамины — незаменимые участники всех обменных процессов. Они не являются источниками энергии или пластическим материалом, однако без них невозможны извлечение энергии из пищи, рост, развитие, функционирование нервной системы и иммунная защита.
          </p>
        </div>

        <div
          className="opacity-0 animate-slide-up"
          style={{ animationDelay: "0.38s", animationFillMode: "forwards" }}
        >
          <p className="font-display text-[clamp(1.1rem,2.5vw,1.6rem)] font-light text-[var(--ink)] leading-snug italic">
            «Наиболее надёжный путь — разнообразное и сбалансированное питание. Особое значение это приобретает в подростковом возрасте, когда закладывается фундамент здоровья на всю жизнь.»
          </p>
        </div>

        <div
          className="opacity-0 animate-slide-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <p className="font-body text-sm font-light text-[var(--muted)] leading-relaxed">
            Наиболее надёжный путь обеспечения организма этими веществами — разнообразное и сбалансированное питание. Особое значение рациональный рацион приобретает в подростковом возрасте, когда закладывается фундамент здоровья на последующую жизнь.
          </p>
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
      case 6:
        return <SlideStress animKey={key} />;
      case 7:
        return <SlidePsychology animKey={key} />;
      case 8:
        return <SlideTips animKey={key} />;
      case 9:
        return <SlideConclusion animKey={key} />;
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