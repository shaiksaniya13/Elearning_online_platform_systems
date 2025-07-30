import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // You can filter the courses based on this query later
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for a course..." 
        value={query} 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default Search;
