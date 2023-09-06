import React from "react";
import { ExploreContainer } from "./Common";

function ExploreCard(props) {
  return (
    <ExploreContainer>
      <div key={props.id} className="explore__card">
        <div className="explore__card__title">
          <h3 className="project__title">
            <a href="#">
              Project Title: Hard Coded Title{props.projectTitle}
            </a>
          </h3>
        </div>
        <div className="explore__card__content">
          <h4 className="project__author">
            Project Author: Hard Coded Author{props.projectAuthor}
          </h4>
        </div>
      </div>
    </ExploreContainer>
  );
}
export default ExploreCard;
