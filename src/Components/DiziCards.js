import React from "react";
import { Link } from "react-router-dom";
import "../CSS/DiziCards.css";
const DiziCards = ({dizi}) => {
  return (
    <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={dizi.image} alt="" />
          </figure>
          <div className="article-body">
            <h2> {dizi.title} </h2>
            <p>{dizi.decr}</p>
            <Link to={'/${dizi.id}'} className="watch now">
              Watch now
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DiziCards;
