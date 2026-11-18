import {useState} from "react";
import FilterPanel from "../components/Catalog/FilterPanel.jsx";
import ProductGrid from "../components/Catalog/ProductGrid.jsx";
import useProducts from "../hooks/useProducts.jsx";
import CatalogToolbar from "../components/Catalog/CatalogToolbar.jsx";

const PRICE_LIMIT = 15000;

function ProductsPage() {
  const [sort, setSort] = useState("name");
  const [query, setQuery] = useState("");
  const {products,loading,error} = useProducts();
  const [category, setCategory]=useState("");
  const [maxPrice, setMaxPrice]= useState(PRICE_LIMIT);
  const categoryNames=[...new Set(products.map((p) => p.category))];
  const filtered = products.filter(
    (p) => (category === "" || p.category === category) && p.price <= maxPrice && p.name.toLowerCase().includes(query.trim().toLowerCase()));
    const sorted=[...filtered].sort((a,b) =>{
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price -a.price;
      return a.name.localeCompare(b.name,"ru");
    })

  function reset() {
    setCategory("");
    setMaxPrice(PRICE_LIMIT);
    setQuery("");
    setSort("name");
  }
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-sm text-gray-500">Каталог </p>
        <h1 className="text-3xl font-bold">Все товары</h1>

        {loading && <p className="mt-6 text-gray-500">Загрузка...</p>}
        {error && (<p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Не удалось загрузить товары,{error}</p>
          )}

          {!loading && !error &&(

          

        <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
          <FilterPanel
          categories={categoryNames}
          category={category}
          onCategoryChange={setCategory}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          priceLimit={PRICE_LIMIT}
          onReset={reset} />
          <div>
          <CatalogToolbar
          count={filtered.length}
          total={products.length} 
          query={query}
          onQueryChange={setQuery}
          sort={sort}
          onSortChange={setSort}
          />

          <ProductGrid items={sorted} onReset={reset} />
          </div>
          
          
        </div>
          )}
    </section>

    
  );
}

export default ProductsPage; 