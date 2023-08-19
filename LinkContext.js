/** @format */

import { createContext, useState, useEffect } from "react";
import { Faq } from "../data/Faq";
import { allLinks } from "../data/AllLinks";
import { categories4 } from "../data/categories";
import { AboutSections } from "../data/AboutSections";
import "../styles/LinkCard.css";
import { toast } from "react-toastify";
//import LinkCard from "../components/LinkCard";

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [menuModal, setMenuModal] = useState(false);
  const [content, setContent] = useState(categories4);
  const [input, setInput] = useState("");
  const [favoritesArray, setFavoritesArray] = useState([]);

  useEffect(() => {}, [content]);

  const shuffleContent = (prev) => {
    const newArr = shuffle(content);
    setContent([...newArr]);
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function handleContent(e) {
    setMenuModal((prev) => !prev);
    const filteredLinks = allLinks.filter(
      (element) => element.type === e.currentTarget.id
    );
    setContent(filteredLinks);
    const menu = document.getElementById('menu')
      console.log(menu)
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getStorage = () => {
    let favArr = [];
    for (let i = 0; i <= localStorage.length; i++) {
      let favObj = localStorage.getItem(localStorage.key(i));
      if (favObj !== "INFO" && favObj !== null && favObj !== undefined)
        favArr.push(JSON.parse(favObj));
    }
    // setFavoritesArray(favArr)
    if (favArr.length === 0) {
      setContent([
        {
          name: "No favorites",
          link: "##",
          description: "  ",
          type: "Frequently Asked Questions",
        },
      ]);
    } else {
      setContent(favArr);
    }
  };

  const goToFavs = () => {
    getStorage();
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  function handleMenu(e) {
    setMenuModal((prev) => !prev);
  }

  function faq() {
    setContent([...Faq]);
  }

  const goHome = () => {
    setContent(categories4);
  };

  const goAbout = () => {
    setContent(AboutSections);
  };

  function updateContent() {
    const filtered = allLinks.filter((item) => {
      if (
        item.name.toLowerCase().includes(`${input.toLowerCase()}`) ||
        item.category.toLowerCase().includes(`${input.toLowerCase()}`) ||
        item.description.toLowerCase().includes(`${input.toLowerCase()}`) ||
        item.type.toLowerCase().includes(`${input.toLowerCase()}`)
      ) {
        setContent(filtered);
      }
    });
  }

  const copyLink = (category) => {
    navigator.clipboard.writeText(category.link);
    toast.info(`URL copied to clipboard!`);
  };

  return (
    <LinkContext.Provider
      value={{
        goToFavs,
        clearStorage,
        copyLink,
        favoritesArray,
        setFavoritesArray,
        updateContent,
        allLinks,
        input,
        setInput,
        content,
        setContent,
        menuModal,
        setMenuModal,
        categories4,
        shuffleContent,
        shuffle,
        handleContent,
        handleInput,
        getStorage,
        handleMenu,
        faq,
        goHome,
        goAbout,
      }}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
