import Button from "./Button";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-blue-100 px-2 py-4 flex justify-between">
      <Logo />
      <NavBar />
      <Button name="..." isMoreButton={true} />
    </header>
  );
};

export default Header;