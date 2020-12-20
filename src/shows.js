import React, { useState } from 'react';
import { CgMoreO } from "react-icons/cg";
// import { Modal } from 'react-responsive-modal';
import Modal from './modal'

const Shows = (props) => {
   const [overlay, setOverlay] = useState({id:'',value:false});
//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);
  
    const newdata = props.data.map((item,index) => {
        const {title,image,year,description,genre} = item;
        return {title,image,year,description,genre,id:index+1}
    });    
    
    return (
        newdata.map(item => {
        const {image,id} = item;
        return (
            <div key={id} className="show" data-key={id}>
                <img src={image} alt="title" className="show-image"/>
                <div className="show-filter"></div>
                <div className="show-icon">                    
                    <CgMoreO key={id} onClick={()=>{
                        setOverlay({id:item.id,value:true})
                    }}/>
                </div>
                {
                    overlay && <Modal item={item} overlay={overlay}/>
                }
            </div>  
        );     
    })
    );
}
export default Shows;
