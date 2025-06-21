import ThemeChanger from "./ThemeChanger";
import "../styles/Nav.css";
import Logo from "/Logo.jpg";
function Nav() {
  return (
    <nav>
      <div className="logo-text">
        <img src={Logo} alt="Logo" className="logo" />
        <pre>𝓐𝓫𝓭𝓾𝓵𝓐𝓱𝓪𝓭</pre>
      </div>
      <header>All Projects</header>
      <ThemeChanger />
    </nav>
  );
}

export default Nav;
