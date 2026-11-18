function Benefits() {
  const benefits = [
    {
      title: "Бесплатная диагностика",
      text: "Найдём причину поломки и назовём цену до начала ремонта",
      icon: (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </>
      )
    },
    {
      title: "Гарантия до 12 месяцев",
      text: "На все работы и установленные запчасти",
      icon: (
        <>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )
    },
    {
      title: "Ремонт от 1 дня",
      text: "Большинство неисправностей устраняем в день обращения",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white px-8 py-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-6 w-6 shrink-0 text-emerald-900"
              >
                {item.icon}
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="mt-1 text-xs text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;