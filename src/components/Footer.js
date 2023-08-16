import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import MenuModal from './MenuModal';

const Footer = ({menuModal, setMenuModal, content, setContent, allLinks, Faq }) => {

  let favArr = [];

  const getStorage = () => {
      for (let i = 0; i < localStorage.length; i++) {
        let favObj = localStorage.getItem(localStorage.key(i));
        if (favObj !== 'INFO')
        favArr.push(JSON.parse(favObj));
      }
    };
getStorage()

  function handleMenu(e) {
    console.log(e)
    setMenuModal( (prev) => !prev )
  //  setContent(Movies)
  }

  function faq(){
  setContent(Faq)
  }

  return (
    <>
     { menuModal? <MenuModal content={content} setContent={setContent} allLinks={allLinks} /> : "" }
      <div className="Footer-container">
        <FontAwesomeIcon
          icon={faQuestion}
          className="text-4xl Footer-icon" onClick={faq}></FontAwesomeIcon>
        <div className="Footer-icon-border">
          <FontAwesomeIcon
            icon={faList}
            className="text-4xl Footer-icon"
            onClick={handleMenu}></FontAwesomeIcon>
        </div>
        <FontAwesomeIcon icon={faHeart} className="text-4xl Footer-icon" onClick={ () => {
          getStorage()
          setContent(favArr)
        } }></FontAwesomeIcon>
      </div>
    </>
  );
}

export default Footer
