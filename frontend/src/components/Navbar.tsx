import { NavLink } from "react-router";

function Navbar() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600";

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <NavLink to="/" className="text-lg font-bold text-slate-900">
            HelpDesk Lite
          </NavLink>
          <p className="text-sm text-slate-500">IT Support Dashboard</p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <NavLink to="/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>

          <NavLink to="/tickets/new" className={linkClasses}>
            Create Ticket
          </NavLink>

          <NavLink to="/login" className={linkClasses}>
            Login
          </NavLink>

          <NavLink to="/register" className={linkClasses}>
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;