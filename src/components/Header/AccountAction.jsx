function AccountAction() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
      <span className="hidden md:inline">Войти</span>
    </button>
  );
}

export default AccountAction;