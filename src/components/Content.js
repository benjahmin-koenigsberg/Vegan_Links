import React from 'react'
import { useContext } from 'react'
import CategoryCard from './CategoryCard'
import LinkCard from './LinkCard'
import SearchBar from './SearchBar'
import '../styles/Content.css';
import LinkContext from '../context/LinkContext'


const Content = () => {

const { content, setContent, allLinks, input, setInput, categories4 } = useContext(LinkContext)

  return (
    <>
      <SearchBar />
      <div className='Content-container'>
        {!content[0]?.link ? content.map(category => <CategoryCard category={category}
          key={category.name}
           />
        ) : content.map(category => <LinkCard category={category}
          key={category.name}
           />
        )}
      </div>
    </>
  )
}

export default Content
