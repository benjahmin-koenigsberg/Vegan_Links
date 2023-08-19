import React from 'react'
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkContext from '../context/LinkContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHeart, faLink, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "../styles/LinkCard.css";

const LinkCard = ({ category }) => {

  const { isFavorite, setIsFavorite, favoritesArray, setFavoritesArray, addToFavorites, copyLink, goToFavs } = useContext(LinkContext)


  // const addToFavorites = (category) => {
  //   if (!isFavorite) {
  //     setIsFavorite(true)
  //     // if (!category.description) category.description = "  ";
  //     const favObj = {
  //     name: category.name,
  //     link: category.link,
  //     type: category.type,
  //     category: category.category,
  //     description: category.description,
  //   };
  //   localStorage.setItem(category.name, JSON.stringify(favObj));
  //    toast(`Link added to favorites`)
  // }
  //   else {
  //     setIsFavorite(false);
  //     localStorage.removeItem(category.name);
  //     toast(`Link removed from favorites`)
  //   };
  //   return;
  // };




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
                  <a href={category.link} id="link">
                      <div className="LinkCard-button-background">
                          <button>
                              <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                          </button>
                      </div>
                  </a>
                  <div className="LinkCard-button-background" onClick={ () => addToFavorites(category) }>
                      <button>
              <FontAwesomeIcon className="LinkCard-button" icon={faHeart} />
                      </button>
                  </div>
                  <div className="LinkCard-button-background">
                      <button onClick={ ()=>copyLink(category)}>
                          <FontAwesomeIcon
                              className="LinkCard-button"
                              icon={faCopy}
                          />
                      </button>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
                  </div>
              </div>) }

      </div>
    </div>
  );
};

export default LinkCard
