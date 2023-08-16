import React from 'react'

const CategoryCard = ({ category, content, setContent, allLinks}) => {

    console.log(content)

    function handleContent(e) {
        console.log(e.currentTarget.id)
       //setContent(e.currentTarget.id)
       const filteredLinks = allLinks.filter( element => element.type === e.currentTarget.id)
       setContent(filteredLinks)
    }

    return (
        <div className="CategoryCard-container" id={category.name} onClick={(e)=>handleContent(e)}>
            <p className="CategoryCard-emoji">{category?.emoji}</p>
            <p className="CategoryCard-name">{category?.name}</p>
        </div>
    );
}

export default CategoryCard
