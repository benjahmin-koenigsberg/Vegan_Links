import { createContext, useState } from 'react'
import { Faq } from '../data/Faq';
import { allLinks } from '../data/AllLinks';
import { categories4 } from '../data/categories'
import { AboutSections } from '../data/AboutSections';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/LinkCard.css";


const LinkContext = createContext();

export const LinkProvider = ({ children }) => {


    const [menuModal, setMenuModal] = useState(false)
    const [content, setContent] = useState(categories4)
    const [isFavorite, setIsFavorite] = useState(false);
    const [input, setInput] = useState('')

    // useEffect(() => {
    // }, [content])

    let favArr = [];

    const shuffleContent = (prev) => {
        const newArr = shuffle(content)
        setContent([...newArr])
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    function handleContent(e) {
        //console.log(e.currentTarget.id)
        const filteredLinks = allLinks.filter(element => element.type === e.currentTarget.id)
        setContent(filteredLinks)
        //document.getElementById('menu').className = 'dissapear'
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const getStorage = () => {
        for (let i = 0; i < localStorage.length; i++) {
            let favObj = localStorage.getItem(localStorage.key(i));
            if (favObj !== 'INFO')
                favArr.push(JSON.parse(favObj));
        }
    };

    function handleMenu(e) {
        console.log(e)
        setMenuModal((prev) => !prev)
        //  setContent(Movies)
    }

    function faq() {
        setContent([...Faq])
    }

    const goHome = () => {
        setContent(categories4)
    }

    const goAbout = () => {
        setContent(AboutSections)
    }


    const addToFavorites = (category) => {

        if (!category.description) category.description = "  ";
        const favObj = {
            name: category.name,
            link: category.link,
            type: category.type,
            category: category.category,
            description: category.description,
        };
        localStorage.setItem(category.name, JSON.stringify(favObj));

        if (!isFavorite) {
            setIsFavorite(true);
            toast(`Link added to favorites`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "error",
            });
        } else {
            setIsFavorite(false);
            localStorage.removeItem(category.name);
            toast(`Link removed from favorites`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: "info",
            });
        };

        return;
    };


    function copyLink(category) {
        navigator.clipboard.writeText(category.link);
        toast(`URL copied to clipboard!`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "success",
        });
    }


    function updateContent() {

        const filtered = allLinks.filter((item) => {
            if (
                item.name.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.category.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.description.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.type.toLowerCase().includes(`${input.toLowerCase()}`)

            ) {
                return true;
            }
        });
        setContent(filtered)
    }


    return (
        <LinkContext.Provider
            value={{
                updateContent,
                addToFavorites,
                copyLink,
                allLinks,
                input,
                setInput,
                content,
                setContent,
                menuModal,
                setMenuModal,
                isFavorite,
                setIsFavorite,
                favArr,
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
            }}
        >
            {children}
        </LinkContext.Provider>
    )

}

export default LinkContext;
