import NavItem from "./NavItem.jsx";

function Navigation() {
  const navigationItems = [
    {
      label: "Главная",
      path: "/",
    },
    {
      label: "Товары",
      path: "/products",
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-6">
      {navigationItems.map((item) => (
        <NavItem key={item.path} label={item.label} path={item.path} />
      ))}
    </nav>
  );
}

export default Navigation;
