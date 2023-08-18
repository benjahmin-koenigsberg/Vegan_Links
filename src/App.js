import './App.css';
import { useState, useContext } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import Footer from './components/Footer';
import { Faq } from './data/Faq';
import { allLinks } from './data/AllLinks';
import { categories4 } from './data/categories';
import LinkContext, { LinkProvider } from './context/LinkContext';

function App() {

const [ menuModal, setMenuModal] = useState(false)
const [content, setContent] = useState(categories4)


  return (
    <LinkProvider>
    <div className="App">
      <Header />
     <Content />
      <Footer menuModal={menuModal} setMenuModal={setMenuModal} content={content} setContent={setContent} allLinks={allLinks} Faq={Faq} />
    </div>
    </LinkProvider>
  );
}

export default App;
