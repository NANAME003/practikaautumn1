import { Link } from "react-router";
import { Wrench } from "lucide-react";

// Кнопка в шапке: ведёт на страницу оформления заявки на ремонт
function RequestAction() {
  return (
    <Link
      to="/request"
      className="flex items-center gap-2 rounded-lg bg-emerald-900 px-3 py-2 text-sm text-white transition-colors hover:bg-emerald-800"
    >
      <Wrench className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      <span className="hidden md:inline">Оставить заявку</span>
    </Link>
  );
}

export default RequestAction;
