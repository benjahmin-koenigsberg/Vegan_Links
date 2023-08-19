import { createContext, useState, useEffect } from 'react'
import { Faq } from '../data/Faq';
import { allLinks } from '../data/AllLinks';
import { categories4 } from '../data/categories'
import { AboutSections } from '../data/AboutSections';
import "../styles/LinkCard.css";
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify';
import LinkCard from '../components/LinkCard';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {

    const [menuModal, setMenuModal] = useState(false)
    const [content, setContent] = useState(categories4)
    const [isFavorite, setIsFavorite] = useState(false);
    const [input, setInput] = useState('')
    const [ favoritesArray , setFavoritesArray ] = useState([])

    useEffect(()=>{
    },[content])

   // let favArr = [];


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

// const getStorage = () => {

//        const favoritesArr = JSON.parse(localStorage.getItem('favorites'))
//        // const favoritesArr = localStorage.getItem('favorites')
//         //favoritesArr.forEach(element => console.log(element.name))
//         if (favoritesArr) {
//         const filteredArr = favoritesArr.filter( el => el.name !== undefined )
//         setContent(filteredArr)
//         } else
//             setContent([{ name: 'No favorites', link: '##', description: '  ', type: 'Frequently Asked Questions' }])
//     };


const getStorage = () => {
        let favArr = [];
        for (let i = 0; i <= localStorage.length; i++) {
            let favObj = localStorage.getItem(localStorage.key(i));
            if ((favObj !== "INFO") && (favObj !== null) && (favObj !== undefined)   ) favArr.push(JSON.parse(favObj));

        }
       // setFavoritesArray(favArr)
       if (favArr.length === 0){
        setContent([{ name: 'No favorites', link: '##', description: '  ', type: 'Frequently Asked Questions' }])
       } else {
        setContent(favArr)
       }
    };


    const goToFavs = () => {
        getStorage();
    }

    const clearStorage = () => {
    localStorage.clear()
    }

    function handleMenu(e) {
       // console.log(e)
        setMenuModal((prev) => !prev)
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


    function updateContent() {

        const filtered = allLinks.filter((item) => {
            if (
                item.name.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.category.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.description.toLowerCase().includes(`${input.toLowerCase()}`) ||
                item.type.toLowerCase().includes(`${input.toLowerCase()}`)

            ) {
                setContent(filtered)
            }
        });

    }



    const copyLink = (category) => {
        navigator.clipboard.writeText(category.link);
        toast.info(`URL copied to clipboard!`)
    }

    // const addToFavorites = (category) => {

    //     if (true) {
    //     setIsFavorite(true)
    //     const newFavorite = {
    //         id: uuidv4(),
    //         name: category.name,
    //         type: category.type,
    //         category: category.category,
    //         description: category.description,
    //         link: category.link,
    //     }
    //     setFavoritesArray([newFavorite, ...favoritesArray])
    //     toast(`Link added to favorites`)
    //    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    //     }
    //     else {
    //        setIsFavorite(false)
    //         console.log('Already in favorites')

    //     }
    // }


    const addToFavorites = (category) => {

        const favObj = {
            name: category.name,
            link: category.link,
            type: category.type,
            category: category.category,
            description: category.description,
        };

        if (!isFavorite) {
            setIsFavorite(true);
            if (!category.description) category.description = '  ';
            localStorage.setItem(category.name, JSON.stringify(favObj))
            toast.success(`Link added to favorites`)
        }
        else {
            localStorage.removeItem(category.name, JSON.stringify(favObj))
            toast.error(`Link removed from favorites`)
            setIsFavorite(false)
        };
            return
        }



    return (
        <LinkContext.Provider
            value={{
                goToFavs,
                clearStorage,
                copyLink,
                addToFavorites,
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
                isFavorite,
                setIsFavorite,
               // favArr,
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
