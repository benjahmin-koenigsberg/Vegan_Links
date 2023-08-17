import React from 'react'
import { categories4 } from '../data/categories';
import "../styles/MenuModal.css";

const MenuModal = ({ content, setContent, allLinks }) => {

    function handleContent(e) {
        console.log(e.currentTarget.id)
        const filteredLinks = allLinks.filter(element => element.type == e.currentTarget.id)
        setContent(filteredLinks)
        document.getElementById('menu').className = 'dissapear'
    }

function backHome(){
    setContent(categories4)
}

    return (
        <div className="MenuModal-container" id="menu">
            <h3 className='MenuModal-category' onClick={backHome}>Home</h3>
            {categories4.map((category) => (
                <h3 className="MenuModal-category" onClick={handleContent} id={category.name}>{category.name}</h3>
            ))}
        </div>
    );
}

export default MenuModal
