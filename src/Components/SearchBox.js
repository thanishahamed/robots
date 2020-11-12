import React from 'react';


const SearchBox = ({searchChange}) =>{
    return(
        <div className='pa2'>
            <input type="search" 
            placeholder="Seach Robots" 
            className="pa3 ba b--green bg-lighttest-blue"
            onChange = {searchChange}/>
        </div>
    );
}


export default SearchBox;