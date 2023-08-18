import React from 'react'
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import "../styles/MenuModal.css";

const MenuModal = () => {

 const {content, setContent, allLinks, categories4, handleContent, goHome } = useContext(LinkContext)

    return (
        <div className="MenuModal-container" id="menu">
            <h3 className='MenuModal-category' onClick={goHome}>Home</h3>
            {categories4.map((category) => (
                <h3 className="MenuModal-category" onClick={ (e)=>handleContent(e)} id={category.name}>{category.name}</h3>
            ))}
        </div>
    );
}

export default MenuModal
