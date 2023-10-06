import React from 'react'
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import '../styles/CategoryCard.css';

const CategoryCard = ({category}) => {

const {  handleContent } = useContext(LinkContext)

    return (
        <div className="CategoryCard-container" id={category.name} onClick={(e) => handleContent(e)}>
            <p className="CategoryCard-emoji">{category?.emoji}</p>
            <h6 className="CategoryCard-name "  >{category?.name}</h6>
        </div>
    );
}

export default CategoryCard
