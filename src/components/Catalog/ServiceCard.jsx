import { Link } from "react-router";
import DeviceIcon from "../DeviceTypes/DeviceIcon.jsx";

// Карточка одной услуги в каталоге.
// deviceTypeName — название вида техники (например «Ноутбуки и ПК»),
// его подставляет ServiceGrid по id из справочника deviceTypes.
function ServiceCard({ id, name, price, duration, description, deviceType, deviceTypeName }) {
  return (
    <div className="flex w-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-900">
          <DeviceIcon type={deviceType} className="h-6 w-6" />
        </div>
        <p className="text-xs text-gray-400">{deviceTypeName}</p>
      </div>
      <h3 className="mt-3 text-base font-medium text-gray-900">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-base font-medium text-gray-900">
          от {price.toLocaleString("ru-RU")} ₽
        </span>
        <span className="text-xs text-gray-500">Срок: {duration}</span>
      </div>

      {/* Ведёт на форму заявки и передаёт id услуги в адресе (?service=...).
          Сама форма появится на этапе 3. */}
      <Link
        to={`/request?service=${id}`}
        className="mt-5 rounded-lg bg-emerald-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-800"
      >
        Записаться на ремонт
      </Link>
    </div>
  );
}

export default ServiceCard;
