import React, { useState } from "react";

function SearchBar({onSearch}) {
  const [city, setCity] = useState("");  
  
  function refreshState(){
    document.querySelector('#inputSearch').value = ""
    document.querySelector('#inputSearch').placeholder = 'Ultima..."'+city+'"'
    setCity("");
    //    
  }  
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      refreshState()      
    }}>
      <input
        id="inputSearch"
        className="form-control mr-sm-2"
        type="text"       
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"        
      >
      Agregar
      </button>
    </form>
  );
}
export default SearchBar