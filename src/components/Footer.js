import React from 'react'
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHeart, faQuestion, faHome, faShuffle } from "@fortawesome/free-solid-svg-icons";
import MenuModal from './MenuModal';
import '../styles/Footer.css';

const Footer = () => {

const {
  clearStorage,
  menuModal,
  shuffleContent,
  handleMenu,
  goHome,
  goAbout,
  goToFavs,
} = useContext(LinkContext)


  return (
    <>
     { menuModal? <MenuModal /> : "" }
      <div className="Footer-container">
        <FontAwesomeIcon icon={faHome} className="text-4xl Footer-icon" onClick={goHome}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faQuestion} className="text-4xl Footer-icon" onClick={goAbout} ></FontAwesomeIcon>

        <div className="Footer-icon-border">
          <FontAwesomeIcon
            icon={faList}
            className="text-4xl Footer-icon"
            onClick={handleMenu}></FontAwesomeIcon>
        </div>

        <FontAwesomeIcon
          icon={faShuffle}
          className="text-4xl Footer-icon" onClick={shuffleContent}></FontAwesomeIcon>

        <FontAwesomeIcon icon={faHeart} className="text-4xl Footer-icon" onClick={goToFavs} onDoubleClickCapture={clearStorage} ></FontAwesomeIcon>
      </div>
    </>
  );
}

export default Footer
