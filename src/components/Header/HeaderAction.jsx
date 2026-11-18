import AccountAction from "./AccountAction";
import RequestAction from "./RequestAction.jsx";
import Search from "./Search.jsx";

function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Search className="hidden w-64 md:block" />
      <AccountAction />
      <RequestAction />
      
    </div>
    
  );
}

export default HeaderActions;
