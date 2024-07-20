import { useEffect, useState, useMemo, useCallback } from "react";
import Lenis from "@studio-freight/lenis";
import { FaSearch } from "react-icons/fa";
import Comingsoon from "./comingsoon.jsx";
import Data from "./Data.jsx";
import BlurFade from "./UI/BlurFade";
import Filters from "./Filters.jsx";
import Card from "./Card.jsx";

function Container() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(""); // Change to a single filter
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

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update to handle a single filter
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const filteredData = useMemo(() => {
    return Data.filter((project) => {
      const matchesSearchTerm = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        selectedFilter === "" ||
        project.category
          .map((cat) => cat.toLowerCase())
          .includes(selectedFilter.toLowerCase());
      return matchesSearchTerm && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

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
      <div className="Filter-SearchBox">
        <BlurFade className="searchBox" delay={0.2} inview>
          <input
            name="searchBox"
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
        <BlurFade className="Filter" delay={0.5} inview>
          <Filters onFilterChange={handleFilterChange} />
        </BlurFade>
      </div>

      <section className="ProjectsSection">
        {currentProjects.map((project, index) => (
          <Card key={crypto.randomUUID()} project={project} index={index} />
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
