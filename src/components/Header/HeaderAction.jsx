import AccountAction from "./AccountAction";
import CartAction from "./CartAction";
import Search from "./Search.jsx";

function HeaderActions() {
  return (
    <div>
      <Search />

      <AccountAction />

      <CartAction count={0} />
    </div>
  );
}

export default HeaderActions;
