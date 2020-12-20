import React from 'react'

const Modal = (props) => {
    // console.log(props);
    const {id,title,image,year,description,genre} = props.item;
    
    if(props.item.id === props.overlay.id){
        return (
        <div>
            <div key={id} className="show-modalOverlay"></div>
            <div key={id} className="show-modal">
                <div className="modal-ShowImage">
                    <img src={image} alt={title}/>
                </div>
                <div className="modal-ShowDetails">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{genre}</p>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
    }
    else{
        return <></>
    }
}

export default Modal
