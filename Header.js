import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import '../styles/Header.css'

const Header = () => {


  const {

    goHome

  } = useContext(LinkContext)

  return (
    <div className="Header-container">
      <FontAwesomeIcon icon={faLink} className="Header-icon"></FontAwesomeIcon>
      <h1 className="Header-header" onClick={goHome}>VEGAN LINKS</h1>
      <FontAwesomeIcon icon={faLink} className="Header-icon"></FontAwesomeIcon>
    </div>
  );
}

export default Header
