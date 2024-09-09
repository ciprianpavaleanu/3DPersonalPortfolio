import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="md:w-10 md:h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md w-8 h-8 mr-2"
      >
        <p className="blue-gradient_text">CP</p>
      </NavLink>
      <nav className="flex text-md gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
