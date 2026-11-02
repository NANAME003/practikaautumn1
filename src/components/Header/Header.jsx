import Navigation from "./Navigation.jsx";
import HeaderActions from "./HeaderAction.jsx";
import Brand from "./Brands.jsx";

function Header() {
  return (
    <header>
      <Brand name="Витрина" />

      <Navigation />

      <HeaderActions />
    </header>
  );
}

export default Header;
