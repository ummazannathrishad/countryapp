import React, {useEffect, useState} from 'react';

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        props.onsearch(searchText);
    },[searchText])
  return (
    <div style={{textAlign : "center"}}>
        <input type="text" placeholder="search-country" onChange={handleChange} value={searchText}/>
    </div>
  )
}

export default Search;