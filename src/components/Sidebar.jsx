import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  X,
} from "lucide-react";

function Sidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const closeMobileSidebar = () => {
    if (setMobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-logo">CD</div>

            <div>
              <h2>CustomerDesk</h2>
              <span>Management</span>
            </div>
          </div>

          <button
            className="mobile-close-button"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-section-title">MAIN MENU</span>

          <nav className="sidebar-nav">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMobileSidebar}
            >
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMobileSidebar}
            >
              <Users size={19} />
              <span>Customers</span>
            </NavLink>

            <NavLink
              to="/service-requests"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMobileSidebar}
            >
              <ClipboardList size={19} />
              <span>Service Requests</span>
            </NavLink>
          </nav>
        </div>

        <div className="sidebar-section sidebar-bottom">
          <span className="sidebar-section-title">SYSTEM</span>

          <button className="sidebar-link sidebar-button">
            <Settings size={19} />
            <span>Settings</span>
          </button>

          <button
            className="sidebar-link sidebar-button logout-link"
            onClick={handleLogout}
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
