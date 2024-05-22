import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";
import Data from "./Data.jsx";

function Container() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <section>
        {Data.map((project, index) => (
          <div className="project" key={index}>
            <LazyLoad
              key={index}
              height={400}
              offset={500}
              placeholder={<Loader />}
            >
              <div className="Image">
                <img src={project.imgUrl} alt={project.altText} />
              </div>
            </LazyLoad>
            <div className="Details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="Buttons">
              <a
                href={project.github}
                className="Github__Btn"
                target="_blank"
                rel="opener referrer"
              >
                <i>
                  <FaGithub />
                </i>
                GitHub
              </a>
              <a
                href={project.LiveUrl}
                className="LivePreview__Btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
                <i>
                  <FaExternalLinkAlt />
                </i>
              </a>
            </div>
          </div>
        ))}
        <Comingsoon />
      </section>
    </main>
  );
}

export default Container;
