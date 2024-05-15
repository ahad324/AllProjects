import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";

function Container({ projects }) {
  return (
    <main>
      <section>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <LazyLoad
              key={index}
              height={200}
              offset={500}
              placeholder={<Loader />}
            >
              <div className="Image">
                <img src={project.imgUrl} alt={project.altText} />
                {console.log(project.altText)}
              </div>
            </LazyLoad>
            <div className="Details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="Buttons">
              <a
                href={project.github}
                target="_blank"
                rel="opener referrer"
                style={{ marginRight: "10px" }}
              >
                <button className="Github__Btn">
                  <i>
                    <FaGithub />
                  </i>
                  GitHub
                </button>
              </a>
              <a
                href={project.LiveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="LivePreview__Btn">
                  Live Preview
                  <i>
                    <FaExternalLinkAlt />
                  </i>
                </button>
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
