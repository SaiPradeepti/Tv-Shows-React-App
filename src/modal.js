import React from 'react'

const Modal = (props) => {
    const {id,title,image,year,description,genre} = props.item;
    
    if(props.item.id === props.overlay.id){
        return (
        <div>
            <div key={id} className="show-modalOverlay"></div>
            <div key={id} className="show-modal">
                <div className="modal">
                    <div className="modal-ShowImage">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="modal-ShowDetails">
                        <p style={{textAlign: 'center'}}>{title}</p>
                        <p>Plot: {description}</p>
                        <p>Genre: {genre}</p>
                        <p>Year: {year}</p>
                        <button className="modal-close" onClick={() => {
                            console.log('close modal');
                            document.querySelector('.show-modalOverlay').classList.add('close');
                            document.querySelector('.show-modal').classList.add('close');
                        }}>close</button>
                    </div>
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
