# Прогресс проекта «ТехноСервис»

Файл нужен, чтобы продолжать работу на любом устройстве: здесь записано, что уже сделано и что делать дальше.

## Этапы

| № | Этап | Статус |
|---|------|--------|
| 1 | Ребрендинг и главная страница | ✅ готово |
| 2 | Каталог услуг + иконки lucide-react | ✅ готово |
| 3 | Форма заявки на ремонт | ⏳ следующий |
| 4 | Статус ремонта | ⬜ |
| 5 | Бэкенд на json-server (сохранение заявок, админка) | 🔶 частично: виды техники в админке |

Правило: **на каждом шаге делаем только текущий этап**, будущие разделы остаются заглушками (`src/pages/StubPage.jsx`).

## Что сделано

### Этап 1: ребрендинг
- Название «ТехноСервис», меню: Главная, Услуги, Заявка, Статус ремонта
- Кнопка «Оставить заявку» в шапке (`Header/RequestAction.jsx`)
- Главная: Hero (фото `public/electronics.jpg`), блок «Виды техники» (`DeviceTypes/DeviceTypes.jsx`), преимущества (`Benefits.jsx`)
- Подвал с контактами (контакты выдуманные, заменить на свои)
- `StubPage` — заглушка «Раздел в разработке» с пропсами `title` и `stage`
- `.gitignore`, `node_modules` убран из git

### Этап 2: каталог услуг
- Данные: `public/services.json` (16 услуг: `id, deviceType, name, price, duration, description`)
- Справочник видов техники (`id, name, text`), `deviceType` в услуге = `id` вида техники. Сейчас хранится в `db.json` (см. ниже)
- Хук `src/hooks/useServices.jsx` загружает услуги через `fetch`
- Страница `src/pages/ServicesPage.jsx`: фильтр по виду техники и цене, поиск, сортировка
- Ссылка с главной `/services?type=phones` сразу включает нужный фильтр (`useSearchParams`)
- Карточка услуги `Catalog/ServiceCard.jsx`, кнопка «Записаться на ремонт» ведёт на `/request?service=<id>`
- Все иконки из `lucide-react` (`DeviceTypes/DeviceIcon.jsx` — иконка по id вида техники, для новых видов запасная иконка `Wrench`)

### Часть этапа 5: админка, виды техники на json-server
- Админка: `layouts/AdminLayout.jsx` (боковое меню), страница `pages/AdminDeviceTypes.jsx`
- Добавление, редактирование и удаление видов техники (`components/Admin/DeviceTypeForm.jsx`, `DeviceTypesTable.jsx`)
- Данные хранятся в `db.json`, сервер: `npm run server` (json-server на порту 3001)
- Адрес API: `http://localhost:3001/deviceTypes`. Запросы: `GET` загрузка, `POST` добавление (id создаёт сервер), `PATCH` изменение, `DELETE` удаление
- Хук `src/hooks/useDeviceTypes.jsx` загружает виды техники с сервера. Используется на главной (`DeviceTypes.jsx`) и в каталоге (`ServicesPage.jsx`), в `ServiceGrid.jsx` справочник передаётся через props
- В каталоге фильтр из адреса проверяется после загрузки справочника (`activeType` в `ServicesPage.jsx`)
- Старый файл `src/data/deviceTypes.js` удалён

## Следующий шаг: этап 3, форма заявки

План:
1. Страница `src/pages/RequestPage.jsx` вместо заглушки на `/request`
2. Поля: имя, телефон, вид техники (хук `useDeviceTypes`), услуга (хук `useServices`), описание поломки
3. Если в адресе есть `?service=<id>`, услуга и вид техники выбираются автоматически
4. Проверка полей (обязательные, формат телефона), сообщения об ошибках
5. После отправки показать «Заявка принята» с номером заявки. **Пока без сохранения**, это этап 5
6. Удалить старую заглушку `CartPage.jsx` и маршрут `/cart`

## Известные мелочи
- Поиск в шапке (`Header/Search.jsx`) только для вида, не ищет
- `npm run build` падает на проверке TypeScript (`tsc`) в `App.tsx` и `main.tsx`: дело в настройках `tsconfig.json`, сам `npx vite build` собирается
- В `public/` лежат старые картинки магазина (yoga.jpg, vase.jpg и др.), их можно удалить

## Как начать работу на новом устройстве

```bash
git clone https://github.com/NANAME003/practikaautumn1.git
cd practikaautumn1
npm install      # восстановит node_modules
npm run server   # в отдельном терминале: json-server на http://localhost:3001
npm run dev      # сайт на http://localhost:5173
```
Без `npm run server` виды техники не загрузятся: на главной и в каталоге будет сообщение об ошибке.
Затем запусти Claude Code в папке проекта и напиши: «прочитай docs/PROGRESS.md и продолжим с этапа 3».
