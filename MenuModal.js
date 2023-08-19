import React from 'react'
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import "../styles/MenuModal.css";

const MenuModal = () => {

 const { categories4, handleContent, goHome, MenuModal } = useContext(LinkContext)

    return (
        <div className={MenuModal ? "MenuModal-container" : "MenuModal-container disappear"} >
            <h3 className='MenuModal-category' onClick={()=>{
                goHome()
                document.getElementById('menu').className = 'disappear'
                }}>Home</h3>
            {categories4.map((category) => (
                <h3 className="MenuModal-category" onClick={ (e)=>handleContent(e)} id={category.name}>{category.name}</h3>
            ))}
        </div>
    );
}

export default MenuModal
