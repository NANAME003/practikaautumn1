import Brand from "../Header/Brands.jsx";


function Footer() {
 
  
    const columns=[
      {title:"Услуги",
        links:[
          {label:"Все услуги", path:"/services"},
          {label:"Виды техники", path:"/"},
        ]
      },
      {title:"Клиентам",
        links:[
          {label:"Оставить заявку", path:"/request"},
          {label:"Статус ремонта", path:"/status"},
          {label:"Вход", path:"/login"}
        ]
      },
      {
        title:"Сервисный центр",

        links:[
        {label:"Админ-панель", path:"/admin"},
        ]
      }
    ];
  
  
    return (
      
        <footer className="border-t border-gray-200 bg-stone-50">
          <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
                <div>
                  <Brand name="ТехноСервис" />
                  <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                    Сервисный центр по ремонту и обслуживанию техники.
                  </p>
                  <p className="mt-3 text-sm text-gray-600">+7 (900) 000-00-00</p>
                  <p className="text-sm text-gray-600">г. Москва, ул. Примерная, 1</p>
                  <p className="text-sm text-gray-600">Пн–Сб: 10:00–20:00</p>
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
                  <p>© 2026 ТехноСервис. Учебный проект.</p>
                  <p> Дизайн-система: React,Tailwind CSS, React Router</p>
                </div>
            </div>
        </footer>
      
    );
  }

  export default Footer;