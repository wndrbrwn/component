import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-blue-100 px-2 py-4 flex justify-between">
      <Logo />
      <NavBar />
      {/* ButtonMore */}
      <button className="button-style inline-block md:hidden">...</button>
    </header>
  );
};

export default Header;