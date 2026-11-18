import {Link} from "react-router";
function HeroActions() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <Link to="/request" className="rounded-lg bg-emerald-900 px-6 py-3 text-sm
      font-medium text-white transition-colors hover:bg-emerald-800">
        Оставить заявку
      </Link>

      <Link to="/status" className="rounded-lg border border-gray-200 bg-white px-6
      py-3 text-sm font-medium text-gray-800 transition-colors
      hover:bg-gray-50">
        Узнать статус ремонта
      </Link>
    </div>
  );
}

export default HeroActions;
