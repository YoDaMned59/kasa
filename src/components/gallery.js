import React from "react";
import "../styles/gallery.scss";
import housingData from "../data/housings.json";

export const Housings = () => {
  return (
    <div className="housing-list">
      {housingData.map((housing) => (
        <div key={housing.id} className="housing-card">
          <img src={housing.cover} alt={housing.title} />
          <h2>{housing.title}</h2>
          <p>{housing.location}</p>
        </div>
      ))}
    </div>
  );
};
