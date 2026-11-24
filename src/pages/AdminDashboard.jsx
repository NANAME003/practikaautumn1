import {ClipboardList, Clock, Wrench, CircleCheck, Smartphone,Banknote, Coins, Receipt, Percent,Star} from "lucide-react";
import AdminPageHeader from "../components/Admin/AdminPageHeader.jsx";
import StatCard from "../components/Admin/StatCard.jsx";
import ChartCard from "../components/Admin/ChartCard.jsx";
import DonutChart from "../components/Admin/DonutChart.jsx";
import ColumnChart from "../components/Admin/ColumnChart.jsx";
import BarChart from "../components/Admin/BarChart.jsx";
import useRequests from "../hooks/useRequests.jsx";
import useServices from "../hooks/useServices.jsx";
import useDeviceTypes from "../hooks/useDeviceTypes.jsx";
import RecentRequests from "../components/Admin/RecentRequests.jsx";

function AdminDashboard() {
    const {requests, loading, error} = useRequests();
    const {services} = useServices();
    const {deviceTypes} = useDeviceTypes();

    const newCount = requests.filter((r) => r.status === "new").length;
    const inProgressCount = requests.filter((r) => r.status === "in_progress").length;
    const doneCount = requests.filter((r) => r.status === "done").length;

    const prices = services.map((s) => s.price);
    const averagePrice = prices.length > 0
    ? Math.round(prices.reduce((sum, price ) => sum + price, 0) /prices.length)
    : 0;

    const byStatus =[
        {label: "Новые", value: newCount, color: "#f59e0b"},
        {label: "В работе", value: inProgressCount, color: "#0ea5e9"},
        {label: "Выполнены", value:doneCount, color:"#047857"},
    ]


    const byDay =[];
    for(let i=6; i>=0; i--) {
        const day =new Date();
        day.setDate(day.getDate() - i);
        const key =`${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2,"0")}-${String(day.getDate()).padStart(2,"0")}`;
        byDay.push({
            label: day.toLocaleDateString("ru-RU", {day: "numeric", month:"short"}),
            value: requests.filter((r) => r.createdAt === key).length,
        });
    }

    const byDeviceType = deviceTypes.map((type) => ({
        label:type.name,
        value: requests.filter((r) => r.deviceType === type.id).length,
    }));

    const priceByDeviceType = deviceTypes.map((type) => {
        const typePrices = services.filter((s) => s.deviceType === type.id).map((s) => s.price);
        const sum = typePrices.reduce((total,price) => total + price, 0);
        return {
            label: type.name,
            value:typePrices.length > 0 ? Math.round(sum / typePrices.length) : 0,
        };
    });

    const recentRequests = [...requests]
    .sort((a,b) => b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id))
    .slice(0,5);

    const getRequestPrice = (request) => {
        const service = services.find((s) => s.id === request.serviceId);
        return service ? service.price : 0;
    };

    const revenue = requests
    .filter((r) => r.status === "done")
    .reduce ((sum,r) => sum + getRequestPrice(r), 0);

    const averageCheck = doneCount > 0 ? Math.round(revenue / doneCount) : 0;

    const donePercent = requests.length > 0
    ? Math.round((doneCount / requests.length) * 100)
    : 0;

    const popularService = services
    .map((s) => ({
        name: s.name,
        count: requests.filter((r) => r.serviceId === s.id).length,
    }))
    .reduce((best, item) => (item.count > best.count ? item : best), {name: "—", count: 0 });

    return (
        <section>
            <AdminPageHeader label ="Обзор" title="Dashboard" />

            {loading && <p className="text-gray-500">Загрузка...</p>}
            {error && <h1 className="text-red-500">Запущен ли сервер ?</h1>}
            {!loading && !error && (
                <>
                <h2 className="mb-3 text-sm font-medium text-gray-500">Заявки</h2>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard icon={ClipboardList} label="Всего заявок" value={requests.length} hint="За всё время" />
                    <StatCard icon={Clock} label="Новые" value={newCount} hint="ждут приёма в работу" color="bg-amber-50 text-amber-700" />
                    <StatCard icon={Wrench} label="В работе" value={inProgressCount} hint="сейчас ремонтируются" color="bg-sky-50 text-sky-700" />
                    <StatCard icon={CircleCheck} label="Выполнены" value={doneCount} hint="ремонт завершён" />
                </div>

                <h2 className="mb-3 mt-8 text-sm font-medium text-gray-500">Справочник</h2>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard icon={Wrench} label="Услуг в каталоге" value={services.length} hint="в public/services.json" />
                    <StatCard icon={Smartphone} label="Видов техники" value={deviceTypes.length} hint="В db.json" />
                    <StatCard icon={Banknote} label="Средняя цена услуги " value={`${averagePrice.toLocaleString("ru-RU")}₽`} hint ="по всем услугам каталога" />
                </div>

                <h2 className="mb-3 mt-8 text-sm font-medium text-gray-500">Аналитика</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                <ChartCard title="Заявки по статусам" hint="доля каждого статуса от всех заявок">
                    <DonutChart items={byStatus} />
                </ChartCard>
                <ChartCard title="Заявки по дням" hint="последние 7 дней">
                    <ColumnChart items={byDay} />
                </ChartCard>
                <ChartCard title="Заявки по видам техники" hint="какую технику чаще приносят в ремонт">
                    <BarChart items={byDeviceType} />    
                </ChartCard>
                <ChartCard title="Средняя цена по видам техники" hint="по услугам каталога">
                    <BarChart items={priceByDeviceType} suffix=" ₽" />    
                </ChartCard>    
                
                </div> 

                <h2 className="mb-3 mt-8 text-sm font-medium text-gray-500">Дополнительно</h2>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard icon={Coins} label="Выручка" value={`${revenue.toLocaleString("ru-RU")} ₽`} hint="по выполненным заявкам" />
                    <StatCard icon={Receipt} label="Средний чек" value={`${averageCheck.toLocaleString("ru-RU")} ₽`} hint="на одну выполненную заявку" color="bg-sky-50 text-sky-700" />
                    <StatCard icon={Percent} label="Выполнено" value={`${donePercent}%`} hint="от всех заявок" />
                    <StatCard icon={Star} label="Популярная услуга" value={popularService.count} hint={popularService.name} color="bg-amber-50 text-amber-700" />
                </div>

                <h2 className="mb-3 mt-8 text-sm font-medium text-gray-500">Последние заявки</h2>
                <ChartCard title="Последние заявки" hint="5 самых свежих заявок">
                    <RecentRequests requests={recentRequests} services={services} deviceTypes={deviceTypes} />
                </ChartCard>
                </>
            )}
        </section>
    );
}

export default AdminDashboard;