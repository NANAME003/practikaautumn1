function ProductCard({ category, name, price, image }) {
    return (
    <div className="w-full">
    <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
    <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>
    <p className="mt-4 text-xs text-gray-400">{category}</p>
    <h3 className="mt-1 truncate text-sm font-medium text-gray-900">{name}</h3>
    <div className="mt-3 flex items-center justify-between gap-2">
    <span className="text-base font-medium text-gray-900">
    {price.toLocaleString("ru-RU")} ₽
    </span>
    <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-gray-500">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
    В наличии
    </span>
    </div>
    <div className="mt-4 flex items-center justify-between gap-3">
    <button type="button" className="text-sm text-gray-600 transition-colors hover:text-gray-950">
    Подробнее
    </button>
    <button
    type="button"
    className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
    >
    В корзину
    </button>
    </div>
    </div>
    );
    }
    
    export default ProductCard;