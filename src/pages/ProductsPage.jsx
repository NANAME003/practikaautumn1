import ProductCard from "../components/Categories/ProductCard.jsx";
import products from "../Products/Products.jsx";

function ProductsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Каталог
        </p>
        <h1 className="mt-2 font-serif text-4xl tracking-tight text-gray-950">
          Все товары
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              category={item.category}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;