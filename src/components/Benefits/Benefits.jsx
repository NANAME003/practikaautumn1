function Benefits() {
  const benefits = [
    {
      title: "Доставка 1–3 дня",
      text: "По всей России, бесплатно от 5 000 ₽",
      icon: (
        <>
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </>
      )
    },
    {
      title: "Гарантия качества",
      text: "Проверяем каждую партию товара",
      icon: (
        <>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )
    },
    {
      title: "Возврат 30 дней",
      text: "Без вопросов и лишних формальностей",
      icon: (
        <>
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
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