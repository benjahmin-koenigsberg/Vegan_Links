import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { categories4 } from '../data/categories';
import '../styles/SearchBar.css'

const SearchBar = ({ input, setInput, content, setContent, allLinks }) => {

  // const goHome = () => {
  //   setContent(categories4)
  // }

  const handleInput = (e) => {
    setInput(e.target.value)
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
    <div class="m-2">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch ">
        <input
          onChange={handleInput}
          value={input}
          type="search"
          name="search"
          class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1" />

        <button
          onClick={updateContent}
          class="relative z-[2] flex items-center rounded-r-xl bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FontAwesomeIcon className='text-black text-lg' icon={faSearch} />

        </button>
      </div>
      {/* <div className="SearchBar-button-background" onClick={goHome}>
        <button>
          <FontAwesomeIcon className='SearchBar-home-button' icon={faHome} />
        </button>
      </div> */}
    </div>
  );
}

export default SearchBar
