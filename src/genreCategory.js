import React from 'react'

const GenreCategory = (props) => {
    let allGenre = [...props.allGenre];
    return (
    allGenre.map((item,index) => {
        return (
        <div key={index} className="genre" onClick={() => props.assignFilter(item)}>
            <p>{item}</p>
        </div>
    )
    })
    );
    
}

export default GenreCategory
