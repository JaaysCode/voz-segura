import Categories from "./Categories";
import Logo from "./Logo";

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <Logo />
      <Categories />

    </nav>
  );
};

export default Navbar;