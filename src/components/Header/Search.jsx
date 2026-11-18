// Иконку импортируем под другим именем, потому что компонент
// в этом файле уже называется Search
import { Search as SearchIcon } from "lucide-react";

function Search({className=""}) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Поиск услуг"
        className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
      />
    </div>
  );
}

export default Search;