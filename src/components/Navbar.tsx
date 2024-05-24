import Link from "next/link";
import NavigationLinks from "@/navigation";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          {NavigationLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <Link className="nav-link" key={link.id} href={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default Navbar;
