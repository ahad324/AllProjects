import React from "react";
import LazyLoad from "react-lazyload";
import Loader from "./Loader.jsx";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./UI/3d-card";
import BlurFade from "./UI/BlurFade";

const Card = ({ project, index }) => {
  return (
    <BlurFade delay={0.25 + index * 0.2} once={false} inview>
      <CardContainer className="card-container project">
        <CardBody className="card-body">
          <CardItem translateZ={70} className="card-item">
            <LazyLoad height={400} offset={500} placeholder={<Loader />}>
              <div className="Image">
                <img
                  src={project.imgUrl}
                  alt={project.altText}
                  className="project-img"
                />
              </div>
            </LazyLoad>
          </CardItem>
          <CardItem translateZ={60} className="card-item Details">
            <h2>{project.title}</h2>
          </CardItem>
          <CardItem translateZ={40} className="card-item Details">
            <p>{project.description}</p>
          </CardItem>
          <CardItem translateZ={30} className="card-item Buttons">
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
              Live
              <i>
                <FaExternalLinkAlt />
              </i>
            </a>
          </CardItem>
        </CardBody>
      </CardContainer>
    </BlurFade>
  );
};

export default Card;
