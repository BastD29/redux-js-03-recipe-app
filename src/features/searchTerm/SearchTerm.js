import React from 'react';
import searchIconUrl from '../../images/search.svg';
import clearIconUrl from '../../images/clear.svg';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';

export default function SearchTerm(props) {
  const {searchTerm, dispatch} = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  }

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  }

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  )
}
