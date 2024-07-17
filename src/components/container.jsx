import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";
import Data from "./Data.jsx";

function Container() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Data);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    setFilteredData(
      Data.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <div className="searchBox">
        <input
          className="searchInput"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Projects..."
        />
        <button
          className="searchButton"
          aria-label="Search"
          title="Search"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <g clipPath="url(#clip0_2_17)">
              <g filter="url(#filter0_d_2_17)">
                <path
                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2_17"
                x="-0.418549"
                y="3.70435"
                width="29.7139"
                height="29.7139"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_17"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_17"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_2_17">
                <rect
                  width="28.0702"
                  height="28.0702"
                  fill="white"
                  transform="translate(0.403503 0.526367)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <section>
        {filteredData.map((project, index) => (
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
