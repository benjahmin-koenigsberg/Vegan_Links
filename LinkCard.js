import React from 'react'
import { useState  } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const LinkCard = ({ category, content, setContent, allLinks }) => {

  function handleContent(e) {}

  const [isFavorite, setIsFavorite] = useState(false);
  // const [favArray, updateFavArray] = useState([])

  const addToFavorites = () => {
    if (!category.description) category.description = "  ";
    const favObj = {
      name: category.name,
      link: category.link,
      type: category.type,
      category: category.category,
      description: category.description,
    };
    localStorage.setItem(category.name, JSON.stringify(favObj));

    if (!isFavorite) {
      setIsFavorite(true);
      toast(`Link added to favorites`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    } else {
        setIsFavorite(false);
           localStorage.removeItem(category.name);
        toast(`Link removed from favorites`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "info",
        });

        //   const getStorage = () => {
        //     let favArr = [];
        //       for (let i = 0; i <= localStorage.length; i++) {
        //           let favObj = localStorage.getItem(localStorage.key(i));
        //           if (favObj !== "INFO") favArr.push(JSON.parse(favObj));
        //           setContent(favArr);
        //          document.location.reload();
        //       }
        //   };
        //   getStorage();
      };
      return;
        };


  function copyLink() {
    navigator.clipboard.writeText(category.link);
    toast(`URL copied to clipboard!`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
    });
  }

  return (
    <div className="LinkCard-container" id={category.name}>
      <div className="LinkCard-inner-container">
        <p className="LinkCard-emoji">{category?.emoji}</p>
        <p className="LinkCard-name">{category?.name}</p>
        <p className="LinkCard-description">{category?.description}</p>
        <p className="LinkCard-category">{category?.category}</p>
              { category.type === 'Frequently Asked Questions' ? ("") : (<div className="LinkCard-buttons-container">
                  <a href={category?.link} id="link">
                      <div className="LinkCard-button-background">
                          <button>
                              <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                          </button>
                      </div>
                  </a>
                  <div className="LinkCard-button-background" onClick={addToFavorites}>
                      <button>
                          <FontAwesomeIcon className={isFavorite ? "favorite LinkCard-button" : "LinkCard-button"} icon={faHeart} />
                      </button>
                  </div>
                  <div className="LinkCard-button-background">
                      <button onClick={copyLink}>
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
