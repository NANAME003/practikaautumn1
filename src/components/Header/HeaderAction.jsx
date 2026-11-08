import AccountAction from "./AccountAction";
import CartAction from "./CartAction";
import Search from "./Search.jsx";

function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Search className="hidden w-64 md:block" />
      <AccountAction />
      <CartAction count={0} />
      
    </div>
    
  );
}

export default HeaderActions;
