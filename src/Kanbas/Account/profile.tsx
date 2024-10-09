import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h1>Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-2"
      />{/* <br /> */}
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />{/* <br /> */}
      <input
        defaultValue="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />{/* <br /> */}
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />{/* <br /> */}
      <input
        defaultValue="2000-01-01"
        type="date"
        className="form-control mb-2"
      />{/* <br /> */}
      <input
        defaultValue="alice@wonderland.com"
        type="email"
        className="form-control mb-2"
      />{/* <br /> */}
      <select defaultValue="FACULTY" className="form-control mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>{/* <br /> */}
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
