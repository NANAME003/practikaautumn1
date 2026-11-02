import NavItem from "./NavItem.jsx";

function Navigation() {
  const navigationItems = [
    {
      label: "Главная",
      patch: "/",
    },
    {
      label: "Товары",
      path: "/products",
    },
  ];

  return (
    <nav>
      {navigationItems.map((item) => (
        <NavItem key={item.path} label={item.label} path={item.path} />
      ))}
    </nav>
  );
}

export default Navigation;
