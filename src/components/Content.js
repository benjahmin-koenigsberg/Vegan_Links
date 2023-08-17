import React from 'react'
import { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { categories4 } from '../data/categories'
import LinkCard from './LinkCard'
import { Movies } from '../data/movieLinks';
import SearchBar from './SearchBar'
import '../styles/Content.css';


const Content = ({ content, setContent, allLinks }) => {

  const [input, setInput] = useState('')

  useEffect(() => {
    setContent(categories4)
  }, [])


  return (
    <>
      <SearchBar input={input} setInput={setInput} content={content} setContent={setContent} allLinks={allLinks} />
      <div className='Content-container'>
        {!content[0]?.link ? content.map(category => <CategoryCard category={category}
          key={category.name}
          content={content}
          setContent={setContent}
          allLinks={allLinks} />
        ) : content.map(category => <LinkCard category={category}
          key={category.name}
          content={content}
          setContent={setContent}
          allLinks={allLinks} />
        )}
      </div>
    </>
  )
}

export default Content
