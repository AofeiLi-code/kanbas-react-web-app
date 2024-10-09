import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="nav flex-column">
      <NavLink
        to="/Kanbas/Account/Signin"
        className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
      >
        Signin
      </NavLink> <br />

      <NavLink
        to="/Kanbas/Account/Signup"
        className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
      >
        Signup
      </NavLink> <br />

      <NavLink
        to="/Kanbas/Account/Profile"
        className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}
      >
        Profile
      </NavLink> <br />
    </div>
  );
}
