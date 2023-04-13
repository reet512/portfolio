
/** @format */

import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.png";
import IMG2 from "./../../assets/portfolio2.png";
import IMG3 from "./../../assets/portfolio3.png";
import IMG4 from "./../../assets/portfolio4.png";
import IMG5 from "./../../assets/portfolio5.png";
import IMG6 from "./../../assets/portfolio6.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Expense Reimbursement System",
    github: "https://github.com/reet512/ExpenseReimbursement",
  },
  {
    id: 2,
    image: IMG2,
    title: "YoutubeDownload Extension",
    github: "https://github.com/raireet/youtube-downloader-extension",
  }
  ,
  {
    id: 3,
    image: IMG3,
    title: "EnglishEspresso",
    github: "https://github.https://github.com/reet512/English-Espereso/reet512/blog",
    
  },
  {
    id: 4,
    image: IMG4,
    title: "TIC-TAC-TOE",
    github: "https://github.com/reet512/TIC-TAC-TOE",
    
  },
  {
    id: 5,
    image: IMG5,
    title: "Blog",
    github: "https://github.com/reet512/blog",
    
  }
  ,
    
  {
    id: 6,
    image: IMG6,
    title: "Portfolio",
    github: "https://github.com/reet512/portfolio",
  }
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {data.map((i) => {
          return (
            <article key={i.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={i.image} alt={i.title} />
              </div><h3>{i.title}</h3>
              <div className="portfolio__item-cta">
                <a href={i.github} className="btn" target="-blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
