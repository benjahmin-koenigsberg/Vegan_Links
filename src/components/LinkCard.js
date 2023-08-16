import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LinkCard = ({ category, content, setContent, allLinks }) => {

    console.log(content)

    function handleContent(e) {

    }

    return (
        <div className="LinkCard-container" id={category.name} >
            <p className="LinkCard-emoji">{category?.emoji}</p>
            <p className="LinkCard-name">{category?.name}</p>
            <p className="LinkCard-description">{category?.description}</p>
            <p className="LinkCard-category">{category?.category}</p>
            <a href={category?.link} targe>
                <button>
                    <FontAwesomeIcon className='LinkCard-button' icon={faLink} />
                </button>
            </a>
                <button>
                    <FontAwesomeIcon className='LinkCard-button' icon={faHeart} />
                </button>

        </div>
    );
}

export default LinkCard
