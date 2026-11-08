import PopularCategories from "./PopularCategories";
import {useRef} from "react";

function PopularItems(){
    const listRef = useRef(null);
    const popularItems = [
        {name: "Дом", image:"/home.jpg", path:"/products?category=home"},
        {name: "Электроника", image:"/electronics.jpg", path:"/products?category=electronics"},
        {name: "Одежда", image:"/clothes.jpg", path:"/products?category=clothes"},
        {name: "Спорт", image:"/sport.jpg", path:"/products?category=sport"},
    ];

    const products = [
        {id: 1, category:"Спорт", name:"Коврик для йоги", price: 2900,image:"/yoga.jpg"},
        {id: 2, category:"Спорт", name:"Кроссовки Flash", price: 5000,image:"/sneakers.jpg"},
        {id: 3, category:"Дом", name:"Ваза", price: 500,image:"/vase.jpg"},
        {id: 4, category:"Дом", name:"Настольная лампа",price: 1268,image:"/lamp.jpg"},
        {id: 5, category:"Электроника", name:"Наушники", price: 3000,image:"/headphones.png"},
        {id: 6, category:"Электроника", name:"Смартфон", price: 15000,image:"/smartphone.jpeg"},
    ]

    return(
        <>
       <section className="bg-white">
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

      <section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 py-12">
    <div className="flex items-end justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Выбор покупателей
        </p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-gray-950">
          Популярные товары
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <a href="/products" className="mr-2 text-sm text-gray-600 transition-colors hover:text-gray-950">
          Смотреть все →
        </a>
        <button
          type="button"
          onClick={() => listRef.current.scrollBy({ left: -300, behavior: "smooth" })}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => listRef.current.scrollBy({ left: 300, behavior: "smooth" })}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-50"
        >
          →
        </button>
      </div>
    </div>

    <div ref={listRef} className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
      {products.map((item) => (
        <div key={item.id} className="w-64 shrink-0 snap-start">
          <img
            src={item.image}
            alt={item.name}
            className="aspect-square w-full rounded-xl bg-gray-100 object-cover"
          />
          <p className="mt-4 text-xs text-gray-400">{item.category}</p>
          <h3 className="mt-1 text-sm font-medium text-gray-900">{item.name}</h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-medium text-gray-900">
              {item.price.toLocaleString("ru-RU")} ₽
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
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
      ))}
    </div>
  </div>
</section>

        </>
    );
}

export default PopularItems;