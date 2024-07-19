import { useEffect, useState, useMemo, useCallback } from "react";
import Lenis from "@studio-freight/lenis";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";
import Data from "./Data.jsx";
import BlurFade from "./UI/BlurFade";

function Container() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const filteredData = useMemo(
    () =>
      Data.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return filteredData.slice(indexOfFirstProject, indexOfLastProject);
  }, [filteredData, currentPage, projectsPerPage]);

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / projectsPerPage),
    [filteredData.length, projectsPerPage]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when search term changes
  };

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  const renderPagination = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...");
      }
    }

    return (
      <div>
        {pageNumbers.map((number, index) =>
          number === "..." ? (
            <span key={index}>...</span>
          ) : (
            <span
              key={crypto.randomUUID()}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? "activePaginationPage" : ""}
            >
              {number}
            </span>
          )
        )}
      </div>
    );
  }, [totalPages, currentPage, handlePageChange]);

  return (
    <main>
      <BlurFade className="searchBox" inView delay={0.2} Once={false}>
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
          type="button"
        >
          <FaSearch />
        </button>
      </BlurFade>

      <section>
        {currentProjects.map((project, index) => (
          <BlurFade
            className="project"
            key={crypto.randomUUID()}
            inView
            delay={0.25 + index * 0.2}
            Once={false}
          >
            <LazyLoad height={400} offset={500} placeholder={<Loader />}>
              <div className="Image">
                <img
                  src={project.imgUrl}
                  alt={project.altText}
                  className="project-img"
                />
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
                rel="noopener noreferrer"
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
          </BlurFade>
        ))}
        {currentPage === totalPages && <Comingsoon />}
      </section>

      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} type="button">
            Previous
          </button>
        )}
        {renderPagination}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} type="button">
            Next
          </button>
        )}
      </div>
    </main>
  );
}

export default Container;
