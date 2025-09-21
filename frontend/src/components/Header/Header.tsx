import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Categorías", path: "/categories" },
    { name: "Cerveza Random", path: "/random-beer" },
  ];

  return (
    <nav className="bg-gradient-to-b from-amber-50 to-amber-200 p-4 shadow-md sticky top-0 z-50 junius-irish">
      <ul className="flex justify-center lg:justify-around gap-8">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path}>
            <li
              className={`
                relative px-3 py-2 text-lg lg:text-xl font-semibold cursor-pointer transition-all duration-300
                hover:text-amber-900 hover:scale-110
                ${
                  location.pathname === item.path
                    ? "text-amber-900 after:content-[''] after:block after:h-1 after:w-full after:bg-amber-700 after:rounded-full after:absolute after:bottom-0 after:left-0"
                    : "text-gray-700"
                }
              `}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
