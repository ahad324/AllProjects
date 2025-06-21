import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/ahad324/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/abdul-ahad-a08263273"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
