import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import Footer from './components/Footer';
import { Faq } from './data/Faq';
import { allLinks } from './data/AllLinks';

function App() {


const [ menuModal, setMenuModal] = useState(false)
const [content, setContent] = useState([])

  useEffect(() => { }, [content])


  return (
    <div className="App">
      <Header />
     <Content content={content} setContent={setContent} allLinks={allLinks} />
      <Footer menuModal={menuModal} setMenuModal={setMenuModal} content={content} setContent={setContent} allLinks={allLinks} Faq={Faq} />
    </div>
  );
}

export default App;
