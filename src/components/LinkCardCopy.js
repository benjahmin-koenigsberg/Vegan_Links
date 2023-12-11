import "../styles/LinkCard.css";
import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkContext from '../context/LinkContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHeart, faLink, faTrashCan, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const LinkCardCopy = ({ category }) => {

    const [isFavorite, setIsFavorite] = useState(null);

    const [linkDetails, setLinksDetails] = useState({
        title: '',
        description: '',
        image: ''
    })

    const [show, setShow] = useState(false);




    const { copyLink } = useContext(LinkContext)


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






    const getLinkDetails = async () => {


        const apiKey = 'pk_9e037b4b6e1936d3a88d7e0288ca1c1cab1c20b3';
        const url = category.link
        const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;

        // Make a GET request using the Fetch API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Process the JSON response
                setLinksDetails({
                    ...linkDetails,
                    title: data.title,
                    description: data.description,
                    image: data.images[0]
                })
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

    }


    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        getLinkDetails()
    }


    //console.log(category.type)


    return (
        <>
            <div className="LinkCard-container" id={category.name}>
                <p className="LinkCard-name">{category?.name}</p>
                {
                    // category.type === 'Frequently Asked Questions' ?
                    category.type === 'About' ?

                        (
                            <div className="LinkCard-inner-container">
                                <p className="LinkCard-emoji">{category.emoji}</p>
                                {/* <p className="LinkCard-name">{category?.name}</p> */}
                                <p className="LinkCard-description">{category?.description}</p>
                                <div className="LinkCard-buttons-container">
                                    <a href={category?.link} id="link" >
                                        <div className="LinkCard-button-background">
                                            <button>
                                                <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                                            </button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <Button variant="transparent" onClick={handleShow}>
                                        <FontAwesomeIcon className="LinkCard-button modal-button" icon={faQuestionCircle} />
                                    </Button>

                                </div>

                            </>
                        )
                }
                {/* <div className="LinkCard-inner-container">
                <p className="LinkCard-emoji">{category?.emoji}</p>
                <p className="LinkCard-name">{category?.name}</p>
                <p className="LinkCard-description">{category?.description.length > 350 ?
                <p className="LinkCard-description">{linkDetails?.description.length > 350 ?

                    (
                        <div className='LinkCard-description-overflow'>
                            <p>{category.description}</p>
                            <p>{linkDetails.description}</p>

                        </div>
                    )
                    : category.description}</p>
                    : linkDetails.description}</p>
                <img src={linkDetails.image} />
                <p className="LinkCard-category">{category?.category}</p>
                {category.type === 'Frequently Asked Questions' ? ("") : (
                    <div className="LinkCard-buttons-container">
                    <a href={category.link} id="link">
                        <div className="LinkCard-button-background">
                            <button>
                                <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                            </button>
                        </div>
                    </a>
                    <div className="LinkCard-button-background" onClick={() => addToFavorites(category)}>
                        <button>
                            <FontAwesomeIcon className={isFavorite ? "LinkCard-button favorite" : "LinkCard-button"} icon={faHeart} />
                        </button>
                    </div>
                    <div className="LinkCard-button-background">
                        <button onClick={() => copyLink(category)}>
                            <FontAwesomeIcon
                                className="LinkCard-button"
                                icon={faCopy}
                            />
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                </div>
                )
            }

            </div> */}

                <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">{linkDetails.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>{linkDetails.description}</p>
                            <img src={linkDetails.image} className="text-center" alt={linkDetails.description} />
                        </Modal.Body>
                        <Modal.Body >
                            <div className="d-flex flex-row justify-evenly">

                                <a href={category.link} id="link">
                                    <div className="modal-button">
                                        <button>
                                            <FontAwesomeIcon className="LinkCard-button" icon={faLink} />
                                        </button>
                                    </div>
                                </a>

                                <div className="modal-button" onClick={() => addToFavorites(category)}>
                                    <button>
                                        <FontAwesomeIcon className={isFavorite ? "LinkCard-button favorite" : "LinkCard-button"} icon={faHeart} />
                                    </button>
                                </div>

                                <div className="modal-button">
                                    <button onClick={() => copyLink(category)}>
                                        <FontAwesomeIcon
                                            className="LinkCard-button"
                                            icon={faCopy}
                                        />
                                    </button>
                                </div>

                            </div>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose} className="text-primary">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default LinkCardCopy
