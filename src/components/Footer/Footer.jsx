import Brand from "../Header/Brands.jsx";

function Footer() {
 
  
    const columns=[
      {title:"каталог",
        links:[
          {label:"Все товары", path:"/products"},
          {label:"Новинки", path:"/products?sort=new"},
          {label:"Скидки", path:"/products?sale=1"}
        ]
      },
      {title:"Покупателям",
        links:[
          {label:"Корзина", path:"/cart"},
          {label:"Вход", path:"/login"},
          {label:"Регистрация", path:"/register"}
        ]
      },
      {
        title:"Магазин",
  
        links:[
        {label:"Админ-панель", path:"/admin"},
        {label:"Управление товарами", path:"/admin/products"},
        {label:"Категории", path:"/admin/categories"}
        ]
      }
    ];
  
  
    return (
      
        <footer className="border-t border-gray-200 bg-stone-50">
          <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
                <div>
                  <Brand name="Витрина" />
                  <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                    Учебный интернет-магазин: витрина, корзина и админ панель с CRUD на React.
                  </p>
                </div>
                {columns.map((column) =>(
                  <div key={column.title}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">{column.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {column.links.map((link)=>(
                          <li key={link.label}>
                            <a href={link.path} className="text-sm text-gray-600 transition-colors hover:text-gray-950">{link.label}
                              </a>
                          </li>
                        ))}
                      </ul>
              </div>
                ))}
                </div>
                <div className="flex flex-col gap-2 border-t border-gray-200 py-6 text-xs text-gray-400 md:flex-row md:justify-between">
                  <p>© 2026 Витрина. Учебный проект.</p>
                  <p> Дизайн-система: React,Tailwind CSS, React Router</p>
                </div>
            </div>
        </footer>
      
    );
  }

  export default Footer;