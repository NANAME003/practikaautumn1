function ProductCard({ name, price, image, category }) {
    return (
      <div className="flex w-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-3">
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
  
        <p className="mt-3 text-xs text-gray-400">{category}</p>
        <h3 className="text-sm font-medium">{name}</h3>
  
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-700">{price.toLocaleString("ru-RU")} ₽</span>
          <span className="text-xs text-gray-500">В наличии</span>
        </div>
  
        <div className="mt-auto flex items-center justify-between pt-4">
          <button type="button" className="text-sm text-gray-500 hover:text-gray-800">
            Подробнее
          </button>
          <button type="button" className="rounded-lg bg-emerald-900 px-3 py-1.5 text-sm text-white">
            В корзину
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;