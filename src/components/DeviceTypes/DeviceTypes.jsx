import { Link } from "react-router";
import useDeviceTypes from "../../hooks/useDeviceTypes.jsx";
import DeviceIcon from "./DeviceIcon.jsx";

function DeviceTypes() {
  const {deviceTypes, loading,error} = useDeviceTypes();
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

        {loading && <p className="mt-8 text-gray-500">Загрузка...</p>}
        {error && <p className="mt-8 text-sm text-red-600">Не удалось загрузить виды техники: {error} </p>}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deviceTypes.map((device) => (
            <Link
              key={device.id}
              to={`/services?type=${device.id}`}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-emerald-900"
            >
              <div className="flex items-start justify-between">
                {/* Цветная плашка с иконкой */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-900 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                  <DeviceIcon type={device.id} className="h-8 w-8" />
                </div>
                <span className="text-gray-400 transition-transform group-hover:translate-x-1">→</span>
              </div>
              <h3 className="mt-4 text-base font-medium text-gray-900">{device.name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{device.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeviceTypes;
