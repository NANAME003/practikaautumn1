import { Link } from "react-router";

// Виды техники, которые ремонтирует сервисный центр.
// Данные лежат в массиве: чтобы добавить новый вид, достаточно дописать объект.
// На этапе 2 эти данные переедут в JSON-файл вместе с услугами.
const deviceTypes = [
  { id: "phones", name: "Смартфоны и планшеты", text: "Замена экрана, батареи, разъёмов, ремонт после воды" },
  { id: "laptops", name: "Ноутбуки и ПК", text: "Чистка, замена матрицы и клавиатуры, апгрейд, установка ПО" },
  { id: "tv", name: "Телевизоры", text: "Ремонт подсветки, блока питания, замена матрицы" },
  { id: "large", name: "Крупная бытовая техника", text: "Стиральные и посудомоечные машины, холодильники" },
  { id: "small", name: "Мелкая бытовая техника", text: "Кофемашины, пылесосы, микроволновки" },
  { id: "consoles", name: "Игровые приставки", text: "Чистка, замена термопасты, ремонт геймпадов" },
];

function DeviceTypes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Что ремонтируем
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-gray-950">
              Виды техники
            </h2>
          </div>
          <Link to="/services" className="text-sm text-gray-600 transition-colors hover:text-gray-950">
            Все услуги →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deviceTypes.map((device) => (
            <Link
              key={device.id}
              to="/services"
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-emerald-900"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">{device.name}</h3>
                <span className="text-gray-400 transition-transform group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-500">{device.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeviceTypes;
