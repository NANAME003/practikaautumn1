import { useState } from "react";
import { useSearchParams } from "react-router";
import {SlidersHorizontal} from "lucide-react";
import FilterPanel from "../components/Catalog/FilterPanel.jsx";
import ServiceGrid from "../components/Catalog/ServiceGrid.jsx";
import CatalogToolbar from "../components/Catalog/CatalogToolbar.jsx";
import useServices from "../hooks/useServices.jsx";
import useDeviceTypes from "../hooks/useDeviceTypes.jsx";

const PRICE_LIMIT = 5000;


function ServicesPage() {
  const [searchParams] = useSearchParams();
  const {services, loading, error } = useServices();
  const {deviceTypes, loading: typesLoading, error:typesError} = useDeviceTypes();
  const [deviceType, setDeviceType] = useState(searchParams.get("type") ?? "");
  const [maxPrice, setMaxPrice] = useState(PRICE_LIMIT);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");
  const [showFilters, setShowFilters]= useState(false);
  const activeType = deviceTypes.some((t) => t.id === deviceType) ? deviceType : "";

  
  const filtered = services.filter(
    (s) =>
      (activeType === "" || s.deviceType === activeType) &&
      s.price <= maxPrice &&
      s.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;

    return a.name.localeCompare(b.name, "ru");
  });

  function reset() {
    setDeviceType("");
    setMaxPrice(PRICE_LIMIT);
    setQuery("");
    setSort("name");
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <p className="text-sm text-gray-500">Каталог</p>
      <h1 className="text-2xl font-bold sm:text-3xl">Услуги сервисного центра</h1>

      {(loading || typesLoading) && <p className="mt-6 text-gray-500">Загрузка...</p>}
      {(error || typesError) && (
        <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Не удалось загрузить услуги: {error || typesError}
        </p>
      )}

      {!loading && !typesLoading && !error && !typesError && (
        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[260px_1fr] lg:gap-8">
          <button type="button" onClick={() => setShowFilters(!showFilters)} className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 lg:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
            </button>
            <div className={showFilters ? "block":"hidden lg:block"}>
          <FilterPanel
            options={deviceTypes}
            selected={activeType}
            onSelectedChange={setDeviceType}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            priceLimit={PRICE_LIMIT}
            onReset={reset}
          />
          </div>
          <div>
            
            <CatalogToolbar
              count={filtered.length}
              total={services.length}
              query={query}
              onQueryChange={setQuery}
              sort={sort}
              onSortChange={setSort}
            />
            <ServiceGrid items={sorted} deviceTypes={deviceTypes} onReset={reset} />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesPage;
