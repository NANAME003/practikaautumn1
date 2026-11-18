import { Search, ShieldCheck, Clock } from "lucide-react";

function Benefits() {
  // В поле icon лежит сам компонент иконки (без < >), отрисуем его ниже
  const benefits = [
    {
      title: "Бесплатная диагностика",
      text: "Найдём причину поломки и назовём цену до начала ремонта",
      icon: Search,
    },
    {
      title: "Гарантия до 12 месяцев",
      text: "На все работы и установленные запчасти",
      icon: ShieldCheck,
    },
    {
      title: "Ремонт от 1 дня",
      text: "Большинство неисправностей устраняем в день обращения",
      icon: Clock,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white px-8 py-6 md:grid-cols-3">
          {benefits.map((item) => {
            // Имя компонента в JSX должно начинаться с большой буквы
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-emerald-900" strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
