import { Smartphone, Laptop, Tv, WashingMachine, Microwave, Gamepad2 } from "lucide-react";

// Иконки видов техники из библиотеки lucide-react.
// Ключ объекта совпадает с id в src/data/deviceTypes.js ("phones", "laptops" ...),
// значение — сам компонент иконки.
const ICONS = {
  phones: Smartphone,
  laptops: Laptop,
  tv: Tv,
  large: WashingMachine,
  small: Microwave,
  consoles: Gamepad2,
};

// type — id вида техники, className — размер и цвет (классы Tailwind)
function DeviceIcon({ type, className = "h-6 w-6" }) {
  const Icon = ICONS[type];
  if (!Icon) return null; // неизвестный вид техники — ничего не рисуем

  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export default DeviceIcon;
