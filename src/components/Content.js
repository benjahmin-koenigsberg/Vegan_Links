import { useContext } from 'react'
import CategoryCard from './CategoryCard'
import LinkCard from './LinkCard'
import SearchBar from './SearchBar'
import '../styles/Content.css';
import LinkContext from '../context/LinkContext'


const Content = () => {

const { content } = useContext(LinkContext)


  return (
    <>
      <SearchBar />
      <div className='Content-container'>
        { !content[0]?.link ? content.map( (category, index) => <CategoryCard category={category}
          key={index}
           />
        ) : content.map((category, index) => <LinkCard category={category} key={index} />
        )}
      </div>
    </>
  )
}

export default Content
