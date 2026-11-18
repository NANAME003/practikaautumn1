import {Link} from "react-router";
import { User } from "lucide-react";
function AccountAction() {
  return (
    <Link to="/login">
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
    >
      <User className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      <span className="hidden md:inline">Войти</span>
    </button>
    </Link>
  );
}

export default AccountAction;