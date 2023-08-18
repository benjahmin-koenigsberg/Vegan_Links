import React from 'react'
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import LinkContext from '../context/LinkContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHeart, faLink, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import "../styles/LinkCard.css";

const LinkCard = ({ category }) => {

  const { content, setContent, allLinks, isFavorite, setIsFavorite, addToFavorites, copyLink } = useContext(LinkContext)

  return (
    <div className="LinkCard-container" id={category.name}>
      <div className="LinkCard-inner-container">
        <p className="LinkCard-emoji">{category?.emoji}</p>
        <p className="LinkCard-name">{category?.name}</p>
        <p className="LinkCard-description">{category?.description.length > 350 ?
        (
        <div className='LinkCard-description-overflow'>
          <p>{category.description}</p>
        </div>
          )
           : category.description}</p>
        <p className="LinkCard-category">{category?.category}</p>
              { category.type === 'Frequently Asked Questions' ? ("") : (<div className="LinkCard-buttons-container">
                  <a href={category?.link} id="link">
                      <div className="LinkCard-button-background">
                          <button>
                              <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                          </button>
                      </div>
                  </a>
                  <div className="LinkCard-button-background" onClick={ () => addToFavorites(category) }>
                      <button>
                          <FontAwesomeIcon className={ isFavorite ? "LinkCard-button" : "LinkCard-button"} icon={faHeart} />
                      </button>
                  </div>
                  <div className="LinkCard-button-background">
                      <button onClick={()=>copyLink(category)}>
                          <FontAwesomeIcon
                              className="LinkCard-button"
                              icon={faCopy}
                          />
                      </button>
                      <ToastContainer />
                  </div>
              </div>) }

      </div>
    </div>
  );
};

export default LinkCard
