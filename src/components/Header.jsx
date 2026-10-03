import { useLocation } from "react-router-dom";
import { Menu, Bell, ChevronDown } from "lucide-react";

function Header({ setMobileOpen }) {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/customers") {
      return {
        title: "Customers",
        subtitle: "Manage and view your customers",
      };
    }

    return {
      title: "Dashboard",
      subtitle: "Overview of your service management",
    };
  };

  const page = getPageTitle();

  const userEmail = localStorage.getItem("userEmail") || "admin@example.com";

  return (
    <header className="top-header">
      <div className="header-left">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div>
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
        </div>
      </div>

      <div className="header-right">
        <button className="notification-button">
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <div className="header-user">
          <div className="user-avatar">KS</div>

          <div className="user-info">
            <strong>Kumar Shivam</strong>
            <span>{userEmail}</span>
          </div>

          <ChevronDown size={17} />
        </div>
      </div>
    </header>
  );
}

export default Header;