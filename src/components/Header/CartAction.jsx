function CartAction({ count }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14l-1 12H6L5 8Z" />
        <path strokeLinecap="round" d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
      <span className="hidden md:inline">Корзина ({count})</span>
    </button>
  );
}

export default CartAction;