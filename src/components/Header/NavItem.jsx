import { NavLink } from "react-router";

function NavItem({ label, path }) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        isActive
          ? "text-sm text-gray-950"
          : "text-sm text-gray-600 transition-colors hover:text-gray-950"
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;