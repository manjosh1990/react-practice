import React from 'react'
import './portfolio.css';

import data from './portfolio_data';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, image,title,github,demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target='_blank' className='btn'  rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio