import { Search as SearchIcon } from "lucide-react";

function CatalogToolbar({ count, total, query, onQueryChange, sort, onSortChange }) {
    return (
      <div className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative sm:w-80">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Поиск по названию"
              className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
            />
          </div>
  
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-400"
          >
            <option value="name">По названию</option>
            <option value="price-asc">Сначала дешёвые</option>
            <option value="price-desc">Сначала дорогие</option>
          </select>
        </div>
  
        <p className="mt-4 text-sm text-gray-500">
          Найдено: <span className="font-medium text-gray-900">{count}</span> из {total}
        </p>
      </div>
    );
  }
  
  export default CatalogToolbar;