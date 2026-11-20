import { LayoutDashboard, ClipboardList,Wrench,Smartphone } from "lucide-react";

const adminMenu=[
    {label: "Обзор", path:"/admin", icon: LayoutDashboard},
    {label: "Заявки", path:"/admin/requests", icon: ClipboardList},
    {label: "Услуги", path:"/admin/services", icon:Wrench},
    {label: "Виды техники", path:"/admin/devices", icon:Smartphone},
];

export default adminMenu;