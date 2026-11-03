import PopularCategories from "./PopularCategories";

function PopularItems(){
    const popularItems = [
        {name: "Дом", image:"/public/home.jpg", path:"/products?category=home"},
        {name: "Электроника", image:"/public/electronics.jpg", path:"/products?category=electronics"},
        {name: "Одежда", image:"/public/clothes.jpg", path:"/products?category=clothes"},
        {name: "Спорт", image:"/public/sport.jpg", path:"/products?category=sport"},
    ];

    return(
        <section className="bg-stone-50">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                            Категории
                        </p>
                        <h2 className="mt-2 font-serif text-4xl tracking-tight text-gray-950">
                            Популярные категории
                            </h2>
                    </div>
                    <a href="/products" className="text-sm text-gray-600 transition-colors hover:text-gray-950">Весь каталог →
                    </a>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {popularItems.map((item) => (
                        <PopularCategories
                        key={item.path}
                        name={item.name}
                        image={item.image}
                        path={item.path}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularItems;