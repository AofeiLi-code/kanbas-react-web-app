import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="nav flex-column">
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={({ isActive }) => (isActive ? "nav-link selected" : "nav-link")}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
