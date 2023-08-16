import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import MenuModal from './MenuModal';

const Footer = ({menuModal, setMenuModal, content, setContent, allLinks }) => {

  function handleMenu(e) {
    console.log(e)
    setMenuModal( (prev) => !prev )
  //  setContent(Movies)
  }

  return (
    <>
     { menuModal? <MenuModal content={content} setContent={setContent} allLinks={allLinks} /> : "" }
      <div className="Footer-container">
        <FontAwesomeIcon
          icon={faQuestion}
          className="text-4xl"></FontAwesomeIcon>
        <div className="Footer-icon-border">
          <FontAwesomeIcon
            icon={faList}
            className="text-4xl"
            onClick={handleMenu}></FontAwesomeIcon>
        </div>
        <FontAwesomeIcon icon={faHeart} className="text-4xl"></FontAwesomeIcon>
      </div>
    </>
  );
}

export default Footer
