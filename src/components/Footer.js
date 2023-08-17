import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import MenuModal from './MenuModal';
import { categories4 } from '../data/categories';
import { AboutSections } from '../data/AboutSections';
import '../styles/Footer.css';

const Footer = ({menuModal, setMenuModal, content, setContent, allLinks, Faq }) => {


  useEffect(()=>{

  },[content])

  const shuffleContent = (prev) => {
    const newArr = shuffle(content)
    setContent([...newArr])
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


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
  setContent([...Faq])
  }

  const goHome = () => {
    setContent(categories4)
  }

  const goAbout = () => {
setContent(AboutSections)
  }

  return (
    <>
     { menuModal? <MenuModal content={content} setContent={setContent} allLinks={allLinks} /> : "" }
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

        <FontAwesomeIcon icon={faHeart} className="text-4xl Footer-icon" onClick={ () => {
          getStorage()
          setContent(favArr)
        } }></FontAwesomeIcon>
      </div>
    </>
  );
}

export default Footer
