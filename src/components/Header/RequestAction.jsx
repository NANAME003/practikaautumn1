import { Link } from "react-router";

// Кнопка в шапке: ведёт на страницу оформления заявки на ремонт
function RequestAction() {
  return (
    <Link
      to="/request"
      className="flex items-center gap-2 rounded-lg bg-emerald-900 px-3 py-2 text-sm text-white transition-colors hover:bg-emerald-800"
    >
      {/* Иконка гаечного ключа */}
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z"
        />
      </svg>
      <span className="hidden md:inline">Оставить заявку</span>
    </Link>
  );
}

export default RequestAction;
