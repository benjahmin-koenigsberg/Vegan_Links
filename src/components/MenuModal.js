import React from 'react'
import { categories4 } from '../data/categories';

const MenuModal = ({ content, setContent, allLinks }) => {

    function handleContent(e) {
        console.log(e.currentTarget.id)
        const filteredLinks = allLinks.filter(element => element.type == e.currentTarget.id)
        setContent(filteredLinks)
    }

    return (
        <div className="MenuModal-container">
            {categories4.map((category) => (
                <h3 className="MenuModal-category" onClick={handleContent} id={category.name}>{category.name}</h3>
            ))}
        </div>
    );
}

export default MenuModal
