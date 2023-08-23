import React from 'react'
import { useContext } from 'react';
import LinkContext from '../context/LinkContext';
import '../styles/CategoryCard.css';

const CategoryCard = ({category}) => {

const {  handleContent } = useContext(LinkContext)

    return (
        <div className="CategoryCard-container" id={category.name} onClick={(e) => handleContent(e)}>
            <p className="CategoryCard-emoji">{category?.emoji}</p>
            <p className="CategoryCard-name" style={{fontSize: `${category.name.length > 18}` ? '.5rem' : '.65rem'  }}>{category?.name}</p>
        </div>
    );
}

export default CategoryCard
