import { useState } from "react";
import { useSearchParams } from "react-router";
import FilterPanel from "../components/Catalog/FilterPanel.jsx";
import ServiceGrid from "../components/Catalog/ServiceGrid.jsx";
import CatalogToolbar from "../components/Catalog/CatalogToolbar.jsx";
import useServices from "../hooks/useServices.jsx";
import deviceTypes from "../data/deviceTypes.js";

const PRICE_LIMIT = 5000;

// Берёт вид техники из адреса (/services?type=phones).
// Если такого вида нет в справочнике, показываем все услуги.
function getInitialType(searchParams) {
  const type = searchParams.get("type") ?? "";
  const exists = deviceTypes.some((item) => item.id === type);
  return exists ? type : "";
}

function ServicesPage() {
  const [searchParams] = useSearchParams();
  const { services, loading, error } = useServices();

  const [deviceType, setDeviceType] = useState(getInitialType(searchParams));
  const [maxPrice, setMaxPrice] = useState(PRICE_LIMIT);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("name");

  // 1) фильтруем: вид техники + цена + поиск по названию
  const filtered = services.filter(
    (s) =>
      (deviceType === "" || s.deviceType === deviceType) &&
      s.price <= maxPrice &&
      s.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  // 2) сортируем копию массива ([...filtered]), чтобы не менять исходный
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
    <section className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-sm text-gray-500">Каталог</p>
      <h1 className="text-3xl font-bold">Услуги сервисного центра</h1>

      {loading && <p className="mt-6 text-gray-500">Загрузка...</p>}
      {error && (
        <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Не удалось загрузить услуги: {error}
        </p>
      )}

      {!loading && !error && (
        <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
          <FilterPanel
            options={deviceTypes}
            selected={deviceType}
            onSelectedChange={setDeviceType}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            priceLimit={PRICE_LIMIT}
            onReset={reset}
          />
          <div>
            <CatalogToolbar
              count={filtered.length}
              total={services.length}
              query={query}
              onQueryChange={setQuery}
              sort={sort}
              onSortChange={setSort}
            />
            <ServiceGrid items={sorted} onReset={reset} />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesPage;
