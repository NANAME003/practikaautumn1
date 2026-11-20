import { Smartphone, Laptop, Tv, WashingMachine, Microwave, Gamepad2 } from "lucide-react";


const ICONS = {
  phones: Smartphone,
  laptops: Laptop,
  tv: Tv,
  large: WashingMachine,
  small: Microwave,
  consoles: Gamepad2,
};


function DeviceIcon({ type, className = "h-6 w-6" }) {
  const Icon = ICONS[type];
  if (!Icon) return null; 

  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export default DeviceIcon;
