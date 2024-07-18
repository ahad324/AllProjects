import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";
import Data from "./Data.jsx";

function Container() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

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
    setCurrentPage(1); // Reset to the first page when search term changes
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Calculate the paginated projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        <div>
          {pageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? "activePaginationPage" : ""}
            >
              {number}
            </span>
          ))}
          {/* {totalPages > 3 && currentPage < totalPages - 2 && <span>...</span>} */}
        </div>
      </>
    );
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
          <FaSearch />
        </button>
      </div>

      <section>
        {currentProjects.map((project, index) => (
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
        {currentPage === totalPages && <Comingsoon />}
      </section>

      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {renderPagination()}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </main>
  );
}

export default Container;
