import React, { useState } from "react";
import "../styles/Filters.css";
import { FaHtml5, FaReact, FaStar } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Filters = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(""); // Single filter state

  const handleFilterChange = (filter) => {
    const updatedFilter = selectedFilter === filter ? "" : filter; // Toggle filter
    setSelectedFilter(updatedFilter);
    onFilterChange(updatedFilter);
  };

  const filterOptions = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "React", icon: <FaReact /> },
    { name: "NextJS", icon: <RiNextjsFill /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Featured", icon: <FaStar /> },
  ];

  return (
    <>
      <div className="radio-inputs">
        {filterOptions.map((filter) => (
          <label className="radio" key={filter.name}>
            <input
              type="radio"
              name="filter"
              checked={selectedFilter === filter.name}
              onChange={() => handleFilterChange(filter.name)}
            />
            <span className="name">
              <small>{filter.icon}</small>
              {filter.name}
            </span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Filters;
