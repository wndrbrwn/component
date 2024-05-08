import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      {/* Header */}
      <header className="bg-blue-100 px-2 py-4 flex justify-between">
        {/* Logo */}
        <div className="bg-purple-100">로고</div>
        {/* NavBar */}
        <nav className="hidden md:flex gap-4">
          {/* Button1 */}
          <button className="button-style">메뉴1</button>
          {/* Button2 */}
          <button className="button-style">메뉴2</button>
          {/* Button3 */}
          <button className="button-style">로그인</button>
        </nav>
        {/* ButtonMore */}
        <button className="button-style inline-block md:hidden">...</button>
      </header>
      {/* Section */}
      <section className="bg-green-100 grow px-2">
        {/* CardList */}
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
          {/* Card */}
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
        </ul>
      </section>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}